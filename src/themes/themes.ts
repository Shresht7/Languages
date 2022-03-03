//  Palette
import palette from './palette'

//  Types
import type { theme, themeMode } from 'src/types'

const themes: Record<themeMode, theme> = {
    light: {
        backdrop: palette['--clr-backdrop-light'],
        background: palette['--clr-background'],
        text: palette['--clr-text'],
    },
    dark: {
        backdrop: palette['--clr-backdrop-dark'],
        background: palette['--clr-text'],
        text: palette['--clr-background'],
    }
}

//  -----------------
export default themes
//  -----------------