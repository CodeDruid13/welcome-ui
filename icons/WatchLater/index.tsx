import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const WatchLaterIcon: React.FC<IconProps> = props => {
  return <Icon alt="WatchLater" content={content} {...props} />
}
