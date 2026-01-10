import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof TextInput>

// Sample icons
const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
  </svg>
)

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
  </svg>
)

// =============================================================================
// OVERVIEW
// =============================================================================

export const Overview: Story = {
  render: () => (
    <div className="flex flex-col gap-32">
      {/* Text Input */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Text Input</span>
        <div className="flex flex-col gap-12 w-[300px]">
          <TextInput variant="text" placeholder="Enter text..." />
          <TextInput variant="text" placeholder="With icon..." icon={<UserIcon />} />
          <TextInput variant="text" state="error" placeholder="Error state..." />
          <TextInput variant="text" placeholder="Disabled..." disabled />
        </div>
      </div>

      {/* Search Input */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Search Input</span>
        <div className="flex flex-col gap-12 w-[300px]">
          <TextInput variant="search" placeholder="Search..." icon={<SearchIcon />} />
          <TextInput variant="search" placeholder="Search without icon..." />
        </div>
      </div>

      {/* URL Input */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">URL Input</span>
        <div className="flex flex-col gap-12 w-[300px]">
          <TextInput variant="url" placeholder="example.com" />
        </div>
      </div>

      {/* Currency Input */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Currency Input</span>
        <div className="flex flex-col gap-12 w-[300px]">
          <TextInput variant="currency" placeholder="0.00" />
        </div>
      </div>

      {/* Time Input */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Time Input</span>
        <div className="flex flex-col gap-12 w-[300px]">
          <TextInput variant="time" placeholder="00:00" icon={<ClockIcon />} />
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Sizes</span>
        <div className="flex flex-col gap-12 w-[300px]">
          <TextInput size="default" placeholder="Default size" icon={<SearchIcon />} />
          <TextInput size="compact" placeholder="Compact size" icon={<SearchIcon />} />
        </div>
      </div>
    </div>
  ),
}

// =============================================================================
// PROPS (with controls)
// =============================================================================

export const Props: Story = {
  tags: ['show-panel'],
  args: {
    variant: 'text',
    size: 'default',
    state: 'default',
    placeholder: 'Enter text...',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'search', 'url', 'action', 'time', 'currency'],
    },
    size: {
      control: 'select',
      options: ['default', 'compact'],
    },
    state: {
      control: 'select',
      options: ['default', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  render: (args) => (
    <div className="w-[300px]">
      <TextInput {...args} />
    </div>
  ),
}

// =============================================================================
// SOURCE CODE + DESIGNS
// =============================================================================

const FigmaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 38 57" fill="currentColor">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
  </svg>
)

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

export const SourceCodeAndDesign: Story = {
  name: 'Source Code + Designs',
  render: () => (
    <div className="flex min-w-[420px] flex-col items-center gap-24">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-2xl font-bold text-gray-900">Source Code + Figma Designs</h2>
        <p className="text-md whitespace-nowrap text-gray-500">This component was built using the CHG Unified Design System</p>
      </div>
      <div className="flex gap-12">
        <Button
          href="https://github.com/jordanchghealthcare/chg-unified-ds/tree/main/src/components/TextInput"
          target="_blank"
          rel="noopener noreferrer"
          iconLeading={GitHubIcon}
          className="bg-[#24292e] hover:bg-[#1b1f23]"
        >
          View on GitHub
        </Button>
        <Button
          href="https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=21-188"
          target="_blank"
          rel="noopener noreferrer"
          iconLeading={FigmaIcon}
          className="bg-[#A259FF] hover:bg-[#8B3DFF]"
        >
          View in Figma
        </Button>
      </div>
    </div>
  ),
}
