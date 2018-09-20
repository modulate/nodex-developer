function Adapters() {
  this._impls = [];
}

Adapters.prototype.use = function(impl) {
  this._impls.push(impl)
}

Adapters.prototype.get = function(options) {
  if (typeof options == 'string') {
    options = { url: options };
  }
  
  var impls = this._impls
    , impl, i, len;
  for (i = 0, len = impls.length; i < len; ++i) {
    impl = impls[i];
    if (impl.canHandle(options)) {
      return impl;
    }
  }
  
  // TODO: only show protocol, host here (strip password/tokens)
  throw new Error('Unsupported developer project: ' + options.url);
}


module.exports = Adapters;
