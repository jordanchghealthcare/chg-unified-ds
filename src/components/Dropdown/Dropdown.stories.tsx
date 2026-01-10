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

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)

export const Figma: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-16">
      <h2 className="text-2xl font-bold text-gray-900">Figma Source</h2>
      <p className="text-md text-gray-500">This component was built from the CHG Design System in Figma.</p>
      <a
        href="https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=23-944"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-8 rounded-8 bg-[#9474d4] px-24 py-12 text-md font-medium text-base-white hover:bg-[#8264c4]"
      >
        <ExternalLinkIcon className="size-[20px]" />
        View in Figma
      </a>
    </div>
  ),
}
