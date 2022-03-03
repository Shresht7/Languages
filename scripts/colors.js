//  Library
import * as fs from 'node:fs'
import { parse } from 'js-yaml'
import fetch from 'node-fetch'

//  Get github/linguist's language.yml file
const data = await fetch('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml')
    .then(res => res.text())

//  Parse yaml file
const languages = parse(data)

//  Generate language-color map
const colors = {}
for (const [language, { color }] of Object.entries(languages)) {
    colors[language] = color
}

//  Write file to disk
fs.writeFileSync('./src/data/colors.json', JSON.stringify(colors, null, 2))