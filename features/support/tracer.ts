import { tracer } from 'dd-trace';

tracer.init();

let PickleRunner = require('@cucumber/cucumber/lib/runtime/pickle_runner').default
let scenarioFunction = PickleRunner.prototype.run
let stepFunction = PickleRunner.prototype.runStep

PickleRunner.prototype.run = tracer.wrap(
    'cucumber.test',
    { type: 'test' },
    async function (this: void, ...args: any[]) {
        let pickleRunner = (this as any)
        console.log(this);
        
        let span = (tracer.scope().active() as any)
        span.resource = pickleRunner.pickle.name
        span.setTag('test.name', pickleRunner.pickle.name)
    
        let result = await scenarioFunction.apply(this, args);
        
        console.log(result)
        return result
    }
);


PickleRunner.prototype.runStep = tracer.wrap(
    'cucumber.step',
    { type: 'test' },
    async function (this: void, ...args: any[]) {
        console.log(args);
        let result = await stepFunction.apply(this, args);
        if (!args[0].isHook) {
            let span = (tracer.scope().active() as any)
            span.resource = args[0].pickleStep?.text
            span.setTag('test.name', args[0].pickleStep.text)
        }
        console.log(result)
        return result
    }
);

export default tracer;