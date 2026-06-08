import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class LeadPipelineInspectionPage {
  private static readonly L = {
    skipToNavigation: { strategy: 'role' as const, value: 'Skip to Navigation', role: 'link', actionKind: 'link' as const },
    skipToMainContent: { strategy: 'role' as const, value: 'Skip to Main Content', role: 'link', actionKind: 'link' as const },
    togglePanel: { strategy: 'label' as const, value: 'Toggle Panel', shadowHost: 'devops_center-panel-button', actionKind: 'button' as const },
    developerEdition: { strategy: 'text' as const, value: 'Developer Edition', shadowHost: 'devops_center-org-info', actionKind: 'text' as const },
    showMenu: { strategy: 'role' as const, value: 'Show menu', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    search: { strategy: 'label' as const, value: 'Search', actionKind: 'button' as const },
    thisItemDoesnTSupport: { strategy: 'text' as const, value: 'This item doesn\'t support favorites Favorites list', actionKind: 'text' as const },
    thisItemDoesnTSupportButton: { strategy: 'label' as const, value: 'This item doesn\'t support favorites', actionKind: 'button' as const },
    favoritesList: { strategy: 'role' as const, value: 'Favorites list', role: 'button', actionKind: 'button' as const },
    globalActions: { strategy: 'role' as const, value: 'Global Actions', role: 'button', actionKind: 'link' as const },
    guidanceCenter: { strategy: 'role' as const, value: 'Guidance Center', role: 'button', actionKind: 'button' as const },
    salesforceHelp: { strategy: 'role' as const, value: 'Salesforce Help', role: 'button', actionKind: 'button' as const },
    setup: { strategy: 'role' as const, value: 'Setup', role: 'button', actionKind: 'link' as const },
    notifications: { strategy: 'role' as const, value: 'Notifications', role: 'button', actionKind: 'button' as const },
    viewProfile: { strategy: 'role' as const, value: 'View profile', role: 'button', actionKind: 'button' as const },
    appLauncher: { strategy: 'css' as const, value: '[title="App Launcher"]', shadowHost: 'one-app-launcher-header', actionKind: 'button' as const },
    sales: { strategy: 'text' as const, value: 'Sales', shadowHost: 'one-appnav', actionKind: 'text' as const },
    home: { strategy: 'css' as const, value: '[title="Home"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    opportunities: { strategy: 'css' as const, value: '[title="Opportunities"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    opportunitiesList: { strategy: 'role' as const, value: 'Opportunities List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    leads: { strategy: 'css' as const, value: '[title="Leads"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    leadsList: { strategy: 'role' as const, value: 'Leads List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    tasks: { strategy: 'css' as const, value: '[title="Tasks"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    tasksList: { strategy: 'role' as const, value: 'Tasks List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    files: { strategy: 'css' as const, value: '[title="Files"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    filesList: { strategy: 'role' as const, value: 'Files List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    accounts: { strategy: 'css' as const, value: '[title="Accounts"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    accountsList: { strategy: 'role' as const, value: 'Accounts List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    contacts: { strategy: 'css' as const, value: '[title="Contacts"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    contactsList: { strategy: 'role' as const, value: 'Contacts List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    campaigns: { strategy: 'css' as const, value: '[title="Campaigns"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    campaignsList: { strategy: 'role' as const, value: 'Campaigns List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    dashboards: { strategy: 'css' as const, value: '[title="Dashboards"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    dashboardsList: { strategy: 'role' as const, value: 'Dashboards List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    reports: { strategy: 'css' as const, value: '[title="Reports"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    reportsList: { strategy: 'role' as const, value: 'Reports List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    moreShowMoreNavigation: { strategy: 'role' as const, value: 'More Show more navigation items', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    personalizeYourNavBar: { strategy: 'css' as const, value: '[title="Personalize your nav bar"]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    leadsMyLeads: { strategy: 'text' as const, value: 'Leads My Leads', shadowHost: 'lst-list-view-picker', actionKind: 'text' as const },
    myLeads: { strategy: 'text' as const, value: 'My Leads', shadowHost: 'lst-list-view-picker', actionKind: 'text' as const },
    selectAListView: { strategy: 'css' as const, value: '[title="Select a List View: Leads"]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    leadViewSettings: { strategy: 'css' as const, value: '[title="Lead View Settings"]', actionKind: 'button' as const },
    refresh: { strategy: 'css' as const, value: '[title="Refresh"]', actionKind: 'button' as const },
    inlineEditButton: { strategy: 'css' as const, value: '[name="inlineEditButton"][title="Edit List"]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    new: { strategy: 'css' as const, value: '[name="New"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    pipelineInspectionToListView: { strategy: 'css' as const, value: '[name="pipelineInspectionToListView"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    timePeriodFilterThis: { strategy: 'label' as const, value: 'Time Period Filter: This Quarter', shadowHost: 'lightning-button', actionKind: 'button' as const },
    leadOwnerFilterMe: { strategy: 'label' as const, value: 'Lead owner filter: Me', shadowHost: 'lightning-button', actionKind: 'button' as const },
    importantLeads: { strategy: 'css' as const, value: '[title="Important Leads"]', shadowHost: 'lightning-button-icon-stateful', actionKind: 'button' as const },
    applyImportantLeadsFilter: { strategy: 'text' as const, value: 'Apply Important Leads Filter', actionKind: 'text' as const },
    priorityRecordFilterButtonTooltip: { strategy: 'css' as const, value: '#priorityRecordFilterButtonTooltip', actionKind: 'text' as const },
    showFilters: { strategy: 'css' as const, value: '[title="Show filters"]', shadowHost: 'lightning-button-icon-stateful', actionKind: 'button' as const },
    totalLeads0: { strategy: 'role' as const, value: 'Total Leads 0', role: 'button', shadowHost: 'runtime_pipeline_inspector-kpi-panel', actionKind: 'button' as const },
    noActivity0: { strategy: 'role' as const, value: 'No Activity 0', role: 'button', shadowHost: 'runtime_pipeline_inspector-kpi-panel', actionKind: 'button' as const },
    help: { strategy: 'role' as const, value: 'Help', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    idle0: { strategy: 'role' as const, value: 'Idle 0', role: 'button', shadowHost: 'runtime_pipeline_inspector-kpi-panel', actionKind: 'button' as const },
    helpButton: { strategy: 'role' as const, value: 'Help', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    noUpcoming0: { strategy: 'role' as const, value: 'No Upcoming 0', role: 'button', shadowHost: 'runtime_pipeline_inspector-kpi-panel', actionKind: 'button' as const },
    helpButton2: { strategy: 'role' as const, value: 'Help', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    overdue0: { strategy: 'role' as const, value: 'Overdue 0', role: 'button', shadowHost: 'runtime_pipeline_inspector-kpi-panel', actionKind: 'button' as const },
    dueToday0: { strategy: 'role' as const, value: 'Due Today 0', role: 'button', shadowHost: 'runtime_pipeline_inspector-kpi-panel', actionKind: 'button' as const },
    upcoming0: { strategy: 'role' as const, value: 'Upcoming 0', role: 'button', shadowHost: 'runtime_pipeline_inspector-kpi-panel', actionKind: 'button' as const },
    helpButton3: { strategy: 'role' as const, value: 'Help', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    massChangeStatus: { strategy: 'css' as const, value: '[name="MassChangeStatus"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    massChangeOwner: { strategy: 'css' as const, value: '[name="MassChangeOwner"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    sendListEmailAction: { strategy: 'css' as const, value: '[name="SendListEmailAction"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    massAssignRecordLabel: { strategy: 'css' as const, value: '[name="MassAssignRecordLabel"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    getYourLeadPipeline: { strategy: 'text' as const, value: 'Get your lead pipeline flowing', actionKind: 'text' as const },
    whenThereAreLeads: { strategy: 'text' as const, value: 'When there are leads that match your selections,', actionKind: 'text' as const },
    toDoList: { strategy: 'role' as const, value: 'To Do List', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickSkipToNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation));
  }

  async doubleClickSkipToNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation));
  }

  async expectSkipToNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), expected, timeoutMs);
  }

  async expectSkipToNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), substring, timeoutMs);
  }

  async scrollSkipToNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation));
  }

  async clickSkipToMainContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent));
  }

  async doubleClickSkipToMainContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent));
  }

  async expectSkipToMainContentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), expected, timeoutMs);
  }

  async expectSkipToMainContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), substring, timeoutMs);
  }

  async scrollSkipToMainContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent));
  }

  async clickTogglePanel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel));
  }

  async doubleClickTogglePanel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel));
  }

  async expectTogglePanelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), expected, timeoutMs);
  }

  async expectTogglePanelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), substring, timeoutMs);
  }

  async scrollTogglePanelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel));
  }

  async getInnerTextDeveloperEdition(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition));
  }

  async expectDeveloperEditionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), expected, timeoutMs);
  }

  async expectDeveloperEditionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), substring, timeoutMs);
  }

  async scrollDeveloperEditionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition));
  }

  async clickShowMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu));
  }

  async doubleClickShowMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu));
  }

  async expectShowMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), expected, timeoutMs);
  }

  async expectShowMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), substring, timeoutMs);
  }

  async scrollShowMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu));
  }

  async clickSearch(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.search));
  }

  async doubleClickSearch(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.search), timeoutMs);
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.search), timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.search), substring, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.search));
  }

  async getInnerTextThisItemDoesnTSupport(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport));
  }

  async expectThisItemDoesnTSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), expected, timeoutMs);
  }

  async expectThisItemDoesnTSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), substring, timeoutMs);
  }

  async scrollThisItemDoesnTSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport));
  }

  async clickThisItemDoesnTSupportButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton));
  }

  async doubleClickThisItemDoesnTSupportButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton));
  }

  async expectThisItemDoesnTSupportButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), expected, timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), substring, timeoutMs);
  }

  async scrollThisItemDoesnTSupportButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton));
  }

  async clickFavoritesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList));
  }

  async doubleClickFavoritesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList));
  }

  async expectFavoritesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), expected, timeoutMs);
  }

  async expectFavoritesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), substring, timeoutMs);
  }

  async scrollFavoritesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList));
  }

  async clickGlobalActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions));
  }

  async doubleClickGlobalActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions));
  }

  async expectGlobalActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), expected, timeoutMs);
  }

  async expectGlobalActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), substring, timeoutMs);
  }

  async scrollGlobalActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions));
  }

  async clickGuidanceCenter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter));
  }

  async doubleClickGuidanceCenter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter));
  }

  async expectGuidanceCenterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), expected, timeoutMs);
  }

  async expectGuidanceCenterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), substring, timeoutMs);
  }

  async scrollGuidanceCenterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter));
  }

  async clickSalesforceHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp));
  }

  async doubleClickSalesforceHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp));
  }

  async expectSalesforceHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), expected, timeoutMs);
  }

  async expectSalesforceHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), substring, timeoutMs);
  }

  async scrollSalesforceHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp));
  }

  async clickSetup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.setup));
  }

  async doubleClickSetup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.setup));
  }

  async expectSetupVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.setup), timeoutMs);
  }

  async expectSetupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.setup), timeoutMs);
  }

  async expectSetupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.setup), expected, timeoutMs);
  }

  async expectSetupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.setup), substring, timeoutMs);
  }

  async scrollSetupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.setup));
  }

  async clickNotifications(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.notifications));
  }

  async doubleClickNotifications(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.notifications));
  }

  async expectNotificationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), timeoutMs);
  }

  async expectNotificationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), timeoutMs);
  }

  async expectNotificationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), timeoutMs);
  }

  async expectNotificationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), timeoutMs);
  }

  async expectNotificationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), expected, timeoutMs);
  }

  async expectNotificationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), substring, timeoutMs);
  }

  async scrollNotificationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.notifications));
  }

  async clickViewProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile));
  }

  async doubleClickViewProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile));
  }

  async expectViewProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), expected, timeoutMs);
  }

  async expectViewProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), substring, timeoutMs);
  }

  async scrollViewProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile));
  }

  async clickAppLauncher(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher));
  }

  async doubleClickAppLauncher(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher));
  }

  async expectAppLauncherVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), expected, timeoutMs);
  }

  async expectAppLauncherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), substring, timeoutMs);
  }

  async scrollAppLauncherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher));
  }

  async getInnerTextSales(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sales));
  }

  async expectSalesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sales), timeoutMs);
  }

  async expectSalesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.sales), timeoutMs);
  }

  async expectSalesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.sales), expected, timeoutMs);
  }

  async expectSalesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.sales), substring, timeoutMs);
  }

  async scrollSalesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sales));
  }

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.home));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.home), timeoutMs);
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.home), substring, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.home));
  }

  async clickOpportunities(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities));
  }

  async doubleClickOpportunities(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities));
  }

  async expectOpportunitiesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), expected, timeoutMs);
  }

  async expectOpportunitiesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), substring, timeoutMs);
  }

  async scrollOpportunitiesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities));
  }

  async clickOpportunitiesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList));
  }

  async doubleClickOpportunitiesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList));
  }

  async expectOpportunitiesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), expected, timeoutMs);
  }

  async expectOpportunitiesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), substring, timeoutMs);
  }

  async scrollOpportunitiesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList));
  }

  async clickLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leads));
  }

  async doubleClickLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leads));
  }

  async expectLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leads), timeoutMs);
  }

  async expectLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.leads), timeoutMs);
  }

  async expectLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.leads), expected, timeoutMs);
  }

  async expectLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.leads), substring, timeoutMs);
  }

  async scrollLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leads));
  }

  async clickLeadsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList));
  }

  async doubleClickLeadsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList));
  }

  async expectLeadsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), expected, timeoutMs);
  }

  async expectLeadsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), substring, timeoutMs);
  }

  async scrollLeadsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList));
  }

  async clickTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.tasks));
  }

  async doubleClickTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.tasks));
  }

  async expectTasksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), timeoutMs);
  }

  async expectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), timeoutMs);
  }

  async expectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), expected, timeoutMs);
  }

  async expectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), substring, timeoutMs);
  }

  async scrollTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.tasks));
  }

  async clickTasksList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList));
  }

  async doubleClickTasksList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList));
  }

  async expectTasksListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), timeoutMs);
  }

  async expectTasksListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), timeoutMs);
  }

  async expectTasksListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), expected, timeoutMs);
  }

  async expectTasksListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), substring, timeoutMs);
  }

  async scrollTasksListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList));
  }

  async clickFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.files));
  }

  async doubleClickFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.files));
  }

  async expectFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.files), timeoutMs);
  }

  async expectFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.files), timeoutMs);
  }

  async expectFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.files), expected, timeoutMs);
  }

  async expectFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.files), substring, timeoutMs);
  }

  async scrollFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.files));
  }

  async clickFilesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.filesList));
  }

  async doubleClickFilesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.filesList));
  }

  async expectFilesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), timeoutMs);
  }

  async expectFilesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), timeoutMs);
  }

  async expectFilesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), expected, timeoutMs);
  }

  async expectFilesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), substring, timeoutMs);
  }

  async scrollFilesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.filesList));
  }

  async clickAccounts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.accounts));
  }

  async doubleClickAccounts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.accounts));
  }

  async expectAccountsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), timeoutMs);
  }

  async expectAccountsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), timeoutMs);
  }

  async expectAccountsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), expected, timeoutMs);
  }

  async expectAccountsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), substring, timeoutMs);
  }

  async scrollAccountsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.accounts));
  }

  async clickAccountsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList));
  }

  async doubleClickAccountsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList));
  }

  async expectAccountsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), expected, timeoutMs);
  }

  async expectAccountsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), substring, timeoutMs);
  }

  async scrollAccountsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList));
  }

  async clickContacts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.contacts));
  }

  async doubleClickContacts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.contacts));
  }

  async expectContactsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), timeoutMs);
  }

  async expectContactsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), timeoutMs);
  }

  async expectContactsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), expected, timeoutMs);
  }

  async expectContactsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), substring, timeoutMs);
  }

  async scrollContactsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.contacts));
  }

  async clickContactsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList));
  }

  async doubleClickContactsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList));
  }

  async expectContactsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), timeoutMs);
  }

  async expectContactsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), timeoutMs);
  }

  async expectContactsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), expected, timeoutMs);
  }

  async expectContactsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), substring, timeoutMs);
  }

  async scrollContactsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList));
  }

  async clickCampaigns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns));
  }

  async doubleClickCampaigns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns));
  }

  async expectCampaignsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), expected, timeoutMs);
  }

  async expectCampaignsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), substring, timeoutMs);
  }

  async scrollCampaignsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns));
  }

  async clickCampaignsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList));
  }

  async doubleClickCampaignsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList));
  }

  async expectCampaignsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), expected, timeoutMs);
  }

  async expectCampaignsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), substring, timeoutMs);
  }

  async scrollCampaignsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList));
  }

  async clickDashboards(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards));
  }

  async doubleClickDashboards(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards));
  }

  async expectDashboardsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), expected, timeoutMs);
  }

  async expectDashboardsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), substring, timeoutMs);
  }

  async scrollDashboardsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards));
  }

  async clickDashboardsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList));
  }

  async doubleClickDashboardsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList));
  }

  async expectDashboardsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), expected, timeoutMs);
  }

  async expectDashboardsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), substring, timeoutMs);
  }

  async scrollDashboardsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList));
  }

  async clickReports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.reports));
  }

  async doubleClickReports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.reports));
  }

  async expectReportsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.reports), timeoutMs);
  }

  async expectReportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.reports), timeoutMs);
  }

  async expectReportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.reports), expected, timeoutMs);
  }

  async expectReportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.reports), substring, timeoutMs);
  }

  async scrollReportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.reports));
  }

  async clickReportsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList));
  }

  async doubleClickReportsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList));
  }

  async expectReportsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), timeoutMs);
  }

  async expectReportsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), timeoutMs);
  }

  async expectReportsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), expected, timeoutMs);
  }

  async expectReportsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), substring, timeoutMs);
  }

  async scrollReportsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList));
  }

  async clickMoreShowMoreNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation));
  }

  async doubleClickMoreShowMoreNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), expected, timeoutMs);
  }

  async expectMoreShowMoreNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), substring, timeoutMs);
  }

  async scrollMoreShowMoreNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation));
  }

  async clickPersonalizeYourNavBar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar));
  }

  async doubleClickPersonalizeYourNavBar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar));
  }

  async expectPersonalizeYourNavBarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), expected, timeoutMs);
  }

  async expectPersonalizeYourNavBarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), substring, timeoutMs);
  }

  async scrollPersonalizeYourNavBarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar));
  }

  async getInnerTextLeadsMyLeads(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads));
  }

  async expectLeadsMyLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), expected, timeoutMs);
  }

  async expectLeadsMyLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), substring, timeoutMs);
  }

  async scrollLeadsMyLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads));
  }

  async getInnerTextMyLeads(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads));
  }

  async expectMyLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), expected, timeoutMs);
  }

  async expectMyLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), substring, timeoutMs);
  }

  async scrollMyLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads));
  }

  async clickSelectAListView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView));
  }

  async doubleClickSelectAListView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView));
  }

  async expectSelectAListViewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), expected, timeoutMs);
  }

  async expectSelectAListViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), substring, timeoutMs);
  }

  async scrollSelectAListViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView));
  }

  async clickLeadViewSettings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings));
  }

  async doubleClickLeadViewSettings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings));
  }

  async expectLeadViewSettingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), expected, timeoutMs);
  }

  async expectLeadViewSettingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), substring, timeoutMs);
  }

  async scrollLeadViewSettingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings));
  }

  async clickRefresh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.refresh));
  }

  async doubleClickRefresh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.refresh));
  }

  async expectRefreshVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), expected, timeoutMs);
  }

  async expectRefreshContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), substring, timeoutMs);
  }

  async scrollRefreshIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.refresh));
  }

  async clickInlineEditButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton));
  }

  async doubleClickInlineEditButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton));
  }

  async expectInlineEditButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), expected, timeoutMs);
  }

  async expectInlineEditButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), substring, timeoutMs);
  }

  async scrollInlineEditButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton));
  }

  async clickNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.new));
  }

  async doubleClickNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.new));
  }

  async expectNewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.new), expected, timeoutMs);
  }

  async expectNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.new), substring, timeoutMs);
  }

  async scrollNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.new));
  }

  async clickPipelineInspectionToListView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView));
  }

  async doubleClickPipelineInspectionToListView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView));
  }

  async expectPipelineInspectionToListViewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), expected, timeoutMs);
  }

  async expectPipelineInspectionToListViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), substring, timeoutMs);
  }

  async scrollPipelineInspectionToListViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView));
  }

  async clickTimePeriodFilterThis(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis));
  }

  async doubleClickTimePeriodFilterThis(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis));
  }

  async expectTimePeriodFilterThisVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), expected, timeoutMs);
  }

  async expectTimePeriodFilterThisContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), substring, timeoutMs);
  }

  async scrollTimePeriodFilterThisIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis));
  }

  async clickLeadOwnerFilterMe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe));
  }

  async doubleClickLeadOwnerFilterMe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe));
  }

  async expectLeadOwnerFilterMeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), expected, timeoutMs);
  }

  async expectLeadOwnerFilterMeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), substring, timeoutMs);
  }

  async scrollLeadOwnerFilterMeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe));
  }

  async clickImportantLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads));
  }

  async doubleClickImportantLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads));
  }

  async expectImportantLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), expected, timeoutMs);
  }

  async expectImportantLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), substring, timeoutMs);
  }

  async scrollImportantLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads));
  }

  async getInnerTextApplyImportantLeadsFilter(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter));
  }

  async expectApplyImportantLeadsFilterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), expected, timeoutMs);
  }

  async expectApplyImportantLeadsFilterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), substring, timeoutMs);
  }

  async scrollApplyImportantLeadsFilterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter));
  }

  async getInnerTextPriorityRecordFilterButtonTooltip(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip));
  }

  async expectPriorityRecordFilterButtonTooltipVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), expected, timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), substring, timeoutMs);
  }

  async scrollPriorityRecordFilterButtonTooltipIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip));
  }

  async clickShowFilters(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters));
  }

  async doubleClickShowFilters(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters));
  }

  async expectShowFiltersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), expected, timeoutMs);
  }

  async expectShowFiltersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), substring, timeoutMs);
  }

  async scrollShowFiltersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters));
  }

  async clickTotalLeads0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0));
  }

  async doubleClickTotalLeads0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0));
  }

  async expectTotalLeads0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), expected, timeoutMs);
  }

  async expectTotalLeads0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), substring, timeoutMs);
  }

  async scrollTotalLeads0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0));
  }

  async clickNoActivity0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0));
  }

  async doubleClickNoActivity0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0));
  }

  async expectNoActivity0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), expected, timeoutMs);
  }

  async expectNoActivity0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), substring, timeoutMs);
  }

  async scrollNoActivity0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0));
  }

  async clickHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.help));
  }

  async doubleClickHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.help));
  }

  async expectHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.help), timeoutMs);
  }

  async expectHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.help), timeoutMs);
  }

  async expectHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.help), timeoutMs);
  }

  async expectHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.help), timeoutMs);
  }

  async expectHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.help), expected, timeoutMs);
  }

  async expectHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.help), substring, timeoutMs);
  }

  async scrollHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.help));
  }

  async clickIdle0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.idle0));
  }

  async doubleClickIdle0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.idle0));
  }

  async expectIdle0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), timeoutMs);
  }

  async expectIdle0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), timeoutMs);
  }

  async expectIdle0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), timeoutMs);
  }

  async expectIdle0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), timeoutMs);
  }

  async expectIdle0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), expected, timeoutMs);
  }

  async expectIdle0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), substring, timeoutMs);
  }

  async scrollIdle0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.idle0));
  }

  async clickHelpButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton));
  }

  async doubleClickHelpButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton));
  }

  async expectHelpButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), expected, timeoutMs);
  }

  async expectHelpButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), substring, timeoutMs);
  }

  async scrollHelpButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton));
  }

  async clickNoUpcoming0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0));
  }

  async doubleClickNoUpcoming0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0));
  }

  async expectNoUpcoming0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), expected, timeoutMs);
  }

  async expectNoUpcoming0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), substring, timeoutMs);
  }

  async scrollNoUpcoming0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0));
  }

  async clickHelpButton2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2));
  }

  async doubleClickHelpButton2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2));
  }

  async expectHelpButton2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), expected, timeoutMs);
  }

  async expectHelpButton2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), substring, timeoutMs);
  }

  async scrollHelpButton2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2));
  }

  async clickOverdue0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0));
  }

  async doubleClickOverdue0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0));
  }

  async expectOverdue0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), expected, timeoutMs);
  }

  async expectOverdue0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), substring, timeoutMs);
  }

  async scrollOverdue0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0));
  }

  async clickDueToday0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0));
  }

  async doubleClickDueToday0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0));
  }

  async expectDueToday0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), expected, timeoutMs);
  }

  async expectDueToday0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), substring, timeoutMs);
  }

  async scrollDueToday0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0));
  }

  async clickUpcoming0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0));
  }

  async doubleClickUpcoming0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0));
  }

  async expectUpcoming0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), expected, timeoutMs);
  }

  async expectUpcoming0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), substring, timeoutMs);
  }

  async scrollUpcoming0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0));
  }

  async clickHelpButton3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3));
  }

  async doubleClickHelpButton3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3));
  }

  async expectHelpButton3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), expected, timeoutMs);
  }

  async expectHelpButton3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), substring, timeoutMs);
  }

  async scrollHelpButton3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3));
  }

  async clickMassChangeStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus));
  }

  async doubleClickMassChangeStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus));
  }

  async expectMassChangeStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), expected, timeoutMs);
  }

  async expectMassChangeStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), substring, timeoutMs);
  }

  async scrollMassChangeStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus));
  }

  async clickMassChangeOwner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner));
  }

  async doubleClickMassChangeOwner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner));
  }

  async expectMassChangeOwnerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), expected, timeoutMs);
  }

  async expectMassChangeOwnerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), substring, timeoutMs);
  }

  async scrollMassChangeOwnerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner));
  }

  async clickSendListEmailAction(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction));
  }

  async doubleClickSendListEmailAction(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction));
  }

  async expectSendListEmailActionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), expected, timeoutMs);
  }

  async expectSendListEmailActionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), substring, timeoutMs);
  }

  async scrollSendListEmailActionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction));
  }

  async clickMassAssignRecordLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel));
  }

  async doubleClickMassAssignRecordLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel));
  }

  async expectMassAssignRecordLabelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), expected, timeoutMs);
  }

  async expectMassAssignRecordLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), substring, timeoutMs);
  }

  async scrollMassAssignRecordLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel));
  }

  async getInnerTextGetYourLeadPipeline(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline));
  }

  async expectGetYourLeadPipelineVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), expected, timeoutMs);
  }

  async expectGetYourLeadPipelineContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), substring, timeoutMs);
  }

  async scrollGetYourLeadPipelineIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline));
  }

  async getInnerTextWhenThereAreLeads(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads));
  }

  async expectWhenThereAreLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), expected, timeoutMs);
  }

  async expectWhenThereAreLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), substring, timeoutMs);
  }

  async scrollWhenThereAreLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads));
  }

  async clickToDoList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList));
  }

  async doubleClickToDoList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList));
  }

  async expectToDoListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), timeoutMs);
  }

  async expectToDoListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), timeoutMs);
  }

  async expectToDoListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), timeoutMs);
  }

  async expectToDoListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), timeoutMs);
  }

  async expectToDoListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), expected, timeoutMs);
  }

  async expectToDoListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), substring, timeoutMs);
  }

  async scrollToDoListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async longPressSkipToNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation));
  }

  async expectSkipToNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), value, timeoutMs);
  }

  async expectSkipToNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.skipToNavigation), count, timeoutMs);
  }

  async longPressSkipToMainContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent));
  }

  async expectSkipToMainContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), value, timeoutMs);
  }

  async expectSkipToMainContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.skipToMainContent), count, timeoutMs);
  }

  async longPressTogglePanel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel));
  }

  async expectTogglePanelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), value, timeoutMs);
  }

  async expectTogglePanelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.togglePanel), count, timeoutMs);
  }

  async clickDeveloperEdition(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition));
  }

  async doubleClickDeveloperEdition(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition));
  }

  async longPressDeveloperEdition(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition));
  }

  async expectDeveloperEditionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), value, timeoutMs);
  }

  async expectDeveloperEditionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.developerEdition), count, timeoutMs);
  }

  async longPressShowMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu));
  }

  async expectShowMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), value, timeoutMs);
  }

  async expectShowMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.showMenu), count, timeoutMs);
  }

  async longPressSearch(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.search));
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.search), value, timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.search), count, timeoutMs);
  }

  async clickThisItemDoesnTSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport));
  }

  async doubleClickThisItemDoesnTSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport));
  }

  async longPressThisItemDoesnTSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport));
  }

  async expectThisItemDoesnTSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), value, timeoutMs);
  }

  async expectThisItemDoesnTSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupport), count, timeoutMs);
  }

  async longPressThisItemDoesnTSupportButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton));
  }

  async expectThisItemDoesnTSupportButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), value, timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.thisItemDoesnTSupportButton), count, timeoutMs);
  }

  async longPressFavoritesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList));
  }

  async expectFavoritesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), value, timeoutMs);
  }

  async expectFavoritesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.favoritesList), count, timeoutMs);
  }

  async longPressGlobalActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions));
  }

  async expectGlobalActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), value, timeoutMs);
  }

  async expectGlobalActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.globalActions), count, timeoutMs);
  }

  async longPressGuidanceCenter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter));
  }

  async expectGuidanceCenterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), value, timeoutMs);
  }

  async expectGuidanceCenterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.guidanceCenter), count, timeoutMs);
  }

  async longPressSalesforceHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp));
  }

  async expectSalesforceHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), value, timeoutMs);
  }

  async expectSalesforceHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.salesforceHelp), count, timeoutMs);
  }

  async longPressSetup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.setup));
  }

  async expectSetupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.setup), value, timeoutMs);
  }

  async expectSetupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.setup), timeoutMs);
  }

  async expectSetupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.setup), timeoutMs);
  }

  async expectSetupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.setup), timeoutMs);
  }

  async expectSetupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.setup), timeoutMs);
  }

  async expectSetupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.setup), timeoutMs);
  }

  async expectSetupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.setup), count, timeoutMs);
  }

  async longPressNotifications(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.notifications));
  }

  async expectNotificationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), value, timeoutMs);
  }

  async expectNotificationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), timeoutMs);
  }

  async expectNotificationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), timeoutMs);
  }

  async expectNotificationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), timeoutMs);
  }

  async expectNotificationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.notifications), count, timeoutMs);
  }

  async longPressViewProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile));
  }

  async expectViewProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), value, timeoutMs);
  }

  async expectViewProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.viewProfile), count, timeoutMs);
  }

  async longPressAppLauncher(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher));
  }

  async expectAppLauncherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), value, timeoutMs);
  }

  async expectAppLauncherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.appLauncher), count, timeoutMs);
  }

  async clickSales(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sales));
  }

  async doubleClickSales(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sales));
  }

  async longPressSales(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sales));
  }

  async expectSalesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.sales), value, timeoutMs);
  }

  async expectSalesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.sales), timeoutMs);
  }

  async expectSalesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.sales), timeoutMs);
  }

  async expectSalesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.sales), timeoutMs);
  }

  async expectSalesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.sales), timeoutMs);
  }

  async expectSalesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.sales), timeoutMs);
  }

  async expectSalesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.sales), count, timeoutMs);
  }

  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.home));
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.home), count, timeoutMs);
  }

  async longPressOpportunities(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities));
  }

  async expectOpportunitiesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), value, timeoutMs);
  }

  async expectOpportunitiesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.opportunities), count, timeoutMs);
  }

  async longPressOpportunitiesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList));
  }

  async expectOpportunitiesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), value, timeoutMs);
  }

  async expectOpportunitiesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.opportunitiesList), count, timeoutMs);
  }

  async longPressLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leads));
  }

  async expectLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.leads), value, timeoutMs);
  }

  async expectLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.leads), timeoutMs);
  }

  async expectLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.leads), timeoutMs);
  }

  async expectLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.leads), timeoutMs);
  }

  async expectLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.leads), timeoutMs);
  }

  async expectLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.leads), timeoutMs);
  }

  async expectLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.leads), count, timeoutMs);
  }

  async longPressLeadsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList));
  }

  async expectLeadsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), value, timeoutMs);
  }

  async expectLeadsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.leadsList), count, timeoutMs);
  }

  async longPressTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.tasks));
  }

  async expectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), value, timeoutMs);
  }

  async expectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), timeoutMs);
  }

  async expectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), timeoutMs);
  }

  async expectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), timeoutMs);
  }

  async expectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), timeoutMs);
  }

  async expectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), timeoutMs);
  }

  async expectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.tasks), count, timeoutMs);
  }

  async longPressTasksList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList));
  }

  async expectTasksListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), value, timeoutMs);
  }

  async expectTasksListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), timeoutMs);
  }

  async expectTasksListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), timeoutMs);
  }

  async expectTasksListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), timeoutMs);
  }

  async expectTasksListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), timeoutMs);
  }

  async expectTasksListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), timeoutMs);
  }

  async expectTasksListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.tasksList), count, timeoutMs);
  }

  async longPressFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.files));
  }

  async expectFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.files), value, timeoutMs);
  }

  async expectFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.files), timeoutMs);
  }

  async expectFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.files), timeoutMs);
  }

  async expectFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.files), timeoutMs);
  }

  async expectFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.files), timeoutMs);
  }

  async expectFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.files), timeoutMs);
  }

  async expectFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.files), count, timeoutMs);
  }

  async longPressFilesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.filesList));
  }

  async expectFilesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), value, timeoutMs);
  }

  async expectFilesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), timeoutMs);
  }

  async expectFilesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), timeoutMs);
  }

  async expectFilesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), timeoutMs);
  }

  async expectFilesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), timeoutMs);
  }

  async expectFilesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), timeoutMs);
  }

  async expectFilesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.filesList), count, timeoutMs);
  }

  async longPressAccounts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.accounts));
  }

  async expectAccountsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), value, timeoutMs);
  }

  async expectAccountsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), timeoutMs);
  }

  async expectAccountsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), timeoutMs);
  }

  async expectAccountsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), timeoutMs);
  }

  async expectAccountsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), timeoutMs);
  }

  async expectAccountsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), timeoutMs);
  }

  async expectAccountsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.accounts), count, timeoutMs);
  }

  async longPressAccountsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList));
  }

  async expectAccountsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), value, timeoutMs);
  }

  async expectAccountsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.accountsList), count, timeoutMs);
  }

  async longPressContacts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.contacts));
  }

  async expectContactsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), value, timeoutMs);
  }

  async expectContactsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), timeoutMs);
  }

  async expectContactsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), timeoutMs);
  }

  async expectContactsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), timeoutMs);
  }

  async expectContactsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), timeoutMs);
  }

  async expectContactsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), timeoutMs);
  }

  async expectContactsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.contacts), count, timeoutMs);
  }

  async longPressContactsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList));
  }

  async expectContactsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), value, timeoutMs);
  }

  async expectContactsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), timeoutMs);
  }

  async expectContactsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), timeoutMs);
  }

  async expectContactsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), timeoutMs);
  }

  async expectContactsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), timeoutMs);
  }

  async expectContactsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), timeoutMs);
  }

  async expectContactsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.contactsList), count, timeoutMs);
  }

  async longPressCampaigns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns));
  }

  async expectCampaignsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), value, timeoutMs);
  }

  async expectCampaignsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.campaigns), count, timeoutMs);
  }

  async longPressCampaignsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList));
  }

  async expectCampaignsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), value, timeoutMs);
  }

  async expectCampaignsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.campaignsList), count, timeoutMs);
  }

  async longPressDashboards(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards));
  }

  async expectDashboardsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), value, timeoutMs);
  }

  async expectDashboardsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.dashboards), count, timeoutMs);
  }

  async longPressDashboardsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList));
  }

  async expectDashboardsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), value, timeoutMs);
  }

  async expectDashboardsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.dashboardsList), count, timeoutMs);
  }

  async longPressReports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.reports));
  }

  async expectReportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.reports), value, timeoutMs);
  }

  async expectReportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.reports), timeoutMs);
  }

  async expectReportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.reports), timeoutMs);
  }

  async expectReportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.reports), timeoutMs);
  }

  async expectReportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.reports), timeoutMs);
  }

  async expectReportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.reports), timeoutMs);
  }

  async expectReportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.reports), count, timeoutMs);
  }

  async longPressReportsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList));
  }

  async expectReportsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), value, timeoutMs);
  }

  async expectReportsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), timeoutMs);
  }

  async expectReportsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), timeoutMs);
  }

  async expectReportsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), timeoutMs);
  }

  async expectReportsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), timeoutMs);
  }

  async expectReportsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), timeoutMs);
  }

  async expectReportsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.reportsList), count, timeoutMs);
  }

  async longPressMoreShowMoreNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), value, timeoutMs);
  }

  async expectMoreShowMoreNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.moreShowMoreNavigation), count, timeoutMs);
  }

  async longPressPersonalizeYourNavBar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar));
  }

  async expectPersonalizeYourNavBarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), value, timeoutMs);
  }

  async expectPersonalizeYourNavBarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.personalizeYourNavBar), count, timeoutMs);
  }

  async clickLeadsMyLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads));
  }

  async doubleClickLeadsMyLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads));
  }

  async longPressLeadsMyLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads));
  }

  async expectLeadsMyLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), value, timeoutMs);
  }

  async expectLeadsMyLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.leadsMyLeads), count, timeoutMs);
  }

  async clickMyLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads));
  }

  async doubleClickMyLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads));
  }

  async longPressMyLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads));
  }

  async expectMyLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), value, timeoutMs);
  }

  async expectMyLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), count, timeoutMs);
  }

  async longPressSelectAListView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView));
  }

  async expectSelectAListViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), value, timeoutMs);
  }

  async expectSelectAListViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.selectAListView), count, timeoutMs);
  }

  async longPressLeadViewSettings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings));
  }

  async expectLeadViewSettingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), value, timeoutMs);
  }

  async expectLeadViewSettingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.leadViewSettings), count, timeoutMs);
  }

  async longPressRefresh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.refresh));
  }

  async expectRefreshValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), value, timeoutMs);
  }

  async expectRefreshChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), count, timeoutMs);
  }

  async longPressInlineEditButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton));
  }

  async expectInlineEditButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), value, timeoutMs);
  }

  async expectInlineEditButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), count, timeoutMs);
  }

  async longPressNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.new));
  }

  async expectNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.new), value, timeoutMs);
  }

  async expectNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.new), count, timeoutMs);
  }

  async longPressPipelineInspectionToListView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView));
  }

  async expectPipelineInspectionToListViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), value, timeoutMs);
  }

  async expectPipelineInspectionToListViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), count, timeoutMs);
  }

  async longPressTimePeriodFilterThis(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis));
  }

  async expectTimePeriodFilterThisValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), value, timeoutMs);
  }

  async expectTimePeriodFilterThisChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.timePeriodFilterThis), count, timeoutMs);
  }

  async longPressLeadOwnerFilterMe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe));
  }

  async expectLeadOwnerFilterMeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), value, timeoutMs);
  }

  async expectLeadOwnerFilterMeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.leadOwnerFilterMe), count, timeoutMs);
  }

  async longPressImportantLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads));
  }

  async expectImportantLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), value, timeoutMs);
  }

  async expectImportantLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.importantLeads), count, timeoutMs);
  }

  async clickApplyImportantLeadsFilter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter));
  }

  async doubleClickApplyImportantLeadsFilter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter));
  }

  async longPressApplyImportantLeadsFilter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter));
  }

  async expectApplyImportantLeadsFilterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), value, timeoutMs);
  }

  async expectApplyImportantLeadsFilterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.applyImportantLeadsFilter), count, timeoutMs);
  }

  async clickPriorityRecordFilterButtonTooltip(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip));
  }

  async doubleClickPriorityRecordFilterButtonTooltip(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip));
  }

  async longPressPriorityRecordFilterButtonTooltip(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip));
  }

  async expectPriorityRecordFilterButtonTooltipValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), value, timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.priorityRecordFilterButtonTooltip), count, timeoutMs);
  }

  async longPressShowFilters(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters));
  }

  async expectShowFiltersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), value, timeoutMs);
  }

  async expectShowFiltersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.showFilters), count, timeoutMs);
  }

  async longPressTotalLeads0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0));
  }

  async expectTotalLeads0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), value, timeoutMs);
  }

  async expectTotalLeads0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.totalLeads0), count, timeoutMs);
  }

  async longPressNoActivity0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0));
  }

  async expectNoActivity0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), value, timeoutMs);
  }

  async expectNoActivity0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.noActivity0), count, timeoutMs);
  }

  async longPressHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.help));
  }

  async expectHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.help), value, timeoutMs);
  }

  async expectHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.help), timeoutMs);
  }

  async expectHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.help), timeoutMs);
  }

  async expectHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.help), timeoutMs);
  }

  async expectHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.help), count, timeoutMs);
  }

  async longPressIdle0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.idle0));
  }

  async expectIdle0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), value, timeoutMs);
  }

  async expectIdle0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), timeoutMs);
  }

  async expectIdle0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), timeoutMs);
  }

  async expectIdle0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), timeoutMs);
  }

  async expectIdle0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.idle0), count, timeoutMs);
  }

  async longPressHelpButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton));
  }

  async expectHelpButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), value, timeoutMs);
  }

  async expectHelpButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton), count, timeoutMs);
  }

  async longPressNoUpcoming0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0));
  }

  async expectNoUpcoming0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), value, timeoutMs);
  }

  async expectNoUpcoming0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.noUpcoming0), count, timeoutMs);
  }

  async longPressHelpButton2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2));
  }

  async expectHelpButton2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), value, timeoutMs);
  }

  async expectHelpButton2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton2), count, timeoutMs);
  }

  async longPressOverdue0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0));
  }

  async expectOverdue0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), value, timeoutMs);
  }

  async expectOverdue0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.overdue0), count, timeoutMs);
  }

  async longPressDueToday0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0));
  }

  async expectDueToday0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), value, timeoutMs);
  }

  async expectDueToday0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.dueToday0), count, timeoutMs);
  }

  async longPressUpcoming0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0));
  }

  async expectUpcoming0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), value, timeoutMs);
  }

  async expectUpcoming0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.upcoming0), count, timeoutMs);
  }

  async longPressHelpButton3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3));
  }

  async expectHelpButton3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), value, timeoutMs);
  }

  async expectHelpButton3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.helpButton3), count, timeoutMs);
  }

  async longPressMassChangeStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus));
  }

  async expectMassChangeStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), value, timeoutMs);
  }

  async expectMassChangeStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), count, timeoutMs);
  }

  async longPressMassChangeOwner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner));
  }

  async expectMassChangeOwnerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), value, timeoutMs);
  }

  async expectMassChangeOwnerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), count, timeoutMs);
  }

  async longPressSendListEmailAction(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction));
  }

  async expectSendListEmailActionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), value, timeoutMs);
  }

  async expectSendListEmailActionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), count, timeoutMs);
  }

  async longPressMassAssignRecordLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel));
  }

  async expectMassAssignRecordLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), value, timeoutMs);
  }

  async expectMassAssignRecordLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), count, timeoutMs);
  }

  async clickGetYourLeadPipeline(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline));
  }

  async doubleClickGetYourLeadPipeline(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline));
  }

  async longPressGetYourLeadPipeline(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline));
  }

  async expectGetYourLeadPipelineValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), value, timeoutMs);
  }

  async expectGetYourLeadPipelineEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.getYourLeadPipeline), count, timeoutMs);
  }

  async clickWhenThereAreLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads));
  }

  async doubleClickWhenThereAreLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads));
  }

  async longPressWhenThereAreLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads));
  }

  async expectWhenThereAreLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), value, timeoutMs);
  }

  async expectWhenThereAreLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.whenThereAreLeads), count, timeoutMs);
  }

  async longPressToDoList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList));
  }

  async expectToDoListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), value, timeoutMs);
  }

  async expectToDoListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), timeoutMs);
  }

  async expectToDoListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), timeoutMs);
  }

  async expectToDoListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), timeoutMs);
  }

  async expectToDoListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.toDoList), count, timeoutMs);
  }

}
