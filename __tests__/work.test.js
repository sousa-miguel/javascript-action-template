describe('work', () => {
    it('should work', async () => {
        const taskname = 'test-task';

        process.env['INPUT_TASK'] = taskname;

        const core = require('@actions/core');
        jest.spyOn(core, 'setOutput').mockImplementation(param => param);

        const { run } = require('../src/work');
        await run();

        expect(core.setOutput).toHaveBeenCalledWith('task', taskname);
    });
});