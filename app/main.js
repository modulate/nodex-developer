exports = module.exports = function(adapters, utils) {
  
  var api = {};
  
  api.info = function(url, options, cb) {
    if (typeof options == 'function') {
      cb = options;
      options = undefined;
    }
    options = options || {};
    options.url = url;
    
    var adapter;
    try {
      adapter = adapters.get(options);
    } catch (ex) {
      return cb(ex);
    }
    return adapter.info(options, cb);
  }
  
  return api;
};

exports['@implements'] = 'http://schemas.modulate.io/js/develop/proj';
exports['@singleton'] = true;
exports['@require'] = [
  './adapters'
];
