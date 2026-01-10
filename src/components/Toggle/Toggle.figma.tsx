import figma from '@figma/code-connect'
import { Toggle } from './Toggle'

/**
 * Figma Code Connect for Toggle component
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=34-3334
 */
figma.connect(Toggle, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=34:3340', {
  props: {
    size: figma.enum('Size', {
      'Default': 'default',
      'Compact': 'compact',
    }),
    isSelected: figma.enum('Active', {
      'Inactive': false,
      'Active': true,
      'indeterminate': undefined,
    }),
    isIndeterminate: figma.enum('Active', {
      'Inactive': false,
      'Active': false,
      'indeterminate': true,
    }),
  },
  example: (props) => (
    <Toggle
      size={props.size}
      isSelected={props.isSelected}
      isIndeterminate={props.isIndeterminate}
    />
  ),
})
