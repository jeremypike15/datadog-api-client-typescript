import { Before } from '@cucumber/cucumber'
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types'

import { World } from './world'

Before({ tags: '@skip' }, async function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return 'skipped' as any;
});

Before(
    function (
        this: World,
        { gherkinDocument, pickle }: ITestCaseHookParameter
    ) {
        let parts = gherkinDocument.uri?.split('/') as string[];
        this.apiVersion = parts[parts.length-2]
    })
