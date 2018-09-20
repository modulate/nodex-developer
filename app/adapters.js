exports = module.exports = function(IoC, github, logger) {
  var Adapters = require('../lib/adapters');
  
  
  var adapters = new Adapters();
  
  return Promise.resolve(adapters)
    .then(function(adapters) {
      var components = IoC.components('http://schemas.modulate.io/js/develop/proj/ProjectAdapter');
    
      return Promise.all(components.map(function(c) { return c.create(); } ))
        .then(function(plugins) {
          plugins.forEach(function(plugin, i) {
            logger.info('Loaded developer project adapter: ' + components[i].a['@host']);
            adapters.use(plugin);
          });
          
          adapters.use(github);
        })
        .then(function() {
          return adapters;
        });
    })
    .then(function(adapters) {
      return adapters;
    });
}

exports['@singleton'] = true;
exports['@require'] = [
  '!container',
  './adapters/github',
  'http://i.bixbyjs.org/Logger'
];
