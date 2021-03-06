const { test } = require('tap')
const requireInject = require('require-inject')

test('should retrieve values from npm.commands.config', (t) => {
  const Get = requireInject('../../lib/get.js')
  const get = new Get({
    commands: {
      config: ([action, arg]) => {
        t.equal(action, 'get', 'should use config get action')
        t.equal(arg, 'foo', 'should use expected key')
        t.end()
      },
    },
  })

  get.exec(['foo'])
})
