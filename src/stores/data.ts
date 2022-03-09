//  Library
import { writable } from 'svelte/store'
import cachedData from "../data/languages.json";

const data = writable<Record<string, number>>(cachedData)

//  ---------------
export default data
//  ---------------