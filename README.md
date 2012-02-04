
# GitHub 3 [![Build Status](https://secure.travis-ci.org/edwardhotchkiss/github3.png)](http://travis-ci.org/edwardhotchkiss/github3)

> Node.JS GitHub API (v3) Wrapper

### Installation

```bash
$ npm install github3
```

### Example Code

```javascript

var github3 = require('github3');

// get user information
github3.getUser(user, function('edwardhotchkiss', user) {
  console.log(user);
});

// get users repos
github3.getUserRepos('edwardhotchkiss', function(error, repos) {
  console.log(repos);
});

// get users watched repos
github3.getUsersWatched('edwardhotchkiss', function(error, watched) {
  console.log(watched);
});

// get an organizations github users
github3.getOrgMembers('github', function(error, members) {
  console.log('members');
});

```

### License (MIT)

	Copyright (c) 2012, Edward Hotchkiss.

### Author: [Edward Hotchkiss][0]

[0]: http://edwardhotchkiss.com/
