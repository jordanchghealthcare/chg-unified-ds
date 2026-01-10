import type { Meta, StoryObj } from '@storybook/react'
import { Radio, RadioGroup } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Appearance
    showLabel: {
      control: 'boolean',
      table: { category: 'Appearance' },
    },
    // State
    isDisabled: {
      control: 'boolean',
      table: { category: 'State' },
    },
    // Content
    children: {
      control: 'text',
      table: { category: 'Content' },
    },
    // Advanced
    className: {
      control: 'text',
      table: { category: 'Advanced' },
    },
  },
  args: {
    children: 'Label',
    showLabel: true,
    isDisabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Radio>

// =============================================================================
// OVERVIEW (default - all variants by property)
// =============================================================================

export const Overview: Story = {
  render: () => (
    <div className="flex flex-col gap-24">
      {/* Display Label */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Display Label</span>
        <div className="flex flex-col gap-8">
          <RadioGroup defaultValue="with-label">
            <Radio value="with-label">With Label</Radio>
          </RadioGroup>
          <RadioGroup defaultValue="no-label">
            <Radio value="no-label" showLabel={false}>Hidden Label</Radio>
          </RadioGroup>
        </div>
      </div>

      {/* Active State */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Active State</span>
        <div className="flex flex-col gap-8">
          <RadioGroup>
            <Radio value="inactive">Inactive</Radio>
          </RadioGroup>
          <RadioGroup defaultValue="active">
            <Radio value="active">Active (Selected)</Radio>
          </RadioGroup>
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Disabled State</span>
        <div className="flex flex-col gap-8">
          <RadioGroup isDisabled>
            <Radio value="disabled">Disabled</Radio>
          </RadioGroup>
          <RadioGroup isDisabled defaultValue="disabled-selected">
            <Radio value="disabled-selected">Disabled Selected</Radio>
          </RadioGroup>
        </div>
      </div>

      {/* Radio Group */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Radio Group</span>
        <RadioGroup defaultValue="option-1">
          <Radio value="option-1">Option 1</Radio>
          <Radio value="option-2">Option 2</Radio>
          <Radio value="option-3">Option 3</Radio>
        </RadioGroup>
      </div>
    </div>
  ),
}

// =============================================================================
// INTERACTIVE (with controls)
// =============================================================================

export const Interactive: Story = {
  render: (args) => (
    <RadioGroup defaultValue="interactive">
      <Radio value="interactive" {...args} />
    </RadioGroup>
  ),
  args: {
    children: 'Label',
    showLabel: true,
    isDisabled: false,
  },
}

// =============================================================================
// FIGMA
// =============================================================================

export const Figma: Story = {
  parameters: {
    docs: {
      description: {
        story: '[View in Figma](https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=5282-1239)',
      },
    },
  },
  render: () => (
    <RadioGroup defaultValue="option-1">
      <Radio value="option-1">Option 1</Radio>
      <Radio value="option-2">Option 2</Radio>
    </RadioGroup>
  ),
}
