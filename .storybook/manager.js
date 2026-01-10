import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'
import { STORY_CHANGED, CURRENT_STORY_WAS_SET } from '@storybook/core-events'

const theme = create({
  base: 'light',
  brandTitle: 'CHG Unified Design',
  brandUrl: 'https://github.com/jordanchghealthcare/chg-unified-ds',
  brandImage: '/CHG-logo.svg',
  brandTarget: '_blank',
})

addons.setConfig({
  theme,
  showPanel: false, // Default to hidden
})

/**
 * Panel Controller Addon
 * Dynamically shows/hides the addons panel based on story tags:
 * - Stories with 'show-panel' tag: Panel is SHOWN
 * - All other stories: Panel is HIDDEN
 */
addons.register('panel-controller', (api) => {
  const channel = addons.getChannel()
  
  const updatePanelVisibility = (storyId) => {
    if (!storyId) return
    
    const storyData = api.getData(storyId)
    const tags = storyData?.tags ?? []
    const shouldShow = tags.includes('show-panel')
    
    api.setOptions({ showPanel: shouldShow })
    api.togglePanel(shouldShow)
  }
  
  // Listen for story changes
  channel.on(STORY_CHANGED, updatePanelVisibility)
  channel.on(CURRENT_STORY_WAS_SET, (data) => updatePanelVisibility(data?.storyId))
  
  // Handle initial load
  const currentStoryId = api.getUrlState()?.storyId
  if (currentStoryId) {
    setTimeout(() => updatePanelVisibility(currentStoryId), 500)
  }
})
