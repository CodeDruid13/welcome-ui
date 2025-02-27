import React from 'react'
import { DropdownMenu, useDropdownMenuState } from '@welcome-ui/dropdown-menu'
import { Box } from '@welcome-ui/box'
import { StarIcon, SunIcon } from '@welcome-ui/icons'
import { Button } from '@welcome-ui/button'

import { useSetThemeContext, useThemeContext } from '../../context/theme'

export function ThemeSelector(props) {
  const setTheme = useSetThemeContext()
  const menu = useDropdownMenuState({ gutter: 10 })
  const theme = useThemeContext()

  const handleSetTheme = theme => {
    setTheme(theme)
    menu.hide()
  }

  const options = [
    { value: 'core', label: 'Core Theme', icon: SunIcon },
    // TODO : rework dark theme before show on select
    // { value: 'dark', label: 'Dark Theme', icon: CrescentMoonIcon },
    { value: 'welcome', label: 'Welcome Theme', icon: StarIcon },
  ]

  return (
    <>
      <DropdownMenu.Trigger
        as={Button}
        h={30}
        shape="circle"
        variant={theme === 'dark' ? 'secondary' : 'quaternary'}
        w={30}
        {...menu}
        {...props}
      >
        <SunIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu {...menu} aria-label="Theme selector">
        {options?.map(({ icon: Icon, label, value }) => (
          <DropdownMenu.Item
            color={theme === value ? 'dark.900' : undefined}
            fontWeight={theme === value ? 'bold' : undefined}
            key={value}
            onClick={() => handleSetTheme(value)}
            {...menu}
          >
            <Icon mr="sm" size="sm" />
            <Box>{label}</Box>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu>
    </>
  )
}
