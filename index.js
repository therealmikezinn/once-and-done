const onceClient = require('./lib/once-client');

module.exports = {
  once: onceClient(false),
  onceStrict: onceClient(true),
};