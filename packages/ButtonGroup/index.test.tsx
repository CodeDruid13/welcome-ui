import React from 'react'

import { render } from '../../utils/tests'
import { Button } from '../Button'

import { ButtonGroup } from './index'

describe('<ButtonGroup>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <ButtonGroup dataTestId="group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Tree</Button>
      </ButtonGroup>
    )
    const group = getByTestId('group')

    expect(group).toHaveTextContent('OneTwoTree')
  })
})
