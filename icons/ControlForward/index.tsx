import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ControlForwardIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlForward" content={content} {...props} />
}
