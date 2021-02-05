import { setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber";
import { messages } from '@cucumber/messages'
export class World {
    public document?: messages.IGherkinDocument
    public apiVersion: string = ''
    public authMethods: any = {}

    public apiName?: string
    public apiInstance?: any
    public operationId: string = ''
    public requestContext?: any
    public method?: any
    public response?: any

    public undo: { (): void }[] = []

    public fixtures: { [key: string]: any } = {}
    public opts: { [key: string]: any } = {}
    
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

setWorldConstructor(World);
setDefaultTimeout(15 * 1000);
