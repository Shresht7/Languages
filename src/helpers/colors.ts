const colors = {
    TypeScript: '#0000FF',
    Go: '#33CCFF',
}

export const getLanguageColor = (language) => colors[language] ?? 'black'