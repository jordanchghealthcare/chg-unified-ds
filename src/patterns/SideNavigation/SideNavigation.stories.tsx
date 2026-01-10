import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../components/Button'
import {
  SideNavigation,
  SideNavigationSearch,
  SideNavigationSection,
  SideNavigationItem,
  SideNavigationSubItem,
  SideNavigationAccount,
} from './SideNavigation'

const meta: Meta<typeof SideNavigation> = {
  title: 'Patterns/SideNavigation',
  component: SideNavigation,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof SideNavigation>

// Sample icons
const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
      clipRule="evenodd"
    />
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
  </svg>
)

const FolderIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 00.177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75z" />
  </svg>
)

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
  </svg>
)

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
      clipRule="evenodd"
    />
  </svg>
)

const ChatIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
)

// =============================================================================
// OVERVIEW
// =============================================================================

export const Overview: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(true)
    const [activeItem, setActiveItem] = useState('dashboard')
    const [openItems, setOpenItems] = useState<string[]>(['settings'])

    const toggleItem = (item: string) => {
      setOpenItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
      )
    }

    return (
      <div className="flex h-[600px] gap-32">
        {/* Expanded */}
        <div className="flex flex-col gap-8">
          <span className="text-sm font-medium text-gray-500">Expanded</span>
          <SideNavigation
            brand="design-system"
            isExpanded={expanded}
            onExpandedChange={setExpanded}
            className="h-[540px]"
          >
            <SideNavigation.Search placeholder="Search..." />

            <SideNavigation.Section>
              <SideNavigation.Item
                icon={<HomeIcon />}
                label="Dashboard"
                isActive={activeItem === 'dashboard'}
                onClick={() => setActiveItem('dashboard')}
              />
              <SideNavigation.Item
                icon={<UsersIcon />}
                label="Users"
                isActive={activeItem === 'users'}
                onClick={() => setActiveItem('users')}
              />
              <SideNavigation.Item
                icon={<FolderIcon />}
                label="Projects"
                isActive={activeItem === 'projects'}
                onClick={() => setActiveItem('projects')}
              />
              <SideNavigation.Item
                icon={<ChartIcon />}
                label="Analytics"
                isActive={activeItem === 'analytics'}
                onClick={() => setActiveItem('analytics')}
              />
              <SideNavigation.Item
                icon={<SettingsIcon />}
                label="Settings"
                isActive={activeItem.startsWith('settings')}
                isOpen={openItems.includes('settings')}
                onToggle={() => toggleItem('settings')}
              >
                <SideNavigation.SubItem
                  label="General"
                  isActive={activeItem === 'settings-general'}
                  onClick={() => setActiveItem('settings-general')}
                />
                <SideNavigation.SubItem
                  label="Security"
                  isActive={activeItem === 'settings-security'}
                  onClick={() => setActiveItem('settings-security')}
                />
                <SideNavigation.SubItem
                  label="Notifications"
                  isActive={activeItem === 'settings-notifications'}
                  onClick={() => setActiveItem('settings-notifications')}
                />
              </SideNavigation.Item>
            </SideNavigation.Section>

            <SideNavigation.Section className="flex-none">
              <SideNavigation.Item
                icon={<PhoneIcon />}
                label="888-888-8888"
                onClick={() => {}}
              />
              <SideNavigation.Item
                icon={<ChatIcon />}
                label="Feedback"
                onClick={() => {}}
              />
            </SideNavigation.Section>

            <SideNavigation.Account
              name="Jane Doe"
              initials="JD"
              onSettingsClick={() => console.log('Settings clicked')}
            />
          </SideNavigation>
        </div>

        {/* Collapsed */}
        <div className="flex flex-col gap-8">
          <span className="text-sm font-medium text-gray-500">Collapsed</span>
          <SideNavigation
            brand="design-system"
            isExpanded={false}
            className="h-[540px]"
          >
            <SideNavigation.Search />

            <SideNavigation.Section>
              <SideNavigation.Item
                icon={<HomeIcon />}
                label="Dashboard"
                isActive
              />
              <SideNavigation.Item
                icon={<UsersIcon />}
                label="Users"
              />
              <SideNavigation.Item
                icon={<FolderIcon />}
                label="Projects"
              />
              <SideNavigation.Item
                icon={<ChartIcon />}
                label="Analytics"
              />
              <SideNavigation.Item
                icon={<SettingsIcon />}
                label="Settings"
              />
            </SideNavigation.Section>

            <SideNavigation.Section className="flex-none">
              <SideNavigation.Item
                icon={<PhoneIcon />}
                label="Phone"
              />
              <SideNavigation.Item
                icon={<ChatIcon />}
                label="Feedback"
              />
            </SideNavigation.Section>

            <SideNavigation.Account
              name="Jane Doe"
              initials="JD"
            />
          </SideNavigation>
        </div>
      </div>
    )
  },
}

// =============================================================================
// PROPS (with controls)
// =============================================================================

export const Props: Story = {
  tags: ['show-panel'],
  args: {
    brand: 'design-system',
    defaultExpanded: true,
  },
  argTypes: {
    brand: {
      control: 'select',
      options: ['design-system', 'wireframe', 'connect', 'locumsmart', 'modio', 'myweatherby', 'mycomphealth'],
    },
    defaultExpanded: {
      control: 'boolean',
    },
  },
  render: (args) => (
    <div className="h-[500px]">
      <SideNavigation {...args}>
        <SideNavigation.Search placeholder="Search..." />
        <SideNavigation.Section>
          <SideNavigation.Item icon={<HomeIcon />} label="Dashboard" isActive />
          <SideNavigation.Item icon={<UsersIcon />} label="Users" />
          <SideNavigation.Item icon={<FolderIcon />} label="Projects" />
          <SideNavigation.Item icon={<ChartIcon />} label="Analytics" />
          <SideNavigation.Item icon={<SettingsIcon />} label="Settings" />
        </SideNavigation.Section>
        <SideNavigation.Account name="Jane Doe" initials="JD" />
      </SideNavigation>
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
        <p className="text-md whitespace-nowrap text-gray-500">This pattern was built using the CHG Unified Design System</p>
      </div>
      <div className="flex gap-12">
        <Button
          href="https://github.com/jordanchghealthcare/chg-unified-ds/tree/main/src/patterns/SideNavigation"
          target="_blank"
          rel="noopener noreferrer"
          iconLeading={GitHubIcon}
          className="bg-[#24292e] hover:bg-[#1b1f23]"
        >
          View on GitHub
        </Button>
        <Button
          href="https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=7010-16561"
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
