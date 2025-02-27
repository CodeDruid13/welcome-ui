# @welcome-ui/icons

The [Icons](https://welcome-ui.com/components/icons) component from [@welcome-ui](https://welcome-ui.com).

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@welcome-ui/icons) [![License](https://img.shields.io/npm/l/welcome-ui.svg)](https://github.com/WTTJ/welcome-ui/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-mediumspringgreen.svg)](ttps://github.com/WTTJ/welcome-ui/blob/master/CONTRIBUTING.mdx)

## Installation

    yarn add @welcome-ui/icons

## Import

    import { ActionIcon } from '@welcome-ui/icons.actions'
    import * as Icons from '@welcome-ui/icons'

## Documentation

See the [documentation](https://welcome-ui.com/components/icons) or [package source](https://github.com/WTTJ/welcome-ui/tree/master/icons) for more details.

## How to add icons in welcome-ui (from abstract)

1. Download the svg from abstract into the `icons/_assets/` folder, using snake_case for the name

2. If your icon is monochrome, check the presence of `fill="black"` in the svg. If it is not present, change the `fill` attribute.

3. Run `yarn icons`

4. Add your new icon(s) in the doc for `Icons` and `IconsFont` respectively in `docs/pages/components/icons.mdx` and `docs/pages/components/icons-font.mdx`

5. Start/Restart your front server

6. Go fetch a 🍺, you're done!
