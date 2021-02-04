import fs from 'fs'
import path from 'path'


interface iOperationParameter {
    name: string;
    source: string;
}

interface iUndo {
    type: 'safe' | 'unsafe' | 'idempotent';
    operationId: string;
    parameters: iOperationParameter[];
}

interface iUndoAction {
    tag: string;
    undo?: iUndo;
}

let UndoActions: { [version:string]: { [operationId:string] : iUndoAction } } = {};
for (let apiVersion of ['v1', 'v2']) {
    let content = fs.readFileSync(path.join(__dirname, `../${apiVersion}/undo.json`)).toString();
    UndoActions[apiVersion] = JSON.parse(content) as { [index: string] : iUndoAction };
}

export { UndoActions };