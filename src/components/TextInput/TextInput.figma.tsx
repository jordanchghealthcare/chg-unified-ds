import figma from '@figma/code-connect'
import { TextInput } from './TextInput'

/**
 * Figma Code Connect for TextInput component
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=21-188
 */
figma.connect(TextInput, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=21:188', {
  props: {
    variant: figma.enum('Variant', {
      Text: 'text',
      Search: 'search',
      URL: 'url',
      Action: 'action',
      Time: 'time',
      Currency: 'currency',
    }),
    size: figma.enum('Size', {
      Default: 'default',
      Compact: 'compact',
    }),
    state: figma.enum('State', {
      Default: 'default',
      Focused: 'default',
      Error: 'error',
      Disabled: 'default',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: ({ variant, size, state, disabled }) => (
    <TextInput
      variant={variant}
      size={size}
      state={state}
      disabled={disabled}
      placeholder="Enter text..."
    />
  ),
})
