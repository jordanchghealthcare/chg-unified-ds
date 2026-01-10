import figma from '@figma/code-connect'
import { Toast } from './Toast'

figma.connect(Toast, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=4397:6690', {
  props: {
    appearance: figma.enum('Appearance', {
      'Icon': 'icon',
      'Dot Indicator': 'dot',
      'Avatar': 'avatar',
    }),
    actions: figma.enum('Actions', {
      'None': 'none',
      'Close': 'close',
      'Subtle': 'subtle',
      'Buttons': 'buttons',
    }),
    size: figma.enum('Size', {
      'Default': 'default',
      'Condensed': 'condensed',
    }),
  },
  example: (props) => (
    <Toast
      title="Successfully saved!"
      description="Anyone with a link can now view this file."
      {...props}
    />
  ),
})
