declare global {
    interface String {
        templated(data: Object): string;
    }
    
    interface Object {
        lookup(path: string): any;
    }
}

interface IIndexable<T = any> { [key: string]: T }

Object.prototype.lookup = function (dottedPath: string): any {
    let result = this;
    for (let dotPath of dottedPath.split('.')) {
        for (let part of dotPath.split('[')) {
            if (part.includes(']')) {
                let results = result as Object[];
                result = results[parseInt(part)];
            } else {
                result = (result as IIndexable)[part];
            }
        }
    }
    return result;
}

String.prototype.templated = function (data: Object): string {
    let s = String(this)
    return s;
};

export { }