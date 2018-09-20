exports = module.exports = function() {
  var uri = require('url')
    , gituri = require('hosted-git-info')
    , github = require('@octokit/rest')()
  
  
  
  if (process.env.GITHUB_ACCESS_TOKEN) {
    github.authenticate({
      type: 'token',
      token: process.env.GITHUB_ACCESS_TOKEN
    });
  }
  
  
  
  var adapter = {};
  
  adapter.canHandle = function(options) {
    var url = uri.parse(options.url);
    if (url.hostname !== 'github.com') { return false; }
    
    return true;
  }
  
  adapter.info = function(options, cb) {
    var gurl = gituri.fromUrl(options.url);
    
    github.repos.get({ repo: gurl.project, owner: gurl.user }, function(err, res) {
      if (err && err.code == 404) {
        return cb(null, undefined);
      } else if (err) {
        return cb(err);
      }
    
      var data = res.data;
      var proj = {};
      proj.name = data.name;
      proj.description = data.description;
      proj.homepage = data.html_url;
      proj.favoriteCount = data.stargazers_count;
      proj.subscriberCount = data.subscribers_count;
      proj.forkCount = data.forks_count;
      proj.createdAt = new Date(Date.parse(data.created_at));
      proj.modifiedAt = new Date(Date.parse(data.updated_at));
      return cb(null, proj);
    });
  }
  
  return adapter;
}

exports['@require'] = [];
