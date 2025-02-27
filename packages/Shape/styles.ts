import styled, { css } from '@xstyled/styled-components'
import { getMax } from '@welcome-ui/utils'
import { Box } from '@welcome-ui/box'

import { ShapeOptions } from './index'

const shapeStyles = (w: string, h: string, shape: ShapeOptions['shape']) => css`
  width: ${getMax(w, h)};
  height: ${getMax(w, h)};
  border-radius: ${shape === 'circle' && '50%'};
`

export const Shape = styled(Box)<ShapeOptions>(
  ({ h, shape, w }) => css`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    ${shape && shapeStyles(w as string, h as string, shape)}

    img {
      object-fit: cover;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  `
)
