

# GitHub3 - NodeJS GitHub API (v3) Wrapper

### Installation

```bash
$ npm install github3
```

### Example Code (Checkout /tests, same jazz)

```javascript

var github3 = require('github3');

github3.getUser(user, function('edwardhotchkiss', user) {
  console.log(user);
});

github3.getUserRepos('edwardhotchkiss', function(error, repos) {
  console.log(repos);
});

github3.getUsersWatched('edwardhotchkiss', function(error, watched) {
  console.log(watched);
});

github3.getOrgMembers('ingklabs', function(error, members) {
  console.log('members');
});

/* EOF */
```
