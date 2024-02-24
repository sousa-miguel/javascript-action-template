const core = require('@actions/core')

async function run () {
  try {
    const task = core.getInput('task')
    core.info(`Running task: ${task}`)

    // Do stuff here

    core.setOutput('task', task)
  } catch (error) {
    core.setFailed(error.message)
  }
}

module.exports = { run }
