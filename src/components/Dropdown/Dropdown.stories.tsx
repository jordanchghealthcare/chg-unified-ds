import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Appearance
    size: {
      control: 'select',
      options: ['default', 'condensed'],
      table: { category: 'Appearance' },
    },
    state: {
      control: 'select',
      options: ['default', 'error'],
      table: { category: 'Appearance' },
    },
    // State
    isDisabled: {
      control: 'boolean',
      table: { category: 'State' },
    },
    // Content
    placeholder: {
      control: 'text',
      table: { category: 'Content' },
    },
    children: {
      control: 'text',
      table: { category: 'Content' },
    },
    // Behavior
    onPress: {
      action: 'pressed',
      table: { category: 'Behavior' },
    },
    // Advanced
    className: {
      control: 'text',
      table: { category: 'Advanced' },
    },
  },
  args: {
    placeholder: 'Select an option',
    size: 'default',
    state: 'default',
    isDisabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Dropdown>

// =============================================================================
// OVERVIEW (default - all variants by property)
// =============================================================================

export const Overview: Story = {
  render: () => (
    <div className="flex w-[320px] flex-col gap-24">
      {/* Size */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">Size</span>
        <div className="flex flex-col gap-8">
          <Dropdown size="default" placeholder="Default size" />
          <Dropdown size="condensed" placeholder="Condensed size" />
        </div>
      </div>

      {/* State */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">State</span>
        <div className="flex flex-col gap-8">
          <Dropdown state="default" placeholder="Default state" />
          <Dropdown state="error" placeholder="Error state" />
          <Dropdown isDisabled placeholder="Disabled state" />
        </div>
      </div>

      {/* With selected value */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">With Value</span>
        <div className="flex flex-col gap-8">
          <Dropdown>Option selected</Dropdown>
        </div>
      </div>
    </div>
  ),
}

// =============================================================================
// INTERACTIVE (with controls)
// =============================================================================

export const Interactive: Story = {
  args: {
    placeholder: 'Select an option',
    size: 'default',
    state: 'default',
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
        story: '[View in Figma](https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=23-944)',
      },
    },
  },
  args: {
    placeholder: 'Select an option',
  },
}
