import { setWorldConstructor } from "@cucumber/cucumber";
import { messages } from '@cucumber/messages'
import { IGivenStep } from "./given";
import { UndoActions } from './undo'

export class World {
    public document?: messages.IGherkinDocument
    public apiVersion?: string

    private _api?: any
    private _configuration?: any

    public apiName?: string
    public apiInstance?: any
    public operationId?: string
    public request?: any
    public method?: any
    public response?: any

    public undo: { (): void }[] = []

    public fixtures: { [key: string]: any } = {
        "unique": "Typescript",
        "unique_lower": "typescript"
    }
    public opts: { [key: string]: any } = {}

    api(): any {
        if (this._api === undefined) {
            this._api = require(`../../${this.apiVersion}`);
        }
        return this._api;
    }

    configuration(): any {
        if (this._configuration === undefined) {
            this._configuration = this.api().createConfiguration();
        }
        return this._configuration;
    }

    cleanup() {
        let undo = this.undo;
        undo.reverse();
        for (let clean of undo) {
            try {
                clean();
            } catch (error) {
                console.error(error);
            }
        }
        this.undo = [];
    }
}

setWorldConstructor(World)
