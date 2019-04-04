# git-deployed

This script will take the specified `/__version__` JSON object and tries to inject the GitHub git commit info.

For example, consider the following <https://monitor.firefox.com/__version__> endpoint:

```json
{
  "commit": "ada648fecce64e3b14e7de2427a5814026b01b1e",
  "version": "v5.0.4",
  "source": "https://github.com/mozilla/blurts-server",
  "build": "https://circleci.com/gh/mozilla/blurts-server/4071"
}
```

This script will take the specified `commit` SHA and query the GitHub API at https://api.github.com/repos/mozilla/blurts-server/commits/ada648fecce64e3b14e7de2427a5814026b01b1e.


## Usage

```sh
$ npx pdehaan/git-deployed "https://monitor.firefox.com/__version__"

{
  "url": "https://monitor.firefox.com/__version__",
  "commit": {
    "sha": "ada648fecce64e3b14e7de2427a5814026b01b1e",
    "author": {
      "name": "luke crouch",
      "email": "luke.crouch@gmail.com",
      "date": "2019-04-03T14:55:17Z"
    },
    "committer": {
      "name": "GitHub",
      "email": "noreply@github.com",
      "date": "2019-04-03T14:55:17Z"
    },
    "message": "Merge pull request #833 from mozilla/fix-entrypoint-param\n\nFix top of funnel FxA pings.",
    "html_url": "https://github.com/mozilla/blurts-server/commit/ada648fecce64e3b14e7de2427a5814026b01b1e",
    "compare_url": "https://github.com/mozilla/blurts-server/compare/ada648fecce64e3b14e7de2427a5814026b01b1e...master"
  },
  "version": "v5.0.4",
  "source": "https://github.com/mozilla/blurts-server",
  "build": "https://circleci.com/gh/mozilla/blurts-server/4071"
}
```
