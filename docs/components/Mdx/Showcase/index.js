/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Button } from '@welcome-ui/button'
import { GithubIcon, NpmIcon } from '@welcome-ui/icons'

import { H1 } from '../Headings'

import { Item } from './Item'

export function Showcase({
  component,
  customInstall,
  customUsage,
  description,
  name,
  pageName,
  version,
}) {
  return (
    <Box backgroundColor="nude.100" maxW="100% !important">
      <Box m="0 auto" maxW={970} px={{ md: 'md' }} py={{ xs: '3xl', md: 70 }}>
        <H1 mb="0" pb="xxs" pt="0">
          {pageName || component}
        </H1>
        {description && (
          <Text color="dark.200" variant="body1">
            {description}
          </Text>
        )}
        <Box mt={60}>
          <Item content={version} name="version" />
          <Item content={`yarn add ${name}`} name="install" />
          <Item content={`import { ${component} } from '${name}'`} name="usage" />
          {customInstall && <Item content={customInstall} name="or install" />}
          {customUsage && (
            <Item content={customUsage} name={customInstall ? 'usage' : 'or usage'} />
          )}
        </Box>
        <Box mt="3xl">
          <Button
            alt="npm package"
            as="a"
            href={`https://www.npmjs.com/package/${name}`}
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="quaternary"
          >
            <NpmIcon size="lg" />
            <span>View package</span>
          </Button>
          <Button
            as="a"
            href={`https://github.com/WTTJ/welcome-ui/tree/master/packages/${component}`}
            ml="md"
            size="sm"
            target="_blank"
            variant="quaternary"
          >
            <GithubIcon size="lg" />
            <span>View source</span>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
