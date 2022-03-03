//  Library
import * as fs from 'node:fs'
import { getLanguageStats } from "../library/getLanguageStats.js"

//  Get language stats
const user = 'Shresht7'
const aggregate = await getLanguageStats(user)

//  Write aggregated data to disk
fs.writeFileSync('./src/data/language.json', JSON.stringify(aggregate, null, 2))