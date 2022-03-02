const colors = {
    TypeScript: '#2b7489',
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Go: '#00ADD8',
    Rust: '#dea584',
    Svelte: '#ff3e00'
}

/** Returns the color corresponding to the given language */
export const getLanguageColor = (language: string): string => colors[language] ?? 'black'