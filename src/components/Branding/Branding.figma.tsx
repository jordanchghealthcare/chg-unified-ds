import figma from '@figma/code-connect'
import { Branding } from './Branding'

/**
 * Figma Code Connect for Branding component
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=525-6567
 */
figma.connect(Branding, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=525:6567', {
  props: {
    brand: figma.enum('Brand', {
      'Wireframe': 'wireframe',
      'Connect': 'connect',
      'Locumsmart': 'locumsmart',
      'Modio': 'modio',
      'MyWeatherby': 'myweatherby',
      'MyCompHealth': 'mycomphealth',
      'Design System': 'design-system',
    }),
  },
  example: (props) => <Branding {...props} />,
})
