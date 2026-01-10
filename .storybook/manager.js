import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const theme = create({
  base: 'light',
  brandTitle: 'CHG Unified Design',
  brandUrl: 'https://github.com/jordanchghealthcare/chg-unified-ds',
  brandImage: '/CHG-logo.svg',
  brandTarget: '_blank',
})

addons.setConfig({
  theme,
})
