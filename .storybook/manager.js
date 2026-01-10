import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const theme = create({
  base: 'light',
  brandTitle: 'CHG Unified Design',
  brandUrl: 'https://chghealthcare.com',
  brandImage: '/CHG-logo.png',
  brandTarget: '_blank',
})

addons.setConfig({
  theme,
})
