//  Library
import fetch from 'node-fetch'

/**
 * Fetches the list of languages (and corresponding bytes) used in the repo.
 * @param {string} user GitHub UserName
 * @param {string} repo GitHub Repository Name
 * @returns {Record<string, number>} Map of languages with their corresponding bytes
 */
export function getRepoLanguages(user, repo) {
    return fetch(`https://api.github.com/repos/${user}/${repo}/languages`)
        .then(res => res.json())
        .catch(err => console.error(err))
}
