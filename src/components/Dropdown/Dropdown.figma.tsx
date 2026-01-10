import figma from '@figma/code-connect'
import { Dropdown } from './Dropdown'

/**
 * Figma Code Connect for Dropdown component
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=23-944
 */
figma.connect(Dropdown, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=23:944', {
  props: {
    size: figma.enum('Size', {
      'Default': 'default',
      'Condesnsed': 'condensed', // Note: typo in Figma
    }),
    state: figma.enum('State', {
      'Default': 'default',
      'Focus': 'default',
      'Error': 'error',
      'Disabled': 'default',
    }),
    isDisabled: figma.enum('State', {
      'Disabled': true,
    }),
  },
  example: (props) => <Dropdown {...props} />,
})
