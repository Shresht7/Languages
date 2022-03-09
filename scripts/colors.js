//  Library
import * as fs from 'node:fs'
import { parse } from 'js-yaml'
import fetch from 'node-fetch'

//  Get github/linguist's language.yml file
const url = 'https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml'
const data = await fetch(url).then(res => res.text())

//  Parse yaml file
const languages = parse(data)

//  Generate language-color map
const colors = {}
for (const [language, { color }] of Object.entries(languages)) {
    colors[language] = color
}

//  Write file to disk
const dest = './src/data/colors.json'
fs.writeFileSync(dest, JSON.stringify(colors, null, 2))