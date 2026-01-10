import figma from '@figma/code-connect'
import { Avatar } from './Avatar'

figma.connect(
  Avatar,
  'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=326:10076',
  {
    props: {
      status: figma.enum('Status', {
        true: 'online',
        false: undefined,
      }),
    },
    example: (props) => <Avatar name="User Name" status={props.status} />,
  }
)
