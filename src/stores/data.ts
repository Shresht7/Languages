//  Library
import { writable } from 'svelte/store'
import cachedData from "../data/languages.json";
import { getLanguageStats } from 'src/library';

function createDataStore() {

    const { subscribe, set, update } = writable<Record<string, number>>(cachedData)

    let loading = false

    async function fetchData(username: string) {
        if (!username) return;
        loading = true;
        set(await getLanguageStats(username));
        loading = false;
    }

    return {
        subscribe,
        loading,
        fetchData
    }

}

//  ----------------------------
export default createDataStore()
//  ----------------------------