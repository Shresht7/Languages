//  Library
import { listRepositories } from './listRepositories'
import { getRepoLanguages } from './getRepoLanguages'

/**
 * Get language stats for the given users
 * @param users Variadic array of GitHub usernames to get language stats for
 * @returns An object mapping languages to their corresponding number of bytes
 */
export async function getLanguageStats(...users: string[]): Promise<Record<string, number>> {
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
