import {esbuildPlugin} from '@web/dev-server-esbuild';
import {jasmineTestRunnerConfig} from 'web-test-runner-jasmine';

export default {
    ...jasmineTestRunnerConfig(),
    plugins: [esbuildPlugin({ts: true, target: 'auto'})],
    nodeResolve: true,
    files: "test/**/*.(test|spec).[t|j]s"
};