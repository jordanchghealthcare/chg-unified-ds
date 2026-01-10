import figma from '@figma/code-connect'
import { StepIndicator } from './StepIndicator'

/**
 * Figma Code Connect for StepIndicator component
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=4415-16250
 */
figma.connect(StepIndicator, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=4415:16250', {
  props: {
    orientation: figma.enum('Orientation', {
      'Horizontal': 'horizontal',
      'Vertical': 'vertical',
    }),
    size: figma.enum('Size', {
      'Default': 'default',
      'Compact': 'compact',
    }),
    showLabels: figma.enum('Display Label', {
      'true': true,
      'false': false,
    }),
  },
  example: (props) => (
    <StepIndicator {...props}>
      <StepIndicator.Item status="complete" label="Step 1" />
      <StepIndicator.Item status="active" label="Step 2" />
      <StepIndicator.Item status="incomplete" label="Step 3" />
    </StepIndicator>
  ),
})
