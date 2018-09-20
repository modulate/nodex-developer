exports = module.exports = function(agent, utils) {
  var api = {};
  
  
  api.info = function(url, id, options, cb) {
    console.log('GET PROJECT INFO!');
    
    /*
    if (typeof options == 'function') {
      cb = options;
      options = undefined;
    }
    options = options || {};
    options.url = url;
    */
    
    
  }
  
  return api;
};

exports['@implements'] = 'http://schemas.modulate.io/js/develop/proj';
exports['@singleton'] = true;
exports['@require'] = [
  './adapters'
];
