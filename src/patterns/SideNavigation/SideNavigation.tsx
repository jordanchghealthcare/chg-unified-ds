/**
 * SideNavigation pattern - sidebar navigation with expandable/collapsible states
 * @figma https://www.figma.com/design/r7KRvL85GNIIMn4iM9gKvo/Design-System--Components--Copy-?node-id=7010-16561
 */
'use client'

import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react'
import { createContext, useContext, useState } from 'react'
import { cx, sortCx } from '@/utils/cx'
import { Avatar } from '@/components/Avatar'
import { Branding, type BrandingBrand } from '@/components/Branding'
import { TextInput } from '@/components/TextInput'

// =============================================================================
// STYLES
// =============================================================================

export const styles = sortCx({
  nav: {
    root: [
      'flex h-full flex-col bg-brand-900 transition-all duration-200',
    ].join(' '),
    expanded: 'w-[240px]',
    collapsed: 'w-[64px]',
  },
  branding: {
    root: 'flex items-center px-16 py-16',
    expanded: 'justify-start',
    collapsed: 'justify-center',
  },
  search: {
    root: 'px-12 py-8',
    button: [
      'flex size-[40px] items-center justify-center rounded-4 text-base-white/70',
      'hover:bg-base-white/10 hover:text-base-white',
      'transition-colors',
    ].join(' '),
    icon: 'size-20',
  },
  section: {
    root: 'flex flex-1 flex-col gap-4 overflow-y-auto px-12 py-8',
  },
  item: {
    root: [
      'flex cursor-pointer items-center gap-12 rounded-4 text-base-white/70 transition-colors',
      'hover:bg-base-white/10 hover:text-base-white',
    ].join(' '),
    active: 'bg-brand-700 text-base-white',
    expanded: 'px-12 py-10',
    collapsed: 'justify-center p-12',
    icon: 'size-20 shrink-0',
    label: 'text-md font-medium',
    chevron: 'ml-auto size-16 shrink-0 transition-transform',
    chevronOpen: 'rotate-180',
  },
  subItem: {
    root: [
      'flex cursor-pointer items-center rounded-4 py-8 pl-44 pr-12 text-sm text-base-white/70 transition-colors',
      'hover:bg-base-white/10 hover:text-base-white',
    ].join(' '),
    active: 'text-base-white',
  },
  children: {
    root: 'flex flex-col gap-2',
  },
  account: {
    root: 'flex items-center gap-12 border-t border-base-white/10 px-12 py-12',
    expanded: '',
    collapsed: 'justify-center',
    info: 'flex flex-1 flex-col overflow-hidden',
    name: 'truncate text-sm font-medium text-base-white',
    button: [
      'flex size-[32px] shrink-0 items-center justify-center rounded-4 text-base-white/70',
      'hover:bg-base-white/10 hover:text-base-white',
      'transition-colors',
    ].join(' '),
    buttonIcon: 'size-16',
  },
})

// =============================================================================
// CONTEXT
// =============================================================================

interface SideNavigationContextValue {
  isExpanded: boolean
  toggleExpanded: () => void
}

const SideNavigationContext = createContext<SideNavigationContextValue>({
  isExpanded: true,
  toggleExpanded: () => {},
})

// =============================================================================
// SIDE NAVIGATION
// =============================================================================

export interface SideNavigationProps extends HTMLAttributes<HTMLElement> {
  /** Brand logo to display */
  brand?: BrandingBrand
  /** Initial expanded state */
  defaultExpanded?: boolean
  /** Controlled expanded state */
  isExpanded?: boolean
  /** Callback when expanded state changes */
  onExpandedChange?: (expanded: boolean) => void
  /** Navigation content */
  children?: ReactNode
  /** Additional className */
  className?: string
}

export function SideNavigation({
  brand = 'design-system',
  defaultExpanded = true,
  isExpanded: controlledExpanded,
  onExpandedChange,
  children,
  className,
  ...props
}: SideNavigationProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)
  const isExpanded = controlledExpanded ?? internalExpanded

  const toggleExpanded = () => {
    const newValue = !isExpanded
    setInternalExpanded(newValue)
    onExpandedChange?.(newValue)
  }

  return (
    <SideNavigationContext.Provider value={{ isExpanded, toggleExpanded }}>
      <nav
        className={cx(
          styles.nav.root,
          isExpanded ? styles.nav.expanded : styles.nav.collapsed,
          className,
        )}
        {...props}
      >
        {/* Branding */}
        <div
          className={cx(
            styles.branding.root,
            isExpanded ? styles.branding.expanded : styles.branding.collapsed,
          )}
        >
          {isExpanded ? (
            <Branding brand={brand} size="sm" />
          ) : (
            <button
              type="button"
              onClick={toggleExpanded}
              className="text-base-white"
              aria-label="Expand navigation"
            >
              <MenuIcon className="size-24" />
            </button>
          )}
        </div>

        {children}
      </nav>
    </SideNavigationContext.Provider>
  )
}

// =============================================================================
// SIDE NAVIGATION SEARCH
// =============================================================================

export interface SideNavigationSearchProps {
  /** Search placeholder */
  placeholder?: string
  /** Search value */
  value?: string
  /** Callback when search value changes */
  onChange?: (value: string) => void
  /** Additional className */
  className?: string
}

export function SideNavigationSearch({
  placeholder = 'Search...',
  value,
  onChange,
  className,
}: SideNavigationSearchProps) {
  const { isExpanded, toggleExpanded } = useContext(SideNavigationContext)

  if (!isExpanded) {
    return (
      <div className={cx(styles.search.root, 'flex justify-center', className)}>
        <button
          type="button"
          onClick={toggleExpanded}
          className={styles.search.button}
          aria-label="Open search"
        >
          <SearchIcon className={styles.search.icon} />
        </button>
      </div>
    )
  }

  return (
    <div className={cx(styles.search.root, className)}>
      <TextInput
        variant="search"
        size="compact"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        icon={<SearchIcon />}
        className="[&_input]:bg-base-white/10 [&_input]:text-base-white [&_input]:ring-transparent [&_input]:placeholder:text-base-white/50"
      />
    </div>
  )
}

// =============================================================================
// SIDE NAVIGATION SECTION
// =============================================================================

export interface SideNavigationSectionProps {
  /** Section content */
  children?: ReactNode
  /** Additional className */
  className?: string
}

export function SideNavigationSection({
  children,
  className,
}: SideNavigationSectionProps) {
  return (
    <div className={cx(styles.section.root, className)}>
      {children}
    </div>
  )
}

// =============================================================================
// SIDE NAVIGATION ITEM
// =============================================================================

export interface SideNavigationItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Item icon */
  icon?: ReactNode
  /** Item label */
  label: string
  /** Whether the item is active */
  isActive?: boolean
  /** Whether the submenu is open */
  isOpen?: boolean
  /** Callback when item is clicked */
  onToggle?: () => void
  /** Sub items */
  children?: ReactNode
  /** Additional className */
  className?: string
}

export function SideNavigationItem({
  icon,
  label,
  isActive = false,
  isOpen = false,
  onToggle,
  children,
  className,
  onClick,
  ...props
}: SideNavigationItemProps) {
  const { isExpanded } = useContext(SideNavigationContext)
  const hasChildren = Boolean(children)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    if (hasChildren) {
      onToggle?.()
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className={cx(
          styles.item.root,
          isActive && styles.item.active,
          isExpanded ? styles.item.expanded : styles.item.collapsed,
          className,
        )}
        title={!isExpanded ? label : undefined}
        {...props}
      >
        {icon && <span className={styles.item.icon}>{icon}</span>}
        {isExpanded && (
          <>
            <span className={styles.item.label}>{label}</span>
            {hasChildren && (
              <ChevronDownIcon
                className={cx(
                  styles.item.chevron,
                  isOpen && styles.item.chevronOpen,
                )}
              />
            )}
          </>
        )}
      </button>
      {isExpanded && hasChildren && isOpen && (
        <div className={styles.children.root}>{children}</div>
      )}
    </div>
  )
}

// =============================================================================
// SIDE NAVIGATION SUB ITEM
// =============================================================================

export interface SideNavigationSubItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Sub item label */
  label: string
  /** Whether the sub item is active */
  isActive?: boolean
  /** Additional className */
  className?: string
}

export function SideNavigationSubItem({
  label,
  isActive = false,
  className,
  ...props
}: SideNavigationSubItemProps) {
  return (
    <button
      type="button"
      className={cx(
        styles.subItem.root,
        isActive && styles.subItem.active,
        className,
      )}
      {...props}
    >
      {label}
    </button>
  )
}

// =============================================================================
// SIDE NAVIGATION ACCOUNT
// =============================================================================

export interface SideNavigationAccountProps {
  /** User's name */
  name: string
  /** Avatar image source */
  avatarSrc?: string
  /** User's initials (fallback for avatar) */
  initials?: string
  /** Callback when settings button is clicked */
  onSettingsClick?: () => void
  /** Additional className */
  className?: string
}

export function SideNavigationAccount({
  name,
  avatarSrc,
  initials,
  onSettingsClick,
  className,
}: SideNavigationAccountProps) {
  const { isExpanded } = useContext(SideNavigationContext)

  return (
    <div
      className={cx(
        styles.account.root,
        isExpanded ? styles.account.expanded : styles.account.collapsed,
        className,
      )}
    >
      <Avatar
        name={name}
        src={avatarSrc}
        initials={initials}
        size="sm"
      />
      {isExpanded && (
        <>
          <div className={styles.account.info}>
            <span className={styles.account.name}>{name}</span>
          </div>
          <button
            type="button"
            onClick={onSettingsClick}
            className={styles.account.button}
            aria-label="Settings"
          >
            <DotsVerticalIcon className={styles.account.buttonIcon} />
          </button>
        </>
      )}
    </div>
  )
}

// =============================================================================
// ICONS
// =============================================================================

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function DotsVerticalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8 6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM9.5 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  )
}

// =============================================================================
// COMPOUND EXPORT
// =============================================================================

SideNavigation.Search = SideNavigationSearch
SideNavigation.Section = SideNavigationSection
SideNavigation.Item = SideNavigationItem
SideNavigation.SubItem = SideNavigationSubItem
SideNavigation.Account = SideNavigationAccount
