// * This is a Deno script. Run using `deno run --allow-net --allow-write scripts/github.js`
//  TODO: Move this into a GitHub Action

//  ---------------------------------------
const GITHUB_API = 'https://api.github.com'
//  ---------------------------------------

const user = 'Shresht7'

/**
 * Fetches the list of all public repositories for a given user
 * @param {string} username GitHub UserName
 * @returns List of all public repositories for the given user
 */
function listRepositories(username) {
    return fetch(`${GITHUB_API}/users/${username}/repos`)
        .then(res => res.json())
        .then(data => data.map(repo => repo.name))
        .catch(err => console.error(err))
}

/**
 * Fetches the list of languages (and corresponding bytes) used in the repo.
 * @param {string} user GitHub UserName
 * @param {string} repo GitHub Repository Name
 * @returns {Record<string, number>} Map of languages with their corresponding bytes
 */
function getRepoLanguages(user, repo) {
    return fetch(`${GITHUB_API}/repos/${user}/${repo}/languages`)
        .then(res => res.json())
}

/** Keeps the record of languages and the corresponding total number of bytes */
const aggregate = {}

//  Aggregate all language data from publicly available repositories
for (const repo of await listRepositories(user)) {
    const languages = await getRepoLanguages(user, repo)
    for (const [language, bytes] of Object.entries(languages)) {
        if (!aggregate[language]) { aggregate[language] = 0 }
        aggregate[language] += bytes
    }
}

//  Write aggregated data to disk
Deno.writeTextFile('./src/data/languages.json', JSON.stringify(aggregate, null, 2))