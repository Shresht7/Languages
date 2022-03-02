const colors = {
    TypeScript: '#0000FF',
    Go: '#33CCFF',
}

/** Returns the color corresponding to the given language */
export const getLanguageColor = (language: string): string => colors[language] ?? 'black'