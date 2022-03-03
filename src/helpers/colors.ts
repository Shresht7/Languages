//  Data
import colors from '../data/colors.json'

/** Returns the color corresponding to the given language */
export const getLanguageColor = (language: string): string => colors[language] ?? 'black'