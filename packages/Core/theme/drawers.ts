import { WuiTheme } from './types'

type Size = 'sm' | 'md' | 'lg'

export type ThemeDrawers = {
  backdrop: {
    backgroundColor: string
    zIndex: number
  }
  default: {
    zIndex: number
  }
  closeButton: {
    top: string
    right: string
  }
  title: {
    margin: number
    padding: string
    paddingRight: string
  }
  content: {
    padding: string
  }
  footer: {
    padding: string
  }
  sizes: {
    horizontal: Record<Size, Record<'width', string>>
    vertical: Record<Size, Record<'height', string>>
  }
}

export const getDrawers = (theme: WuiTheme): ThemeDrawers => {
  const { colors, space, texts, toRem } = theme
  return {
    backdrop: {
      backgroundColor: colors.overlay,
      zIndex: 999
    },
    default: {
      zIndex: 999
    },
    closeButton: {
      top: `${space.xl}`,
      right: `${space.xl}`
    },
    title: {
      margin: 0,
      padding: `${space['3xl']}`,
      /** space of close button */
      paddingRight: toRem(50),
      ...texts.h3
    },
    content: {
      padding: `${space['3xl']}`
    },
    footer: {
      padding: `${space['3xl']}`
    },
    sizes: {
      horizontal: {
        sm: { width: toRem(400) },
        md: { width: toRem(550) },
        lg: { width: toRem(680) }
      },
      vertical: {
        sm: { height: toRem(400) },
        md: { height: toRem(550) },
        lg: { height: toRem(680) }
      }
    }
  }
}