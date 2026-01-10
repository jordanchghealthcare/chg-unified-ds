import figma from '@figma/code-connect'
import { AccordionItem } from './Accordion'

/**
 * Figma Code Connect for Accordion component
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=1221-27651
 */
figma.connect(AccordionItem, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=1221:27651', {
  props: {
    title: figma.string('Label'),
    children: figma.children('*'),
  },
  example: (props) => (
    <AccordionItem id="item" title={props.title}>
      {props.children}
    </AccordionItem>
  ),
})
