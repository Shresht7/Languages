//  Library
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