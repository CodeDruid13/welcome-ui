import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LeafIcon: React.FC<IconProps> = props => {
  return <Icon alt="Leaf" content={content} {...props} />
}
