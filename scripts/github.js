// * This is a Deno script. Run using `deno run --allow-net --allow-write scripts/github.js`
//  TODO: Move this into a GitHub Action

import { getLanguageStats } from "../library"

const user = 'Shresht7'

const aggregate = await getLanguageStats(user)

//  Write aggregated data to disk
Deno.writeTextFile('./src/data/languages.json', JSON.stringify(aggregate, null, 2))