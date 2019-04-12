const axios = require("axios");

module.exports = {
  deployed,
  getCommitInfo,
  getVersionJson
};

async function deployed(url) {
  const versionJson = await getVersionJson(url);
  const compareUrl = `${versionJson.source.replace(/\/$/, "")}/compare/${versionJson.commit}...master`;
  const [owner, repo] = versionJson.source.replace("https://github.com/", "").split("/", 2);
  const commit = await getCommitInfo(owner, repo, versionJson.commit);
  commit.compare_url = compareUrl;
  const data = Object.assign({url}, versionJson, {commit});
  return data;
}

async function _fetch(url) {
  const res = await axios.get(url);
  return res.data;
}

async function getVersionJson(url) {
  if (!url.endsWith("/__version__")) {
    url = new URL("/__version__", url).href;
  }
  return _fetch(url);
}

async function getCommitInfo(owner, repo, sha) {
  const commit = await _fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${sha}`);
  return {
    sha: commit.sha,
    author: commit.commit.author,
    committer: commit.commit.committer,
    message: commit.commit.message,
    html_url: commit.html_url
  };
}
