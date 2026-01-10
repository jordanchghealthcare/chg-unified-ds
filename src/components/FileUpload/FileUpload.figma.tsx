import figma from '@figma/code-connect'
import { FileUpload } from './FileUpload'

/**
 * Figma Code Connect for FileUpload component
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=3765-8060
 */
figma.connect(FileUpload, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=3765:8060', {
  props: {},
  example: () => (
    <FileUpload
      instructions="Drop files here or click to upload"
      fileTypesHint="PNG, JPG up to 10MB"
    />
  ),
})
