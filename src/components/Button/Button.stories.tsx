import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

// Icon components for demos
const PlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </svg>
)

// Icon mapping for Storybook controls
const iconOptions = {
  None: undefined,
  Plus: PlusIcon,
  ArrowRight: ArrowRightIcon,
  Search: SearchIcon,
}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Appearance
    variant: {
      control: 'select',
      options: ['primary', 'soft', 'outline', 'text', 'ghost', 'destructive'],
      table: { category: 'Appearance' },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      table: { category: 'Appearance' },
    },
    // State
    isDisabled: {
      control: 'boolean',
      table: { category: 'State' },
    },
    // Icons
    iconLeading: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      table: { category: 'Icons' },
    },
    iconTrailing: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      table: { category: 'Icons' },
    },
    // Content
    children: {
      control: 'text',
      table: { category: 'Content' },
    },
    // Behavior
    href: {
      control: 'text',
      table: { category: 'Behavior' },
    },
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
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Button>

// =============================================================================
// OVERVIEW (default - all variants by property)
// =============================================================================

export const Overview: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Appearance */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">Appearance</span>
        <div className="flex items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      {/* Layout */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">Layout</span>
        <div className="flex items-center gap-4">
          <Button>Label Only</Button>
          <Button iconLeading={PlusIcon}>Icon Left</Button>
          <Button iconTrailing={ArrowRightIcon}>Icon Right</Button>
          <Button iconLeading={PlusIcon} aria-label="Icon only" />
        </div>
      </div>

      {/* State */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">State</span>
        <div className="flex items-center gap-4">
          <Button>Default</Button>
          <Button isDisabled>Disabled</Button>
        </div>
      </div>

      {/* Size */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">Size</span>
        <div className="flex items-center gap-4">
          <Button size="xs">XSmall</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Default</Button>
          <Button size="lg">Large</Button>
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
    children: 'Button',
    variant: 'primary',
    size: 'md',
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
        href="https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=19-360"
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
