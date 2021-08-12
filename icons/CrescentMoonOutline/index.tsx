import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CrescentMoonOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="CrescentMoonOutline" content={content} {...props} />
}
