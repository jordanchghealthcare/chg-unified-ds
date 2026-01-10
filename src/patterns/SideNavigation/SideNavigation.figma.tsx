import figma from '@figma/code-connect'
import { SideNavigation } from './SideNavigation'

/**
 * Figma Code Connect for SideNavigation pattern
 * @see https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=7010-16561
 */
figma.connect(SideNavigation, 'https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=7010:15032', {
  props: {
    isExpanded: figma.enum('Expanded', {
      true: true,
      false: false,
    }),
  },
  example: ({ isExpanded }) => (
    <SideNavigation brand="design-system" isExpanded={isExpanded}>
      <SideNavigation.Search placeholder="Search..." />
      <SideNavigation.Section>
        <SideNavigation.Item icon={<HomeIcon />} label="Dashboard" isActive />
        <SideNavigation.Item icon={<UsersIcon />} label="Users" />
        <SideNavigation.Item icon={<SettingsIcon />} label="Settings" isOpen>
          <SideNavigation.SubItem label="General" />
          <SideNavigation.SubItem label="Security" />
        </SideNavigation.Item>
      </SideNavigation.Section>
      <SideNavigation.Account name="Jane Doe" initials="JD" />
    </SideNavigation>
  ),
})

// Placeholder icons for the example
function HomeIcon() {
  return <svg viewBox="0 0 20 20" fill="currentColor"><path d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" /></svg>
}

function UsersIcon() {
  return <svg viewBox="0 0 20 20" fill="currentColor"><path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" /></svg>
}

function SettingsIcon() {
  return <svg viewBox="0 0 20 20" fill="currentColor"><path d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" /></svg>
}
