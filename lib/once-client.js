function noop(){}

function onceClient(shouldThrow) {
  return function(fn){
    return function(){
      const cb = fn || noop;

      if(shouldThrow === true && fn === null){
        throw new Error("Callback should only be called once");
      }

      if(fn === null) {
        return;
      }

      fn = null;

      cb.call(this, arguments);
    }
  }
}

module.exports = onceClient;