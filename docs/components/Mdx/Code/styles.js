import styled, { css, th } from '@xstyled/styled-components'
import { LiveEditor as ReactLiveEditor, LiveError as ReactLiveError } from 'react-live'
import { Box } from '@welcome-ui/box'

export const LiveEditor = styled(Box)`
  position: relative;
  background-color: dark.900;
  border-radius: md;
  margin-bottom: md;
  overflow: hidden;
  padding: xxs;
`

export const LiveEditorContent = styled(ReactLiveEditor)(
  ({ isCopyable }) => css`
    ${isCopyable &&
    css`
      width: calc(100% - 3.5rem) !important;
    `}
    overflow-x: auto;

    textarea,
    pre {
      background-color: dark.900 !important;

      &:focus {
        outline: none;
      }
    }
  `
)

export const LiveError = styled(ReactLiveError)`
  background-color: danger.100;
  border-color: danger.500;
  border-width: sm;
  border-style: solid;
  color: danger.500;
  padding: md;
  white-space: pre-wrap;
  border-radius: md;
  font-size: body3;
  line-height: h4;
  margin: xxs 0 lg;
`

export const ShowEditor = styled.div`
  background-color: nude.200;
  padding: xxs xl;
  margin-top: xxs;
  border-top: 1px solid ${th.color('light.800')};
`

export const CodeContent = styled.div`
  > * {
    &:not(:last-child) {
      margin-bottom: md;
    }
  }
`

export const CodeContentRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -md;
  margin-right: -md;
  flex-wrap: wrap;

  > * {
    margin-bottom: md;
    margin-right: md;
  }
`
