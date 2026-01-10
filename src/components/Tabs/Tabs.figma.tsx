import figma from '@figma/code-connect'
import { Tabs } from './Tabs'

/**
 * Figma Code Connect for Tabs component
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=777-8875
 */
figma.connect(Tabs, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=777:8875', {
  props: {
    appearance: figma.enum('Appearance', {
      'Underline': 'underline',
      'Block': 'block',
      'Block Inverted': 'block-inverted',
    }),
    fill: figma.enum('Fill', {
      'true': true,
      'false': false,
    }),
  },
  example: (props) => (
    <Tabs
      {...props}
      items={[
        { id: 'tab1', label: 'Tab 1', content: <p>Content 1</p> },
        { id: 'tab2', label: 'Tab 2', content: <p>Content 2</p> },
        { id: 'tab3', label: 'Tab 3', content: <p>Content 3</p> },
      ]}
    />
  ),
})
