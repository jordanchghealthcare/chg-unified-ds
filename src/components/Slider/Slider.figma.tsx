import figma from '@figma/code-connect'
import { Slider } from './Slider'

figma.connect(
  Slider,
  'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=5282:2501',
  {
    props: {
      showLabels: figma.enum('Label', {
        'False': false,
        'Bottom': true,
      }),
    },
    example: (props) => (
      <Slider
        showLabels={props.showLabels}
        defaultValue={[25, 75]}
        minValue={0}
        maxValue={100}
      />
    ),
  }
)
