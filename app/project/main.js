exports = module.exports = function(adapters) {
  
  var api = {};
  
 /**
  * Get software change management information.
  *
  * This function obtains information from software change management systems,
  * including GitHub and Bitbucket.
  *
  * The vast majority of packages published to npm use GitHub as an SCM provider,
  * but there are other providers in use including Bitbucket and GitLab, as well
  * as others that tend to be common is specific regions such as China.  Tooling
  * that is useful to analyze such information is available at:
  *   - [all-the-package-repos](https://github.com/nice-registry/all-the-package-repos)
  */
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

exports['@implements'] = 'http://schemas.modulate.io/js/developer/project';
exports['@singleton'] = true;
exports['@require'] = [
  './adapters'
];
