import { setWorldConstructor } from "@cucumber/cucumber";

export class World {
    public apiVersion?: string

    private _api?: any
    private _configuration?: any

    public apiInstance?: any

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
}

setWorldConstructor(World)
