/* global describe, it, expect */

var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../../app/project/adapters/github');


describe('project/adapters/github', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.be.undefined
    expect(factory['@singleton']).to.be.undefined;
  });
  
  describe('Adapter', function() {
    
    describe('.info', function() {
      
      describe('normal project', function() {
        var getStub = sinon.stub().yields(null, {
          data: 
           { id: 20238954,
             name: 'passport-slack',
             full_name: 'mjpearson/passport-slack',
             owner: 
              { login: 'mjpearson',
                id: 139480,
                avatar_url: 'https://avatars1.githubusercontent.com/u/139480?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/mjpearson',
                html_url: 'https://github.com/mjpearson',
                followers_url: 'https://api.github.com/users/mjpearson/followers',
                following_url: 'https://api.github.com/users/mjpearson/following{/other_user}',
                gists_url: 'https://api.github.com/users/mjpearson/gists{/gist_id}',
                starred_url: 'https://api.github.com/users/mjpearson/starred{/owner}{/repo}',
                subscriptions_url: 'https://api.github.com/users/mjpearson/subscriptions',
                organizations_url: 'https://api.github.com/users/mjpearson/orgs',
                repos_url: 'https://api.github.com/users/mjpearson/repos',
                events_url: 'https://api.github.com/users/mjpearson/events{/privacy}',
                received_events_url: 'https://api.github.com/users/mjpearson/received_events',
                type: 'User',
                site_admin: false },
             private: false,
             html_url: 'https://github.com/mjpearson/passport-slack',
             description: 'Slack OAuth2 strategy for Passport',
             fork: false,
             url: 'https://api.github.com/repos/mjpearson/passport-slack',
             forks_url: 'https://api.github.com/repos/mjpearson/passport-slack/forks',
             keys_url: 'https://api.github.com/repos/mjpearson/passport-slack/keys{/key_id}',
             collaborators_url: 'https://api.github.com/repos/mjpearson/passport-slack/collaborators{/collaborator}',
             teams_url: 'https://api.github.com/repos/mjpearson/passport-slack/teams',
             hooks_url: 'https://api.github.com/repos/mjpearson/passport-slack/hooks',
             issue_events_url: 'https://api.github.com/repos/mjpearson/passport-slack/issues/events{/number}',
             events_url: 'https://api.github.com/repos/mjpearson/passport-slack/events',
             assignees_url: 'https://api.github.com/repos/mjpearson/passport-slack/assignees{/user}',
             branches_url: 'https://api.github.com/repos/mjpearson/passport-slack/branches{/branch}',
             tags_url: 'https://api.github.com/repos/mjpearson/passport-slack/tags',
             blobs_url: 'https://api.github.com/repos/mjpearson/passport-slack/git/blobs{/sha}',
             git_tags_url: 'https://api.github.com/repos/mjpearson/passport-slack/git/tags{/sha}',
             git_refs_url: 'https://api.github.com/repos/mjpearson/passport-slack/git/refs{/sha}',
             trees_url: 'https://api.github.com/repos/mjpearson/passport-slack/git/trees{/sha}',
             statuses_url: 'https://api.github.com/repos/mjpearson/passport-slack/statuses/{sha}',
             languages_url: 'https://api.github.com/repos/mjpearson/passport-slack/languages',
             stargazers_url: 'https://api.github.com/repos/mjpearson/passport-slack/stargazers',
             contributors_url: 'https://api.github.com/repos/mjpearson/passport-slack/contributors',
             subscribers_url: 'https://api.github.com/repos/mjpearson/passport-slack/subscribers',
             subscription_url: 'https://api.github.com/repos/mjpearson/passport-slack/subscription',
             commits_url: 'https://api.github.com/repos/mjpearson/passport-slack/commits{/sha}',
             git_commits_url: 'https://api.github.com/repos/mjpearson/passport-slack/git/commits{/sha}',
             comments_url: 'https://api.github.com/repos/mjpearson/passport-slack/comments{/number}',
             issue_comment_url: 'https://api.github.com/repos/mjpearson/passport-slack/issues/comments{/number}',
             contents_url: 'https://api.github.com/repos/mjpearson/passport-slack/contents/{+path}',
             compare_url: 'https://api.github.com/repos/mjpearson/passport-slack/compare/{base}...{head}',
             merges_url: 'https://api.github.com/repos/mjpearson/passport-slack/merges',
             archive_url: 'https://api.github.com/repos/mjpearson/passport-slack/{archive_format}{/ref}',
             downloads_url: 'https://api.github.com/repos/mjpearson/passport-slack/downloads',
             issues_url: 'https://api.github.com/repos/mjpearson/passport-slack/issues{/number}',
             pulls_url: 'https://api.github.com/repos/mjpearson/passport-slack/pulls{/number}',
             milestones_url: 'https://api.github.com/repos/mjpearson/passport-slack/milestones{/number}',
             notifications_url: 'https://api.github.com/repos/mjpearson/passport-slack/notifications{?since,all,participating}',
             labels_url: 'https://api.github.com/repos/mjpearson/passport-slack/labels{/name}',
             releases_url: 'https://api.github.com/repos/mjpearson/passport-slack/releases{/id}',
             deployments_url: 'https://api.github.com/repos/mjpearson/passport-slack/deployments',
             created_at: '2014-05-27T23:35:07Z',
             updated_at: '2017-11-10T03:37:09Z',
             pushed_at: '2017-07-20T20:27:19Z',
             git_url: 'git://github.com/mjpearson/passport-slack.git',
             ssh_url: 'git@github.com:mjpearson/passport-slack.git',
             clone_url: 'https://github.com/mjpearson/passport-slack.git',
             svn_url: 'https://github.com/mjpearson/passport-slack',
             homepage: null,
             size: 28,
             stargazers_count: 81,
             watchers_count: 81,
             language: 'JavaScript',
             has_issues: true,
             has_projects: true,
             has_downloads: true,
             has_wiki: true,
             has_pages: false,
             forks_count: 41,
             mirror_url: null,
             archived: false,
             open_issues_count: 12,
             forks: 41,
             open_issues: 12,
             watchers: 81,
             default_branch: 'master',
             permissions: { admin: false, push: false, pull: true },
             license: 
              { key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                featured: true },
             network_count: 41,
             subscribers_count: 6 },
          meta: 
           { 'x-ratelimit-limit': '5000',
             'x-ratelimit-remaining': '4981',
             'x-ratelimit-reset': '1511820082',
             'x-oauth-scopes': 'public_repo',
             'x-github-request-id': 'E190:29D17:FE5923:147FC80:5A1C8A9F',
             'x-github-media-type': 'github.drax-preview; format=json',
             'last-modified': 'Fri, 10 Nov 2017 03:37:09 GMT',
             etag: '"a503cef086ec081350db4ac33e7a6f99"',
             status: '200 OK' }
        })
        
        function GitHubApi(options) {
          return {
            repos: { get: getStub }
          };
        }
        
        var proj;
        before(function(done) {
          var github = $require('../../../app/project/adapters/github', { '@octokit/rest': GitHubApi })();
          github.info({ url: 'git://github.com/mjpearson/passport-slack.git' }, function(err, p) {
            if (err) { return done(err); }
            proj = p;
            done();
          });
        });
        
        it('should yield project', function() {
          expect(proj).to.deep.equal({
            name: 'passport-slack',
            description: 'Slack OAuth2 strategy for Passport',
            homepage: 'https://github.com/mjpearson/passport-slack',
            favoriteCount: 81,
            subscriberCount: 6,
            forkCount: 41,
            createdAt: new Date('2014-05-27T23:35:07Z'),
            modifiedAt: new Date('2017-11-10T03:37:09Z')
          });
        });
        
      }); // normal project
      
    }); // .info
    
  }); // Adapter
  
});
