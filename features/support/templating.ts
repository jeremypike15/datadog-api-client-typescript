declare global {
    interface String {
        templated(data: Object): string;
        toOperationName(): string;
        toAttributeName(): string;
    }
}

interface IIndexable<T = any> { [key: string]: T }

function pathLookup(data: any, dottedPath: string): any {
    let result = data;
    for (let dotPath of dottedPath.split('.')) {
        for (let part of dotPath.split('[')) {
            if (part.includes(']')) {
                let results = result as Object[];
                result = results[parseInt(part)];
            } else {
                let value = (result as IIndexable);
                if (part in value) {
                    result = value[part]
                } else if (part.toAttributeName() in value){
                    result = value[part.toAttributeName()]
                } else {
                    throw new Error(`${part} not found in ${result} (started from ${dottedPath} in ${data})`);
                }
            }
        }
    }
    return result;
}

String.prototype.templated = function (data: Object): string {
    let regexp = /{{ *([^} ]+) *}}/g;
    return String(this).replace(regexp, function (...matches) {
        return pathLookup(data, matches[1]);
    });
};

String.prototype.toOperationName = function (): string {
    let s = String(this);
    return s.charAt(0).toLowerCase() + s.slice(1);
};

String.prototype.toAttributeName = function (): string {
    return String(this).replace(/_(.)/g, function (...matches) {
        return matches[1].toUpperCase();
    })
};

export { pathLookup };