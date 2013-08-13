
1.2.0 / 2013-08-12 
==================

 * [node, travis, test] added v0.10.x for to travis
 * [contrib] added @mloar to README as a contributor
 * [minor] format
 * Merge pull request #17 from mloar/create-blob
 * Make createBlob() take a Buffer.
 * Add methods for creating trees with base64 blobs.
 * [changelog] updated

1.1.0 / 2013-07-02 
==================

 * [dist] version bump
 * [contrib] added @mloar
 * Merge pull request #16 from mloar/master
 * Include User-Agent as required by GitHub. http://developer.github.com/v3/#user-agent-required

1.0.0 / 2013-01-27 
==================

  * [dist] version bump
  * [tests] updated, all passing
  * [minor] style in package.json
  * [license] updated year
  * [minor] comment stylization
  * [package] bump `vows` to `0.7.0`
  * [package] bump `request` to `2.12.0
  * [package] added @st-luke to contributors
  * [travis, test] >= 0.8.0
  * Merge pull request #15 from st-luke/master
  * Add methods to start & unstar repos (w/ tests)

0.4.5 / 2012-07-17 
==================

  * [tests] minor formating
  * [docs] minor fix
  * [contributors] added @wemotom
  * [minor] removed npmignore, pointless these things?
  * [docs] removed paige
  * Merge pull request #13 from wemotom/master
  * README: fixed buggy example code in README.md

0.4.4 / 2012-06-26 
==================

  * [docs] minor
  * [node] only require 0.6.0+
  * [travis] test 0.8.0
  * [package] updated email

0.4.3 / 2012-06-09 
==================

  * [contributors] added @tjmehta
  * [tests] update tests for pull request #10
  * Merge pull request #12 from tjmehta/master
  
0.4.2 / 2012-03-22 
==================

  * [dist] version bump
  * [license] added, linked in package
  * [package] homepage, bugs
  * [deps] bump request to 2.9.153
  * [changelog] updated
  * [docs](sweet)
  * [paige] paige.config for doc building
  
0.4.1 / 2012-03-11 
==================

  * [paige] paige.config for doc building
  * [formating] comments and style
  * [engine] prep for 0.8.0, require 0.6.12+
  * [tests] cleanup
  * [stylize] tests
  * [changelog] updated for 0.4.0
 

0.4.0 / 2012-03-03 
==================

  * [dist] version bump
  * Merge pull request #8 from woloski/6f5bafa0ec14a106d7b173b1fcb8a62b5ada915b
  * "fix commit and push to branch test"
  * [style] cleanup
  * [contributors] added Matias Woloski as a contributor
  * [merge] fixed conflicts
  * "jslint pass"
  * [README] stylize
  * "merge with upstream, changed package.json to use 0.6.X as min engine otherwise won't run in c9"
  * [README] stylize
  * [README] added Roadmap, contributors
  * [deps] bump Vows to v0.6.2
  * "implemented getLastCommitRef, getCommit, getTree, getBlobText, getBlobTextByFilePaht, createCommit, updateRefHead"
  * [cleanup] code stylization, more appropriate comments
  * [style] stylize & accurately comment /lib
  * [merge] manual
  * [npmignore]
  * [deps] removed "should"
  * [dist] keywords
  * [node] 0.6.12+ required, travis adjusted
  * [npmignore] added
  * [changelog] update

0.3.1 / 2012-03-03 
==================

  * [dist] bump version
  * [tests] getIssueLabels
  * [features] getIssueLabels
  * [tests] getLabels +pass
  * [features] add support for retrieving labels
  * [node] engine range

0.3.0 / 2012-02-12 
==================

  * [test] fix _get method
  * Merge pull request #5 from intabulas/master
  * Added support for using existing oAuth token as an authentication method in addition to basic auth
  * Merge pull request #4 from intabulas/master
  * extract the rate limit details from github api responses and make them available
  * [tests] add travis status indicator to README
  * [tests] add `travis` config file for CI
  * [docs, minor] cleanup


0.2.0 / 2012-01-29 
==================

  * [tests] dont log callbacks
  * [dist] bump to 0.2.0
  * whitespace
  * added @intabulas as a contributor
  * Merge pull request #3 from intabulas/master
  * Added method/test to get repository details
  * added method/test to retrieve list of people watching a repository
  * added method/test to retrieve  repository forks
  * added method/test to retrieve commits for a repositories
  * added method to retrieve a repositories collaborators
  * added method to retrieve a repositories branches
  * added method to retrieve a repositories languages
  * added method to retrieve a repositories contributors
