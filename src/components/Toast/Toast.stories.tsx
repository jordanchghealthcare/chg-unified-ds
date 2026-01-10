import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Toast } from './Toast'

// Custom icon for demos
const InfoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM18 10.5C18.8284 10.5 19.5 11.1716 19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12C16.5 11.1716 17.1716 10.5 18 10.5ZM18 15.75C18.4142 15.75 18.75 16.0858 18.75 16.5V25.5C18.75 25.9142 18.4142 26.25 18 26.25C17.5858 26.25 17.25 25.9142 17.25 25.5V16.5C17.25 16.0858 17.5858 15.75 18 15.75Z" />
  </svg>
)

const WarningIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M18 3C18.3466 3 18.6684 3.18273 18.8507 3.48165L32.8507 27.4817C33.0329 27.7806 33.0494 28.1519 32.894 28.4659C32.7385 28.7798 32.4345 29 32.0893 29H3.91071C3.56551 29 3.26148 28.7798 3.10604 28.4659C2.95059 28.1519 2.96714 27.7806 3.14929 27.4817L17.1493 3.48165C17.3316 3.18273 17.6534 3 18 3ZM18 11.25C18.4142 11.25 18.75 11.5858 18.75 12V20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25V12C17.25 11.5858 17.5858 11.25 18 11.25ZM18 22.5C17.1716 22.5 16.5 23.1716 16.5 24C16.5 24.8284 17.1716 25.5 18 25.5C18.8284 25.5 19.5 24.8284 19.5 24C19.5 23.1716 18.8284 22.5 18 22.5Z" />
  </svg>
)

const ErrorIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM13.2803 12.2197C12.9874 11.9268 12.5126 11.9268 12.2197 12.2197C11.9268 12.5126 11.9268 12.9874 12.2197 13.2803L16.9393 18L12.2197 22.7197C11.9268 23.0126 11.9268 23.4874 12.2197 23.7803C12.5126 24.0732 12.9874 24.0732 13.2803 23.7803L18 19.0607L22.7197 23.7803C23.0126 24.0732 23.4874 24.0732 23.7803 23.7803C24.0732 23.4874 24.0732 23.0126 23.7803 22.7197L19.0607 18L23.7803 13.2803C24.0732 12.9874 24.0732 12.5126 23.7803 12.2197C23.4874 11.9268 23.0126 11.9268 22.7197 12.2197L18 16.9393L13.2803 12.2197Z" />
  </svg>
)

const iconOptions = {
  Default: undefined,
  Info: InfoIcon,
  Warning: WarningIcon,
  Error: ErrorIcon,
}

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Appearance
    appearance: {
      control: 'select',
      options: ['icon', 'dot', 'avatar'],
      table: { category: 'Appearance' },
    },
    size: {
      control: 'select',
      options: ['default', 'condensed'],
      table: { category: 'Appearance' },
    },
    actions: {
      control: 'select',
      options: ['none', 'close', 'subtle', 'buttons'],
      table: { category: 'Appearance' },
    },
    // Content
    title: {
      control: 'text',
      table: { category: 'Content' },
    },
    description: {
      control: 'text',
      table: { category: 'Content' },
    },
    primaryActionLabel: {
      control: 'text',
      table: { category: 'Content' },
    },
    secondaryActionLabel: {
      control: 'text',
      table: { category: 'Content' },
    },
    // Icon options
    icon: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      table: { category: 'Icons' },
    },
    dotAppearance: {
      control: 'select',
      options: ['neutral', 'red', 'orange', 'yellow', 'celery', 'green', 'sky', 'cyan', 'blue', 'indigo', 'purple', 'fuchsia', 'magenta', 'inverse'],
      table: { category: 'Icons' },
    },
    // Behavior
    onPrimaryAction: {
      action: 'primaryAction',
      table: { category: 'Behavior' },
    },
    onSecondaryAction: {
      action: 'secondaryAction',
      table: { category: 'Behavior' },
    },
    onClose: {
      action: 'close',
      table: { category: 'Behavior' },
    },
    // Advanced
    className: {
      control: 'text',
      table: { category: 'Advanced' },
    },
  },
  args: {
    title: 'Successfully saved!',
    description: 'Anyone with a link can now view this file.',
    appearance: 'icon',
    actions: 'none',
    size: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Toast>

// =============================================================================
// OVERVIEW (default - all variants by property)
// =============================================================================

export const Overview: Story = {
  render: () => (
    <div className="flex flex-col gap-48 px-48 pb-48 pt-32">
      {/* Appearance */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Appearance</span>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Icon</span>
            <Toast
              title="Successfully saved!"
              description="Anyone with a link can now view this file."
              appearance="icon"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Dot Indicator</span>
            <Toast
              title="Successfully saved!"
              description="Anyone with a link can now view this file."
              appearance="dot"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Avatar</span>
            <Toast
              title="Successfully saved!"
              description="Anyone with a link can now view this file."
              appearance="avatar"
              avatarProps={{ name: 'Emily Brown' }}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Actions</span>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">None</span>
            <Toast
              title="Successfully saved!"
              description="Anyone with a link can now view this file."
              actions="none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Close</span>
            <Toast
              title="Successfully saved!"
              description="Anyone with a link can now view this file."
              actions="close"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Subtle</span>
            <Toast
              title="Successfully saved!"
              description="Anyone with a link can now view this file."
              actions="subtle"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Buttons</span>
            <Toast
              title="Successfully saved!"
              description="Anyone with a link can now view this file."
              actions="buttons"
            />
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Size</span>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Default</span>
            <Toast
              title="Successfully saved!"
              description="Anyone with a link can now view this file."
              size="default"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Condensed</span>
            <Toast
              title="Successfully saved!"
              size="condensed"
            />
          </div>
        </div>
      </div>

      {/* Condensed with Actions */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Condensed + Actions</span>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Close</span>
            <Toast
              title="Successfully saved!"
              size="condensed"
              actions="close"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Subtle</span>
            <Toast
              title="Successfully saved!"
              size="condensed"
              actions="subtle"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Buttons</span>
            <Toast
              title="Successfully saved!"
              size="condensed"
              actions="buttons"
            />
          </div>
        </div>
      </div>

      {/* Icon Variants */}
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium text-gray-500">Custom Icons</span>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Info</span>
            <Toast
              title="Information"
              description="Here's some helpful information for you."
              icon={InfoIcon}
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Warning</span>
            <Toast
              title="Warning"
              description="Please review before proceeding."
              icon={<WarningIcon className="size-[36px] text-warning-500" />}
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-400">Error</span>
            <Toast
              title="Error occurred"
              description="Something went wrong. Please try again."
              icon={<ErrorIcon className="size-[36px] text-error-600" />}
              actions="buttons"
              primaryActionLabel="Retry"
            />
          </div>
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
    title: 'Successfully saved!',
    description: 'Anyone with a link can now view this file.',
    appearance: 'icon',
    actions: 'none',
    size: 'default',
    primaryActionLabel: 'Undo',
    secondaryActionLabel: 'Dismiss',
  },
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
          href="https://github.com/jordanchghealthcare/chg-unified-ds/tree/main/src/components/Toast"
          target="_blank"
          rel="noopener noreferrer"
          iconLeading={GitHubIcon}
          className="bg-[#24292e] hover:bg-[#1b1f23]"
        >
          View on GitHub
        </Button>
        <Button
          href="https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=4397-6690"
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
