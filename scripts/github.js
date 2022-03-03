//  Library
import * as fs from 'node:fs'
import fetch from 'node-fetch'

/**
 * Fetches the list of all public repositories for a given user
 * @param {string} user GitHub UserName
 * @returns {string[]} List of all public repositories for the given user
 */
export function listRepositories(user) {
    return fetch(`https://api.github.com/users/${user}/repos`)
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
export function getRepoLanguages(user, repo) {
    return fetch(`https://api.github.com/repos/${user}/${repo}/languages`)
        .then(res => res.json())
        .catch(err => console.error(err))
}


/**
 * Get language stats for the given users
 * @param {...string[]} users Variadic array of GitHub usernames to get language stats for
 * @returns {Record<string, number>} An object mapping languages to their corresponding number of bytes
 */
export async function getLanguageStats(...users) {
    /** Keeps the record of languages and the corresponding total number of bytes */
    const aggregate = {}

    //  Aggregate all language data from publicly available repositories
    for (const user of users) {
        for (const repo of await listRepositories(user)) {
            const languages = await getRepoLanguages(user, repo)
            for (const [language, bytes] of Object.entries(languages)) {
                if (!aggregate[language]) { aggregate[language] = 0 }
                aggregate[language] += bytes
            }
        }
    }

    return aggregate
}


//  Get language stats
const user = 'Shresht7'
const aggregate = await getLanguageStats(user)

//  Write aggregated data to disk
fs.writeFileSync('./src/data/language.json', JSON.stringify(aggregate, null, 2))