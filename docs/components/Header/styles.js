import styled, { css } from '@xstyled/styled-components'
import { Drawer as WUIDrawer } from '@welcome-ui/drawer'

import { Item } from './NavBar/styles'

export const headerHeight = '3.75rem' // 60

export const Header = styled.header(
  ({ variant = 'black' }) => css`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${headerHeight};
    background-color: dark.800;
    font-size: body2;
    padding: 0 sm;
    top: 0;
    width: 100%;
    z-index: 2;

    @media (min-width: md) {
      padding: 0 xl;
    }

    ${variant === 'gray' &&
    css`
      background-color: nude.200;

      ${Item} {
        color: dark.900;

        &.active,
        &:hover {
          @media (min-width: md) {
            color: dark.100;
          }
        }
      }
    `}
  `
)

export const MenuMobileDrawer = styled(WUIDrawer)`
  top: ${`calc(${headerHeight} - 1px)`} !important;
  width: 100% !important;
  padding: xl;

  @media (min-width: md) {
    display: none;
  }
`
