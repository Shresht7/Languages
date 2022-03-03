// * This is a Deno script. Run using `deno run --allow-net --allow-write scripts/github.js`
//  TODO: Move this into a GitHub Action

import { parse, stringify } from 'https://deno.land/std@0.127.0/encoding/yaml.ts'

const data = await fetch('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml')
    .then(res => res.text())


const languages = parse(data)

const colors = {}
for (const [language, { color }] of Object.entries(languages)) {
    colors[language] = color
}

Deno.writeTextFile("./src/data/colors.json", JSON.stringify(colors, null, 2))