import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const OrigineIcon: React.FC<IconProps> = props => {
  return <Icon alt="Origine" content={content} {...props} />
}
