/**
 * Fetches the list of languages (and corresponding bytes) used in the repo.
 * @param user GitHub UserName
 * @param repo GitHub Repository Name
 * @returns Map of languages with their corresponding bytes
 */
export function getRepoLanguages(user: string, repo: string): Promise<Record<string, number>> {
    return fetch(`https://api.github.com/repos/${user}/${repo}/languages`)
        .then(res => res.json())
        .catch(err => console.error(err))
}
