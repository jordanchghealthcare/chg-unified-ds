import figma from '@figma/code-connect'
import { PillToggle } from './PillToggle'

/**
 * Figma Code Connect for PillToggle component
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=717-4264
 */
figma.connect(PillToggle, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=717:4264', {
  props: {
    isSelected: figma.enum('Selected', {
      'true': true,
      'false': false,
    }),
  },
  example: (props) => <PillToggle {...props}>Label</PillToggle>,
})
