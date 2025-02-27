import React, { Children, cloneElement, useCallback, useMemo } from 'react'
import { useTabState } from '@welcome-ui/tabs'
import {
  Popover,
  PopoverProps,
  usePopoverState,
  UsePopoverStateProps,
  UsePopoverStateReturn,
} from '@welcome-ui/popover'
import { Tab } from '@welcome-ui/tabs'
import { TabInitialState } from 'reakit/Tab'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'
import { List } from './List'
import { Panel } from './Panel'
import { BasicList } from './BasicList'
import { EmojiTab, EmojiTabProps } from './Tab'

export interface EmojiPickerOptions {
  defaultTabState?: TabInitialState
  emptyList?: string
  inputSearchPlaceholder?: string
  onChange?: (value: string) => void
  popoverAriaLabel?: string
  tabListAriaLabel?: string
  value: string
}

export type EmojiPickerProps = CreateWuiProps<'div', PopoverProps & EmojiPickerOptions>

const EmojiPickerComponent = forwardRef<'div', EmojiPickerProps>(
  (
    {
      children,
      defaultTabState = {},
      emptyList = 'No emojis found for your query 😔',
      inputSearchPlaceholder = 'Search an emoji',
      onChange,
      popoverAriaLabel = 'Emoji picker',
      tabListAriaLabel = 'Emoji picker tabs',
      value,
      ...popoverState
    },
    ref
  ) => {
    const tabState = useTabState(defaultTabState)

    const hidePopover = useMemo(() => popoverState.hide, [popoverState.hide])
    const handleChange = useCallback(
      (value: string) => {
        hidePopover()
        onChange?.(value)
      },
      [hidePopover, onChange]
    )

    const tabs = useMemo(() => {
      if (Children.count(children) === 0) {
        return [
          {
            name: 'basic',
            content: (
              // Disabling type check since missing props are injected below with the "cloneElement"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <BasicList isVisible={popoverState.visible} onChange={handleChange} value={value} />
            ),
          },
        ]
      }

      return Children.toArray(children)
        .filter((child: React.ReactElement) => child.type === EmojiTab)
        .map((tab: React.ReactElement<EmojiTabProps>) => {
          const name = tab.props.name
          const child =
            Children.only(tab.props.children) &&
            (Children.only(tab.props.children) as React.ReactElement)

          if (child && (child.type === List || child.type === BasicList)) {
            return {
              name,
              content: cloneElement(child, {
                emptyList,
                inputSearchPlaceholder,
                isVisible:
                  popoverState.visible &&
                  (!tabState.selectedId || tabState.selectedId === tab.props.name),
                onChange: handleChange,
                value,
                ...child.props,
              }),
            }
          }

          return {
            name,
            content: tab.props.children,
          }
        })
    }, [
      children,
      emptyList,
      handleChange,
      inputSearchPlaceholder,
      popoverState.visible,
      tabState.selectedId,
      value,
    ])
    const hasTabs = tabs.length > 1
    const onlyTabContent = tabs[0].content

    return (
      <S.Popover
        aria-label={popoverAriaLabel}
        arrowStyle={{ display: 'none' }}
        ref={ref}
        {...popoverState}
      >
        {hasTabs && (
          <>
            <S.TabList aria-label={tabListAriaLabel} {...tabState}>
              {tabs.map(tab => (
                <Tab id={tab.name} key={tab.name} {...tabState}>
                  {tab.name}
                </Tab>
              ))}
            </S.TabList>
            {tabs.map(tab => (
              <Tab.Panel key={tab.name} tabId={tab.name} {...tabState}>
                <Panel>{tab.content}</Panel>
              </Tab.Panel>
            ))}
          </>
        )}
        {!hasTabs && <Panel>{onlyTabContent}</Panel>}
      </S.Popover>
    )
  }
)

EmojiPickerComponent.displayName = 'EmojiPicker'

export const useEmojiPicker: (options?: UsePopoverStateProps) => UsePopoverStateReturn = options =>
  usePopoverState({
    placement: 'bottom-start',
    ...options,
  })

export const EmojiPicker = Object.assign(EmojiPickerComponent, {
  Trigger: Popover.Trigger,
  Tab: EmojiTab,
  List: List,
  BasicList: BasicList,
})
