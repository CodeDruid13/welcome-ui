import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function UserIcon(props) {
  return <Icon alt="User" content={content} {...props} />
}
