process.env.NODE_ENV = 'testing'
const server = require('../dev-server.js')
// `npm run e2e -- --env chrome,firefox`
let opts = process.argv.slice(2)
if (opts.indexOf('--config') === -1) {
  opts = opts.concat(['--config', './config/nightwatch/nightwatch.js'])
}
if (opts.indexOf('--env') === -1) {
  opts = opts.concat(['--env', 'chrome'])
}

var spawn = require('cross-spawn')

var runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' })

runner.on('exit', code => {
  server.close()
  process.exit(code)
})

runner.on('error', err => {
  server.close()
  throw err
})
