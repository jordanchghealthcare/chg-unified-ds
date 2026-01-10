import figma from '@figma/code-connect'
import { Radio } from './Radio'

/**
 * Figma Code Connect for Radio component
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=5282-1239
 */
figma.connect(Radio, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=5282:1239', {
  props: {
    showLabel: figma.enum('Display Label', {
      'true': true,
      'false': false,
    }),
  },
  example: (props) => <Radio value="option" {...props}>Label</Radio>,
})
