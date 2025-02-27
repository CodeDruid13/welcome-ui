import React from 'react'
import { IconWrapper } from '@welcome-ui/field'
import { ClearButton } from '@welcome-ui/clear-button'
import { createEvent, DefaultFieldStylesProps } from '@welcome-ui/utils'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface InputTextOptions extends DefaultFieldStylesProps {
  autoFocus?: boolean
  disabled?: boolean
  icon?: JSX.Element
  iconPlacement?: 'left' | 'right'
  isClearable?: boolean
  name?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value?: string
}

export type InputTextProps = CreateWuiProps<'input', InputTextOptions>

export const InputText = forwardRef<'input', InputTextProps>(
  (
    {
      autoFocus,
      dataTestId,
      disabled,
      icon,
      iconPlacement = 'left',
      isClearable,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      placeholder,
      size = 'lg',
      type = 'text',
      value,
      variant,
      ...rest
    },
    ref
  ) => {
    const handleReset = () => {
      const event = createEvent({
        name,
        value: '',
      }) as unknown as React.ChangeEvent<HTMLInputElement>
      onChange && onChange(event)
    }

    return (
      <S.Wrapper>
        <S.InputText
          autoFocus={autoFocus}
          data-testid={dataTestId}
          disabled={disabled}
          icon={!!icon}
          iconPlacement={iconPlacement}
          id={name}
          isClearable={isClearable}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={ref}
          size={size}
          type={type}
          value={value}
          variant={variant}
          {...rest}
        />
        {icon && (
          <IconWrapper iconPlacement={iconPlacement} size={size}>
            {icon}
          </IconWrapper>
        )}
        {isClearable && value && (
          <IconWrapper iconPlacement="right" size={size}>
            <ClearButton onClick={handleReset} />
          </IconWrapper>
        )}
      </S.Wrapper>
    )
  }
)

InputText.displayName = 'InputText'
