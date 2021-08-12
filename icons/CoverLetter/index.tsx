import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CoverLetterIcon: React.FC<IconProps> = props => {
  return <Icon alt="CoverLetter" content={content} {...props} />
}
