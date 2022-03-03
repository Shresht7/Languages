/**
 * Fetches the list of all public repositories for a given user
 * @param user GitHub UserName
 * @returns List of all public repositories for the given user
 */
export function listRepositories(user: string): Promise<string[]> {
    return fetch(`https://api.github.com/users/${user}/repos`)
        .then(res => res.json())
        .then(data => data.map(repo => repo.name))
        .catch(err => console.error(err))
}