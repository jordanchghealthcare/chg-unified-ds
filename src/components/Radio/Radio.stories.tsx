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
        href="https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=5282-1239"
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
