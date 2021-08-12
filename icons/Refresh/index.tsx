import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const RefreshIcon: React.FC<IconProps> = props => {
  return <Icon alt="Refresh" content={content} {...props} />
}
