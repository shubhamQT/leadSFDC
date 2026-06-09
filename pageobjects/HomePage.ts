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

export class HomePage {
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
    sellerHomeGoodEveningShubham: { strategy: 'text' as const, value: 'Seller HomeGood evening, shubham. Let\'s get', actionKind: 'text' as const },
    goodEveningShubhamLetS: { strategy: 'text' as const, value: 'Good evening, shubham. Let\'s get selling!', actionKind: 'text' as const },
    closeDeals: { strategy: 'text' as const, value: 'Close Deals', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'text' as const },
    opportunitiesOwnedByMe: { strategy: 'text' as const, value: 'Opportunities owned by me and closing this quarter', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '$0', shadowHost: 'runtime_sales_seller_home-donut-chart', actionKind: 'text' as const },
    totalPipeline: { strategy: 'text' as const, value: 'Total Pipeline', shadowHost: 'runtime_sales_seller_home-donut-chart', actionKind: 'text' as const },
    Open: { strategy: 'text' as const, value: '$0 Open', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    Won: { strategy: 'text' as const, value: '$0 Won', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    Lost: { strategy: 'text' as const, value: '$0 Lost', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    viewOpportunitiesOpensIn: { strategy: 'label' as const, value: 'View Opportunities (opens in new tab)', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'link' as const },
    planMyAccounts: { strategy: 'text' as const, value: 'Plan My Accounts', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'text' as const },
    accountsOwnedByMe: { strategy: 'text' as const, value: 'Accounts owned by me', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'text' as const },
    UpcomingActivity: { strategy: 'text' as const, value: '0 Upcoming Activity', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    PastActivity: { strategy: 'text' as const, value: '0 Past Activity', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    NoActivity: { strategy: 'text' as const, value: '0 No Activity', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    viewAccountsOpensIn: { strategy: 'label' as const, value: 'View Accounts (opens in new tab)', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'link' as const },
    growRelationships: { strategy: 'text' as const, value: 'Grow Relationships', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'text' as const },
    contactsOwnedByMe: { strategy: 'text' as const, value: 'Contacts owned by me and created in the last 90', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'text' as const },
    UpcomingActivity2: { strategy: 'text' as const, value: '0 Upcoming Activity', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    PastActivity2: { strategy: 'text' as const, value: '0 Past Activity', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    NoActivity2: { strategy: 'text' as const, value: '0 No Activity', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    viewContactsOpensIn: { strategy: 'label' as const, value: 'View Contacts (opens in new tab)', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'link' as const },
    buildPipeline: { strategy: 'text' as const, value: 'Build Pipeline', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'text' as const },
    leadsOwnedByMe: { strategy: 'text' as const, value: 'Leads owned by me and created in the last 30 days', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'text' as const },
    UpcomingActivity3: { strategy: 'text' as const, value: '0 Upcoming Activity', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    PastActivity3: { strategy: 'text' as const, value: '0 Past Activity', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    NoActivity3: { strategy: 'text' as const, value: '0 No Activity', shadowHost: 'runtime_sales_seller_home-kpi-item', actionKind: 'text' as const },
    viewLeadsOpensIn: { strategy: 'label' as const, value: 'View Leads (opens in new tab)', shadowHost: 'runtime_sales_seller_home-kpi-preview', actionKind: 'link' as const },
    myGoals: { strategy: 'text' as const, value: 'My Goals', shadowHost: 'runtime_sales_seller_home-my-performance-metrics-card', actionKind: 'text' as const },
    editMyGoals: { strategy: 'label' as const, value: 'Edit my goals', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    setPersonalWeeklyOr: { strategy: 'text' as const, value: 'Set personal weekly or monthly goals for emails,', shadowHost: 'runtime_sales_seller_home-my-performance-metrics-card', actionKind: 'text' as const },
    setGoals: { strategy: 'css' as const, value: '[title="Set goals"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    input161: { strategy: 'placeholder' as const, value: 'Number of meetings', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    input163: { strategy: 'placeholder' as const, value: 'Number of calls', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    input165: { strategy: 'placeholder' as const, value: 'Number of emails', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    timeInterval: { strategy: 'css' as const, value: '[name="timeInterval"]', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    homeCardHeader6470: { strategy: 'css' as const, value: '#homeCardHeader_647:0', actionKind: 'text' as const },
    viewCalendar: { strategy: 'label' as const, value: 'View Calendar', actionKind: 'link' as const },
    homeCardHeader7120: { strategy: 'css' as const, value: '#homeCardHeader_712:0', actionKind: 'text' as const },
    selectAViewOf: { strategy: 'role' as const, value: 'Select a view of your tasks', role: 'button', actionKind: 'button' as const },
    viewAllTasks: { strategy: 'label' as const, value: 'View All Tasks', actionKind: 'link' as const },
    homeCardHeader7970: { strategy: 'css' as const, value: '#homeCardHeader_797:0', actionKind: 'text' as const },
    youHavenTViewedAny: { strategy: 'text' as const, value: 'You haven\'t viewed any records recently.', actionKind: 'text' as const },
    salesblazer: { strategy: 'text' as const, value: 'Salesblazer', shadowHost: 'runtime_sales_seller_home-salesblazer-card', actionKind: 'text' as const },
    articleLink: { strategy: 'css' as const, value: '[title="Article Link"]', shadowHost: 'forcehelp-link', actionKind: 'link' as const },
    MinuteRead: { strategy: 'text' as const, value: '8 minute read', shadowHost: 'runtime_sales_seller_home-salesblazer-card', actionKind: 'text' as const },
    joinTheCommunityLinkNewWindowAssistiveTextLabel: { strategy: 'role' as const, value: 'Join the Community linkNewWindowAssistiveTextLabel', role: 'button', shadowHost: 'runtime_sales_seller_home-salesblazer-card', actionKind: 'link' as const },
    toDoList: { strategy: 'role' as const, value: 'To Do List', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickSkipToNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.skipToNavigation));
  }

  async doubleClickSkipToNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.skipToNavigation));
  }

  async expectSkipToNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.skipToNavigation), expected, timeoutMs);
  }

  async expectSkipToNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.skipToNavigation), substring, timeoutMs);
  }

  async scrollSkipToNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.skipToNavigation));
  }

  async clickSkipToMainContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.skipToMainContent));
  }

  async doubleClickSkipToMainContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.skipToMainContent));
  }

  async expectSkipToMainContentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.skipToMainContent), expected, timeoutMs);
  }

  async expectSkipToMainContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.skipToMainContent), substring, timeoutMs);
  }

  async scrollSkipToMainContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.skipToMainContent));
  }

  async clickTogglePanel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.togglePanel));
  }

  async doubleClickTogglePanel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.togglePanel));
  }

  async expectTogglePanelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.togglePanel), expected, timeoutMs);
  }

  async expectTogglePanelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.togglePanel), substring, timeoutMs);
  }

  async scrollTogglePanelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.togglePanel));
  }

  async getInnerTextDeveloperEdition(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.developerEdition));
  }

  async expectDeveloperEditionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.developerEdition), expected, timeoutMs);
  }

  async expectDeveloperEditionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.developerEdition), substring, timeoutMs);
  }

  async scrollDeveloperEditionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.developerEdition));
  }

  async clickShowMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showMenu));
  }

  async doubleClickShowMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showMenu));
  }

  async expectShowMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showMenu), expected, timeoutMs);
  }

  async expectShowMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showMenu), substring, timeoutMs);
  }

  async scrollShowMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showMenu));
  }

  async clickSearch(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async doubleClickSearch(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.search), substring, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async getInnerTextThisItemDoesnTSupport(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupport));
  }

  async expectThisItemDoesnTSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), expected, timeoutMs);
  }

  async expectThisItemDoesnTSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), substring, timeoutMs);
  }

  async scrollThisItemDoesnTSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupport));
  }

  async clickThisItemDoesnTSupportButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton));
  }

  async doubleClickThisItemDoesnTSupportButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton));
  }

  async expectThisItemDoesnTSupportButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), expected, timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), substring, timeoutMs);
  }

  async scrollThisItemDoesnTSupportButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton));
  }

  async clickFavoritesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.favoritesList));
  }

  async doubleClickFavoritesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.favoritesList));
  }

  async expectFavoritesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.favoritesList), expected, timeoutMs);
  }

  async expectFavoritesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.favoritesList), substring, timeoutMs);
  }

  async scrollFavoritesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.favoritesList));
  }

  async clickGlobalActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.globalActions));
  }

  async doubleClickGlobalActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.globalActions));
  }

  async expectGlobalActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.globalActions), expected, timeoutMs);
  }

  async expectGlobalActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.globalActions), substring, timeoutMs);
  }

  async scrollGlobalActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.globalActions));
  }

  async clickGuidanceCenter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.guidanceCenter));
  }

  async doubleClickGuidanceCenter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.guidanceCenter));
  }

  async expectGuidanceCenterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.guidanceCenter), expected, timeoutMs);
  }

  async expectGuidanceCenterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.guidanceCenter), substring, timeoutMs);
  }

  async scrollGuidanceCenterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.guidanceCenter));
  }

  async clickSalesforceHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.salesforceHelp));
  }

  async doubleClickSalesforceHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.salesforceHelp));
  }

  async expectSalesforceHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.salesforceHelp), expected, timeoutMs);
  }

  async expectSalesforceHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.salesforceHelp), substring, timeoutMs);
  }

  async scrollSalesforceHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.salesforceHelp));
  }

  async clickSetup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.setup));
  }

  async doubleClickSetup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.setup));
  }

  async expectSetupVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.setup), timeoutMs);
  }

  async expectSetupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.setup), timeoutMs);
  }

  async expectSetupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.setup), expected, timeoutMs);
  }

  async expectSetupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.setup), substring, timeoutMs);
  }

  async scrollSetupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.setup));
  }

  async clickNotifications(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.notifications));
  }

  async doubleClickNotifications(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.notifications));
  }

  async expectNotificationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.notifications), timeoutMs);
  }

  async expectNotificationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.notifications), timeoutMs);
  }

  async expectNotificationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.notifications), timeoutMs);
  }

  async expectNotificationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.notifications), timeoutMs);
  }

  async expectNotificationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.notifications), expected, timeoutMs);
  }

  async expectNotificationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.notifications), substring, timeoutMs);
  }

  async scrollNotificationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.notifications));
  }

  async clickViewProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.viewProfile));
  }

  async doubleClickViewProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.viewProfile));
  }

  async expectViewProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.viewProfile), expected, timeoutMs);
  }

  async expectViewProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.viewProfile), substring, timeoutMs);
  }

  async scrollViewProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.viewProfile));
  }

  async clickAppLauncher(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.appLauncher));
  }

  async doubleClickAppLauncher(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.appLauncher));
  }

  async expectAppLauncherVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.appLauncher), expected, timeoutMs);
  }

  async expectAppLauncherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.appLauncher), substring, timeoutMs);
  }

  async scrollAppLauncherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.appLauncher));
  }

  async getInnerTextSales(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.sales));
  }

  async expectSalesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sales), expected, timeoutMs);
  }

  async expectSalesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sales), substring, timeoutMs);
  }

  async scrollSalesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sales));
  }

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.home));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.home), substring, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.home));
  }

  async clickOpportunities(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async doubleClickOpportunities(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async expectOpportunitiesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.opportunities), expected, timeoutMs);
  }

  async expectOpportunitiesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.opportunities), substring, timeoutMs);
  }

  async scrollOpportunitiesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async clickOpportunitiesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.opportunitiesList));
  }

  async doubleClickOpportunitiesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.opportunitiesList));
  }

  async expectOpportunitiesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.opportunitiesList), expected, timeoutMs);
  }

  async expectOpportunitiesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.opportunitiesList), substring, timeoutMs);
  }

  async scrollOpportunitiesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.opportunitiesList));
  }

  async clickLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.leads));
  }

  async doubleClickLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.leads));
  }

  async expectLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.leads), expected, timeoutMs);
  }

  async expectLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.leads), substring, timeoutMs);
  }

  async scrollLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.leads));
  }

  async clickLeadsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.leadsList));
  }

  async doubleClickLeadsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.leadsList));
  }

  async expectLeadsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.leadsList), timeoutMs);
  }

  async expectLeadsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.leadsList), timeoutMs);
  }

  async expectLeadsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.leadsList), expected, timeoutMs);
  }

  async expectLeadsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.leadsList), substring, timeoutMs);
  }

  async scrollLeadsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.leadsList));
  }

  async clickTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async doubleClickTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async expectTasksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.tasks), expected, timeoutMs);
  }

  async expectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.tasks), substring, timeoutMs);
  }

  async scrollTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async clickTasksList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.tasksList));
  }

  async doubleClickTasksList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.tasksList));
  }

  async expectTasksListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.tasksList), timeoutMs);
  }

  async expectTasksListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.tasksList), timeoutMs);
  }

  async expectTasksListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.tasksList), expected, timeoutMs);
  }

  async expectTasksListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.tasksList), substring, timeoutMs);
  }

  async scrollTasksListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.tasksList));
  }

  async clickFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.files));
  }

  async doubleClickFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.files));
  }

  async expectFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.files), expected, timeoutMs);
  }

  async expectFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.files), substring, timeoutMs);
  }

  async scrollFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.files));
  }

  async clickFilesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.filesList));
  }

  async doubleClickFilesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.filesList));
  }

  async expectFilesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.filesList), timeoutMs);
  }

  async expectFilesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.filesList), timeoutMs);
  }

  async expectFilesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.filesList), expected, timeoutMs);
  }

  async expectFilesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.filesList), substring, timeoutMs);
  }

  async scrollFilesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.filesList));
  }

  async clickAccounts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async doubleClickAccounts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async expectAccountsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.accounts), expected, timeoutMs);
  }

  async expectAccountsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.accounts), substring, timeoutMs);
  }

  async scrollAccountsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async clickAccountsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.accountsList));
  }

  async doubleClickAccountsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.accountsList));
  }

  async expectAccountsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.accountsList), expected, timeoutMs);
  }

  async expectAccountsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.accountsList), substring, timeoutMs);
  }

  async scrollAccountsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.accountsList));
  }

  async clickContacts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async doubleClickContacts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async expectContactsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.contacts), expected, timeoutMs);
  }

  async expectContactsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.contacts), substring, timeoutMs);
  }

  async scrollContactsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async clickContactsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.contactsList));
  }

  async doubleClickContactsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.contactsList));
  }

  async expectContactsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.contactsList), expected, timeoutMs);
  }

  async expectContactsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.contactsList), substring, timeoutMs);
  }

  async scrollContactsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.contactsList));
  }

  async clickCampaigns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async doubleClickCampaigns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async expectCampaignsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.campaigns), expected, timeoutMs);
  }

  async expectCampaignsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.campaigns), substring, timeoutMs);
  }

  async scrollCampaignsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async clickCampaignsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.campaignsList));
  }

  async doubleClickCampaignsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.campaignsList));
  }

  async expectCampaignsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.campaignsList), expected, timeoutMs);
  }

  async expectCampaignsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.campaignsList), substring, timeoutMs);
  }

  async scrollCampaignsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.campaignsList));
  }

  async clickDashboards(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.dashboards));
  }

  async doubleClickDashboards(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.dashboards));
  }

  async expectDashboardsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.dashboards), expected, timeoutMs);
  }

  async expectDashboardsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.dashboards), substring, timeoutMs);
  }

  async scrollDashboardsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.dashboards));
  }

  async clickDashboardsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.dashboardsList));
  }

  async doubleClickDashboardsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.dashboardsList));
  }

  async expectDashboardsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.dashboardsList), expected, timeoutMs);
  }

  async expectDashboardsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.dashboardsList), substring, timeoutMs);
  }

  async scrollDashboardsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.dashboardsList));
  }

  async clickReports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.reports));
  }

  async doubleClickReports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.reports));
  }

  async expectReportsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.reports), expected, timeoutMs);
  }

  async expectReportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.reports), substring, timeoutMs);
  }

  async scrollReportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.reports));
  }

  async clickReportsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.reportsList));
  }

  async doubleClickReportsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.reportsList));
  }

  async expectReportsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.reportsList), expected, timeoutMs);
  }

  async expectReportsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.reportsList), substring, timeoutMs);
  }

  async scrollReportsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.reportsList));
  }

  async clickMoreShowMoreNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation));
  }

  async doubleClickMoreShowMoreNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.moreShowMoreNavigation), expected, timeoutMs);
  }

  async expectMoreShowMoreNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.moreShowMoreNavigation), substring, timeoutMs);
  }

  async scrollMoreShowMoreNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation));
  }

  async clickPersonalizeYourNavBar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.personalizeYourNavBar));
  }

  async doubleClickPersonalizeYourNavBar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.personalizeYourNavBar));
  }

  async expectPersonalizeYourNavBarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.personalizeYourNavBar), expected, timeoutMs);
  }

  async expectPersonalizeYourNavBarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.personalizeYourNavBar), substring, timeoutMs);
  }

  async scrollPersonalizeYourNavBarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.personalizeYourNavBar));
  }

  async getInnerTextSellerHomeGoodEveningShubham(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham));
  }

  async expectSellerHomeGoodEveningShubhamVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), timeoutMs);
  }

  async expectSellerHomeGoodEveningShubhamHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), timeoutMs);
  }

  async expectSellerHomeGoodEveningShubhamText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), expected, timeoutMs);
  }

  async expectSellerHomeGoodEveningShubhamContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), substring, timeoutMs);
  }

  async scrollSellerHomeGoodEveningShubhamIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham));
  }

  async getInnerTextGoodEveningShubhamLetS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.goodEveningShubhamLetS));
  }

  async expectGoodEveningShubhamLetSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), timeoutMs);
  }

  async expectGoodEveningShubhamLetSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), timeoutMs);
  }

  async expectGoodEveningShubhamLetSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), expected, timeoutMs);
  }

  async expectGoodEveningShubhamLetSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), substring, timeoutMs);
  }

  async scrollGoodEveningShubhamLetSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.goodEveningShubhamLetS));
  }

  async getInnerTextCloseDeals(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.closeDeals));
  }

  async expectCloseDealsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.closeDeals), timeoutMs);
  }

  async expectCloseDealsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.closeDeals), timeoutMs);
  }

  async expectCloseDealsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.closeDeals), expected, timeoutMs);
  }

  async expectCloseDealsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.closeDeals), substring, timeoutMs);
  }

  async scrollCloseDealsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.closeDeals));
  }

  async getInnerTextOpportunitiesOwnedByMe(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe));
  }

  async expectOpportunitiesOwnedByMeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), timeoutMs);
  }

  async expectOpportunitiesOwnedByMeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), timeoutMs);
  }

  async expectOpportunitiesOwnedByMeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), expected, timeoutMs);
  }

  async expectOpportunitiesOwnedByMeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), substring, timeoutMs);
  }

  async scrollOpportunitiesOwnedByMeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.element));
  }

  async getInnerTextTotalPipeline(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.totalPipeline));
  }

  async expectTotalPipelineVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.totalPipeline), timeoutMs);
  }

  async expectTotalPipelineHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.totalPipeline), timeoutMs);
  }

  async expectTotalPipelineText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.totalPipeline), expected, timeoutMs);
  }

  async expectTotalPipelineContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.totalPipeline), substring, timeoutMs);
  }

  async scrollTotalPipelineIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.totalPipeline));
  }

  async getInnerTextOpen(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.Open));
  }

  async expectOpenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.Open), timeoutMs);
  }

  async expectOpenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.Open), timeoutMs);
  }

  async expectOpenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.Open), expected, timeoutMs);
  }

  async expectOpenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.Open), substring, timeoutMs);
  }

  async scrollOpenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.Open));
  }

  async getInnerTextWon(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.Won));
  }

  async expectWonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.Won), timeoutMs);
  }

  async expectWonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.Won), timeoutMs);
  }

  async expectWonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.Won), expected, timeoutMs);
  }

  async expectWonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.Won), substring, timeoutMs);
  }

  async scrollWonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.Won));
  }

  async getInnerTextLost(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.Lost));
  }

  async expectLostVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.Lost), timeoutMs);
  }

  async expectLostHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.Lost), timeoutMs);
  }

  async expectLostText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.Lost), expected, timeoutMs);
  }

  async expectLostContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.Lost), substring, timeoutMs);
  }

  async scrollLostIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.Lost));
  }

  async clickViewOpportunitiesOpensIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn));
  }

  async doubleClickViewOpportunitiesOpensIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn));
  }

  async expectViewOpportunitiesOpensInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), timeoutMs);
  }

  async expectViewOpportunitiesOpensInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), timeoutMs);
  }

  async expectViewOpportunitiesOpensInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), expected, timeoutMs);
  }

  async expectViewOpportunitiesOpensInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), substring, timeoutMs);
  }

  async scrollViewOpportunitiesOpensInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn));
  }

  async getInnerTextPlanMyAccounts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.planMyAccounts));
  }

  async expectPlanMyAccountsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.planMyAccounts), timeoutMs);
  }

  async expectPlanMyAccountsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.planMyAccounts), timeoutMs);
  }

  async expectPlanMyAccountsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.planMyAccounts), expected, timeoutMs);
  }

  async expectPlanMyAccountsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.planMyAccounts), substring, timeoutMs);
  }

  async scrollPlanMyAccountsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.planMyAccounts));
  }

  async getInnerTextAccountsOwnedByMe(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.accountsOwnedByMe));
  }

  async expectAccountsOwnedByMeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.accountsOwnedByMe), timeoutMs);
  }

  async expectAccountsOwnedByMeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.accountsOwnedByMe), timeoutMs);
  }

  async expectAccountsOwnedByMeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.accountsOwnedByMe), expected, timeoutMs);
  }

  async expectAccountsOwnedByMeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.accountsOwnedByMe), substring, timeoutMs);
  }

  async scrollAccountsOwnedByMeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.accountsOwnedByMe));
  }

  async getInnerTextUpcomingActivity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity));
  }

  async expectUpcomingActivityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.UpcomingActivity), timeoutMs);
  }

  async expectUpcomingActivityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.UpcomingActivity), timeoutMs);
  }

  async expectUpcomingActivityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.UpcomingActivity), expected, timeoutMs);
  }

  async expectUpcomingActivityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.UpcomingActivity), substring, timeoutMs);
  }

  async scrollUpcomingActivityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity));
  }

  async getInnerTextPastActivity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.PastActivity));
  }

  async expectPastActivityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.PastActivity), timeoutMs);
  }

  async expectPastActivityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.PastActivity), timeoutMs);
  }

  async expectPastActivityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.PastActivity), expected, timeoutMs);
  }

  async expectPastActivityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.PastActivity), substring, timeoutMs);
  }

  async scrollPastActivityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.PastActivity));
  }

  async getInnerTextNoActivity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.NoActivity));
  }

  async expectNoActivityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.NoActivity), timeoutMs);
  }

  async expectNoActivityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.NoActivity), timeoutMs);
  }

  async expectNoActivityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.NoActivity), expected, timeoutMs);
  }

  async expectNoActivityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.NoActivity), substring, timeoutMs);
  }

  async scrollNoActivityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.NoActivity));
  }

  async clickViewAccountsOpensIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.viewAccountsOpensIn));
  }

  async doubleClickViewAccountsOpensIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.viewAccountsOpensIn));
  }

  async expectViewAccountsOpensInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.viewAccountsOpensIn), timeoutMs);
  }

  async expectViewAccountsOpensInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.viewAccountsOpensIn), timeoutMs);
  }

  async expectViewAccountsOpensInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.viewAccountsOpensIn), expected, timeoutMs);
  }

  async expectViewAccountsOpensInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.viewAccountsOpensIn), substring, timeoutMs);
  }

  async scrollViewAccountsOpensInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.viewAccountsOpensIn));
  }

  async getInnerTextGrowRelationships(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.growRelationships));
  }

  async expectGrowRelationshipsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.growRelationships), timeoutMs);
  }

  async expectGrowRelationshipsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.growRelationships), timeoutMs);
  }

  async expectGrowRelationshipsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.growRelationships), expected, timeoutMs);
  }

  async expectGrowRelationshipsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.growRelationships), substring, timeoutMs);
  }

  async scrollGrowRelationshipsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.growRelationships));
  }

  async getInnerTextContactsOwnedByMe(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.contactsOwnedByMe));
  }

  async expectContactsOwnedByMeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.contactsOwnedByMe), timeoutMs);
  }

  async expectContactsOwnedByMeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.contactsOwnedByMe), timeoutMs);
  }

  async expectContactsOwnedByMeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.contactsOwnedByMe), expected, timeoutMs);
  }

  async expectContactsOwnedByMeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.contactsOwnedByMe), substring, timeoutMs);
  }

  async scrollContactsOwnedByMeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.contactsOwnedByMe));
  }

  async getInnerTextUpcomingActivity2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity2));
  }

  async expectUpcomingActivity2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.UpcomingActivity2), timeoutMs);
  }

  async expectUpcomingActivity2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.UpcomingActivity2), timeoutMs);
  }

  async expectUpcomingActivity2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.UpcomingActivity2), expected, timeoutMs);
  }

  async expectUpcomingActivity2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.UpcomingActivity2), substring, timeoutMs);
  }

  async scrollUpcomingActivity2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity2));
  }

  async getInnerTextPastActivity2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.PastActivity2));
  }

  async expectPastActivity2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.PastActivity2), timeoutMs);
  }

  async expectPastActivity2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.PastActivity2), timeoutMs);
  }

  async expectPastActivity2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.PastActivity2), expected, timeoutMs);
  }

  async expectPastActivity2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.PastActivity2), substring, timeoutMs);
  }

  async scrollPastActivity2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.PastActivity2));
  }

  async getInnerTextNoActivity2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.NoActivity2));
  }

  async expectNoActivity2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.NoActivity2), timeoutMs);
  }

  async expectNoActivity2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.NoActivity2), timeoutMs);
  }

  async expectNoActivity2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.NoActivity2), expected, timeoutMs);
  }

  async expectNoActivity2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.NoActivity2), substring, timeoutMs);
  }

  async scrollNoActivity2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.NoActivity2));
  }

  async clickViewContactsOpensIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.viewContactsOpensIn));
  }

  async doubleClickViewContactsOpensIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.viewContactsOpensIn));
  }

  async expectViewContactsOpensInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.viewContactsOpensIn), timeoutMs);
  }

  async expectViewContactsOpensInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.viewContactsOpensIn), timeoutMs);
  }

  async expectViewContactsOpensInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.viewContactsOpensIn), expected, timeoutMs);
  }

  async expectViewContactsOpensInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.viewContactsOpensIn), substring, timeoutMs);
  }

  async scrollViewContactsOpensInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.viewContactsOpensIn));
  }

  async getInnerTextBuildPipeline(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.buildPipeline));
  }

  async expectBuildPipelineVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.buildPipeline), timeoutMs);
  }

  async expectBuildPipelineHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.buildPipeline), timeoutMs);
  }

  async expectBuildPipelineText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.buildPipeline), expected, timeoutMs);
  }

  async expectBuildPipelineContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.buildPipeline), substring, timeoutMs);
  }

  async scrollBuildPipelineIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.buildPipeline));
  }

  async getInnerTextLeadsOwnedByMe(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.leadsOwnedByMe));
  }

  async expectLeadsOwnedByMeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.leadsOwnedByMe), timeoutMs);
  }

  async expectLeadsOwnedByMeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.leadsOwnedByMe), timeoutMs);
  }

  async expectLeadsOwnedByMeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.leadsOwnedByMe), expected, timeoutMs);
  }

  async expectLeadsOwnedByMeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.leadsOwnedByMe), substring, timeoutMs);
  }

  async scrollLeadsOwnedByMeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.leadsOwnedByMe));
  }

  async getInnerTextUpcomingActivity3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity3));
  }

  async expectUpcomingActivity3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.UpcomingActivity3), timeoutMs);
  }

  async expectUpcomingActivity3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.UpcomingActivity3), timeoutMs);
  }

  async expectUpcomingActivity3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.UpcomingActivity3), expected, timeoutMs);
  }

  async expectUpcomingActivity3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.UpcomingActivity3), substring, timeoutMs);
  }

  async scrollUpcomingActivity3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity3));
  }

  async getInnerTextPastActivity3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.PastActivity3));
  }

  async expectPastActivity3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.PastActivity3), timeoutMs);
  }

  async expectPastActivity3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.PastActivity3), timeoutMs);
  }

  async expectPastActivity3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.PastActivity3), expected, timeoutMs);
  }

  async expectPastActivity3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.PastActivity3), substring, timeoutMs);
  }

  async scrollPastActivity3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.PastActivity3));
  }

  async getInnerTextNoActivity3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.NoActivity3));
  }

  async expectNoActivity3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.NoActivity3), timeoutMs);
  }

  async expectNoActivity3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.NoActivity3), timeoutMs);
  }

  async expectNoActivity3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.NoActivity3), expected, timeoutMs);
  }

  async expectNoActivity3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.NoActivity3), substring, timeoutMs);
  }

  async scrollNoActivity3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.NoActivity3));
  }

  async clickViewLeadsOpensIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.viewLeadsOpensIn));
  }

  async doubleClickViewLeadsOpensIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.viewLeadsOpensIn));
  }

  async expectViewLeadsOpensInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.viewLeadsOpensIn), timeoutMs);
  }

  async expectViewLeadsOpensInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.viewLeadsOpensIn), timeoutMs);
  }

  async expectViewLeadsOpensInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.viewLeadsOpensIn), expected, timeoutMs);
  }

  async expectViewLeadsOpensInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.viewLeadsOpensIn), substring, timeoutMs);
  }

  async scrollViewLeadsOpensInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.viewLeadsOpensIn));
  }

  async getInnerTextMyGoals(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.myGoals));
  }

  async expectMyGoalsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.myGoals), timeoutMs);
  }

  async expectMyGoalsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.myGoals), timeoutMs);
  }

  async expectMyGoalsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.myGoals), expected, timeoutMs);
  }

  async expectMyGoalsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.myGoals), substring, timeoutMs);
  }

  async scrollMyGoalsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.myGoals));
  }

  async clickEditMyGoals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.editMyGoals));
  }

  async doubleClickEditMyGoals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.editMyGoals));
  }

  async expectEditMyGoalsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.editMyGoals), timeoutMs);
  }

  async expectEditMyGoalsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.editMyGoals), timeoutMs);
  }

  async expectEditMyGoalsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.editMyGoals), timeoutMs);
  }

  async expectEditMyGoalsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.editMyGoals), timeoutMs);
  }

  async expectEditMyGoalsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.editMyGoals), expected, timeoutMs);
  }

  async expectEditMyGoalsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.editMyGoals), substring, timeoutMs);
  }

  async scrollEditMyGoalsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.editMyGoals));
  }

  async getInnerTextSetPersonalWeeklyOr(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.setPersonalWeeklyOr));
  }

  async expectSetPersonalWeeklyOrVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), timeoutMs);
  }

  async expectSetPersonalWeeklyOrHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), timeoutMs);
  }

  async expectSetPersonalWeeklyOrText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), expected, timeoutMs);
  }

  async expectSetPersonalWeeklyOrContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), substring, timeoutMs);
  }

  async scrollSetPersonalWeeklyOrIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.setPersonalWeeklyOr));
  }

  async clickSetGoals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.setGoals));
  }

  async doubleClickSetGoals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.setGoals));
  }

  async expectSetGoalsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.setGoals), timeoutMs);
  }

  async expectSetGoalsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.setGoals), timeoutMs);
  }

  async expectSetGoalsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.setGoals), timeoutMs);
  }

  async expectSetGoalsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.setGoals), timeoutMs);
  }

  async expectSetGoalsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.setGoals), expected, timeoutMs);
  }

  async expectSetGoalsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.setGoals), substring, timeoutMs);
  }

  async scrollSetGoalsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.setGoals));
  }

  async fillInput161(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.input161), value);
  }

  async clearInput161(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.input161));
  }

  async typeTextInput161(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.input161), value);
  }

  async expectInput161Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.input161), timeoutMs);
  }

  async expectInput161Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.input161), timeoutMs);
  }

  async expectInput161Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.input161), timeoutMs);
  }

  async expectInput161Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.input161), timeoutMs);
  }

  async expectInput161Value(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.input161), expected, timeoutMs);
  }

  async expectInput161Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.input161), timeoutMs);
  }

  async scrollInput161IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.input161));
  }

  async fillInput163(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.input163), value);
  }

  async clearInput163(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.input163));
  }

  async typeTextInput163(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.input163), value);
  }

  async expectInput163Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.input163), timeoutMs);
  }

  async expectInput163Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.input163), timeoutMs);
  }

  async expectInput163Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.input163), timeoutMs);
  }

  async expectInput163Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.input163), timeoutMs);
  }

  async expectInput163Value(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.input163), expected, timeoutMs);
  }

  async expectInput163Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.input163), timeoutMs);
  }

  async scrollInput163IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.input163));
  }

  async fillInput165(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.input165), value);
  }

  async clearInput165(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.input165));
  }

  async typeTextInput165(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.input165), value);
  }

  async expectInput165Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.input165), timeoutMs);
  }

  async expectInput165Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.input165), timeoutMs);
  }

  async expectInput165Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.input165), timeoutMs);
  }

  async expectInput165Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.input165), timeoutMs);
  }

  async expectInput165Value(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.input165), expected, timeoutMs);
  }

  async expectInput165Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.input165), timeoutMs);
  }

  async scrollInput165IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.input165));
  }

  async clickTimeInterval(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.timeInterval));
  }

  async doubleClickTimeInterval(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.timeInterval));
  }

  async expectTimeIntervalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.timeInterval), timeoutMs);
  }

  async expectTimeIntervalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.timeInterval), timeoutMs);
  }

  async expectTimeIntervalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.timeInterval), timeoutMs);
  }

  async expectTimeIntervalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.timeInterval), timeoutMs);
  }

  async expectTimeIntervalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.timeInterval), expected, timeoutMs);
  }

  async expectTimeIntervalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.timeInterval), substring, timeoutMs);
  }

  async scrollTimeIntervalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.timeInterval));
  }

  async getInnerTextHomeCardHeader6470(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader6470));
  }

  async expectHomeCardHeader6470Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.homeCardHeader6470), timeoutMs);
  }

  async expectHomeCardHeader6470Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.homeCardHeader6470), timeoutMs);
  }

  async expectHomeCardHeader6470Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.homeCardHeader6470), expected, timeoutMs);
  }

  async expectHomeCardHeader6470ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.homeCardHeader6470), substring, timeoutMs);
  }

  async scrollHomeCardHeader6470IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader6470));
  }

  async clickViewCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.viewCalendar));
  }

  async doubleClickViewCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.viewCalendar));
  }

  async expectViewCalendarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.viewCalendar), timeoutMs);
  }

  async expectViewCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.viewCalendar), timeoutMs);
  }

  async expectViewCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.viewCalendar), expected, timeoutMs);
  }

  async expectViewCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.viewCalendar), substring, timeoutMs);
  }

  async scrollViewCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.viewCalendar));
  }

  async getInnerTextHomeCardHeader7120(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader7120));
  }

  async expectHomeCardHeader7120Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.homeCardHeader7120), timeoutMs);
  }

  async expectHomeCardHeader7120Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.homeCardHeader7120), timeoutMs);
  }

  async expectHomeCardHeader7120Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.homeCardHeader7120), expected, timeoutMs);
  }

  async expectHomeCardHeader7120ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.homeCardHeader7120), substring, timeoutMs);
  }

  async scrollHomeCardHeader7120IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader7120));
  }

  async clickSelectAViewOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.selectAViewOf));
  }

  async doubleClickSelectAViewOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.selectAViewOf));
  }

  async expectSelectAViewOfVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.selectAViewOf), timeoutMs);
  }

  async expectSelectAViewOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.selectAViewOf), timeoutMs);
  }

  async expectSelectAViewOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.selectAViewOf), timeoutMs);
  }

  async expectSelectAViewOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.selectAViewOf), timeoutMs);
  }

  async expectSelectAViewOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.selectAViewOf), expected, timeoutMs);
  }

  async expectSelectAViewOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.selectAViewOf), substring, timeoutMs);
  }

  async scrollSelectAViewOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.selectAViewOf));
  }

  async clickViewAllTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.viewAllTasks));
  }

  async doubleClickViewAllTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.viewAllTasks));
  }

  async expectViewAllTasksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.viewAllTasks), timeoutMs);
  }

  async expectViewAllTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.viewAllTasks), timeoutMs);
  }

  async expectViewAllTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.viewAllTasks), expected, timeoutMs);
  }

  async expectViewAllTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.viewAllTasks), substring, timeoutMs);
  }

  async scrollViewAllTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.viewAllTasks));
  }

  async getInnerTextHomeCardHeader7970(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader7970));
  }

  async expectHomeCardHeader7970Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.homeCardHeader7970), timeoutMs);
  }

  async expectHomeCardHeader7970Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.homeCardHeader7970), timeoutMs);
  }

  async expectHomeCardHeader7970Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.homeCardHeader7970), expected, timeoutMs);
  }

  async expectHomeCardHeader7970ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.homeCardHeader7970), substring, timeoutMs);
  }

  async scrollHomeCardHeader7970IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader7970));
  }

  async getInnerTextYouHavenTViewedAny(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.youHavenTViewedAny));
  }

  async expectYouHavenTViewedAnyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.youHavenTViewedAny), timeoutMs);
  }

  async expectYouHavenTViewedAnyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.youHavenTViewedAny), timeoutMs);
  }

  async expectYouHavenTViewedAnyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.youHavenTViewedAny), expected, timeoutMs);
  }

  async expectYouHavenTViewedAnyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.youHavenTViewedAny), substring, timeoutMs);
  }

  async scrollYouHavenTViewedAnyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.youHavenTViewedAny));
  }

  async getInnerTextSalesblazer(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.salesblazer));
  }

  async expectSalesblazerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.salesblazer), timeoutMs);
  }

  async expectSalesblazerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.salesblazer), timeoutMs);
  }

  async expectSalesblazerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.salesblazer), expected, timeoutMs);
  }

  async expectSalesblazerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.salesblazer), substring, timeoutMs);
  }

  async scrollSalesblazerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.salesblazer));
  }

  async clickArticleLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.articleLink));
  }

  async doubleClickArticleLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.articleLink));
  }

  async expectArticleLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.articleLink), timeoutMs);
  }

  async expectArticleLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.articleLink), timeoutMs);
  }

  async expectArticleLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.articleLink), expected, timeoutMs);
  }

  async expectArticleLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.articleLink), substring, timeoutMs);
  }

  async scrollArticleLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.articleLink));
  }

  async getInnerTextMinuteRead(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.MinuteRead));
  }

  async expectMinuteReadVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.MinuteRead), timeoutMs);
  }

  async expectMinuteReadHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.MinuteRead), timeoutMs);
  }

  async expectMinuteReadText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.MinuteRead), expected, timeoutMs);
  }

  async expectMinuteReadContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.MinuteRead), substring, timeoutMs);
  }

  async scrollMinuteReadIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.MinuteRead));
  }

  async clickJoinTheCommunityLinkNewWindowAssistiveTextLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel));
  }

  async doubleClickJoinTheCommunityLinkNewWindowAssistiveTextLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel));
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), timeoutMs);
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), timeoutMs);
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), expected, timeoutMs);
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), substring, timeoutMs);
  }

  async scrollJoinTheCommunityLinkNewWindowAssistiveTextLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel));
  }

  async clickToDoList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.toDoList));
  }

  async doubleClickToDoList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.toDoList));
  }

  async expectToDoListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.toDoList), timeoutMs);
  }

  async expectToDoListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.toDoList), timeoutMs);
  }

  async expectToDoListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.toDoList), timeoutMs);
  }

  async expectToDoListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.toDoList), timeoutMs);
  }

  async expectToDoListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.toDoList), expected, timeoutMs);
  }

  async expectToDoListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.toDoList), substring, timeoutMs);
  }

  async scrollToDoListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.toDoList));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async longPressSkipToNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.skipToNavigation));
  }

  async expectSkipToNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.skipToNavigation), value, timeoutMs);
  }

  async expectSkipToNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.skipToNavigation), count, timeoutMs);
  }

  async longPressSkipToMainContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.skipToMainContent));
  }

  async expectSkipToMainContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.skipToMainContent), value, timeoutMs);
  }

  async expectSkipToMainContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.skipToMainContent), count, timeoutMs);
  }

  async longPressTogglePanel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.togglePanel));
  }

  async expectTogglePanelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.togglePanel), value, timeoutMs);
  }

  async expectTogglePanelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.togglePanel), count, timeoutMs);
  }

  async clickDeveloperEdition(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.developerEdition));
  }

  async doubleClickDeveloperEdition(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.developerEdition));
  }

  async longPressDeveloperEdition(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.developerEdition));
  }

  async expectDeveloperEditionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.developerEdition), value, timeoutMs);
  }

  async expectDeveloperEditionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.developerEdition), count, timeoutMs);
  }

  async longPressShowMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showMenu));
  }

  async expectShowMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showMenu), value, timeoutMs);
  }

  async expectShowMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showMenu), count, timeoutMs);
  }

  async longPressSearch(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.search), value, timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.search), count, timeoutMs);
  }

  async clickThisItemDoesnTSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupport));
  }

  async doubleClickThisItemDoesnTSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupport));
  }

  async longPressThisItemDoesnTSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupport));
  }

  async expectThisItemDoesnTSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), value, timeoutMs);
  }

  async expectThisItemDoesnTSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.thisItemDoesnTSupport), count, timeoutMs);
  }

  async longPressThisItemDoesnTSupportButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton));
  }

  async expectThisItemDoesnTSupportButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), value, timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), count, timeoutMs);
  }

  async longPressFavoritesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.favoritesList));
  }

  async expectFavoritesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.favoritesList), value, timeoutMs);
  }

  async expectFavoritesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.favoritesList), count, timeoutMs);
  }

  async longPressGlobalActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.globalActions));
  }

  async expectGlobalActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.globalActions), value, timeoutMs);
  }

  async expectGlobalActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.globalActions), count, timeoutMs);
  }

  async longPressGuidanceCenter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.guidanceCenter));
  }

  async expectGuidanceCenterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.guidanceCenter), value, timeoutMs);
  }

  async expectGuidanceCenterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.guidanceCenter), count, timeoutMs);
  }

  async longPressSalesforceHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.salesforceHelp));
  }

  async expectSalesforceHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.salesforceHelp), value, timeoutMs);
  }

  async expectSalesforceHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.salesforceHelp), count, timeoutMs);
  }

  async longPressSetup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.setup));
  }

  async expectSetupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.setup), value, timeoutMs);
  }

  async expectSetupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.setup), timeoutMs);
  }

  async expectSetupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.setup), timeoutMs);
  }

  async expectSetupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.setup), timeoutMs);
  }

  async expectSetupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.setup), timeoutMs);
  }

  async expectSetupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.setup), timeoutMs);
  }

  async expectSetupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.setup), count, timeoutMs);
  }

  async longPressNotifications(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.notifications));
  }

  async expectNotificationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.notifications), value, timeoutMs);
  }

  async expectNotificationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.notifications), timeoutMs);
  }

  async expectNotificationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.notifications), timeoutMs);
  }

  async expectNotificationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.notifications), timeoutMs);
  }

  async expectNotificationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.notifications), count, timeoutMs);
  }

  async longPressViewProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.viewProfile));
  }

  async expectViewProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.viewProfile), value, timeoutMs);
  }

  async expectViewProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.viewProfile), count, timeoutMs);
  }

  async longPressAppLauncher(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.appLauncher));
  }

  async expectAppLauncherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.appLauncher), value, timeoutMs);
  }

  async expectAppLauncherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.appLauncher), count, timeoutMs);
  }

  async clickSales(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sales));
  }

  async doubleClickSales(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sales));
  }

  async longPressSales(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sales));
  }

  async expectSalesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sales), value, timeoutMs);
  }

  async expectSalesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sales), count, timeoutMs);
  }

  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.home));
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.home), count, timeoutMs);
  }

  async longPressOpportunities(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async expectOpportunitiesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.opportunities), value, timeoutMs);
  }

  async expectOpportunitiesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.opportunities), count, timeoutMs);
  }

  async longPressOpportunitiesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.opportunitiesList));
  }

  async expectOpportunitiesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.opportunitiesList), value, timeoutMs);
  }

  async expectOpportunitiesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.opportunitiesList), count, timeoutMs);
  }

  async longPressLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.leads));
  }

  async expectLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.leads), value, timeoutMs);
  }

  async expectLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.leads), count, timeoutMs);
  }

  async longPressLeadsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.leadsList));
  }

  async expectLeadsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.leadsList), value, timeoutMs);
  }

  async expectLeadsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.leadsList), timeoutMs);
  }

  async expectLeadsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.leadsList), timeoutMs);
  }

  async expectLeadsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.leadsList), timeoutMs);
  }

  async expectLeadsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.leadsList), timeoutMs);
  }

  async expectLeadsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.leadsList), timeoutMs);
  }

  async expectLeadsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.leadsList), count, timeoutMs);
  }

  async longPressTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async expectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.tasks), value, timeoutMs);
  }

  async expectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.tasks), count, timeoutMs);
  }

  async longPressTasksList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.tasksList));
  }

  async expectTasksListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.tasksList), value, timeoutMs);
  }

  async expectTasksListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.tasksList), timeoutMs);
  }

  async expectTasksListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.tasksList), timeoutMs);
  }

  async expectTasksListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.tasksList), timeoutMs);
  }

  async expectTasksListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.tasksList), timeoutMs);
  }

  async expectTasksListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.tasksList), timeoutMs);
  }

  async expectTasksListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.tasksList), count, timeoutMs);
  }

  async longPressFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.files));
  }

  async expectFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.files), value, timeoutMs);
  }

  async expectFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.files), count, timeoutMs);
  }

  async longPressFilesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.filesList));
  }

  async expectFilesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.filesList), value, timeoutMs);
  }

  async expectFilesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.filesList), timeoutMs);
  }

  async expectFilesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.filesList), timeoutMs);
  }

  async expectFilesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.filesList), timeoutMs);
  }

  async expectFilesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.filesList), timeoutMs);
  }

  async expectFilesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.filesList), timeoutMs);
  }

  async expectFilesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.filesList), count, timeoutMs);
  }

  async longPressAccounts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async expectAccountsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.accounts), value, timeoutMs);
  }

  async expectAccountsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.accounts), count, timeoutMs);
  }

  async longPressAccountsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.accountsList));
  }

  async expectAccountsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.accountsList), value, timeoutMs);
  }

  async expectAccountsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.accountsList), count, timeoutMs);
  }

  async longPressContacts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async expectContactsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.contacts), value, timeoutMs);
  }

  async expectContactsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.contacts), count, timeoutMs);
  }

  async longPressContactsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.contactsList));
  }

  async expectContactsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.contactsList), value, timeoutMs);
  }

  async expectContactsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.contactsList), count, timeoutMs);
  }

  async longPressCampaigns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async expectCampaignsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.campaigns), value, timeoutMs);
  }

  async expectCampaignsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.campaigns), count, timeoutMs);
  }

  async longPressCampaignsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.campaignsList));
  }

  async expectCampaignsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.campaignsList), value, timeoutMs);
  }

  async expectCampaignsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.campaignsList), count, timeoutMs);
  }

  async longPressDashboards(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.dashboards));
  }

  async expectDashboardsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.dashboards), value, timeoutMs);
  }

  async expectDashboardsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.dashboards), count, timeoutMs);
  }

  async longPressDashboardsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.dashboardsList));
  }

  async expectDashboardsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.dashboardsList), value, timeoutMs);
  }

  async expectDashboardsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.dashboardsList), count, timeoutMs);
  }

  async longPressReports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.reports));
  }

  async expectReportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.reports), value, timeoutMs);
  }

  async expectReportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.reports), count, timeoutMs);
  }

  async longPressReportsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.reportsList));
  }

  async expectReportsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.reportsList), value, timeoutMs);
  }

  async expectReportsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.reportsList), count, timeoutMs);
  }

  async longPressMoreShowMoreNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.moreShowMoreNavigation), value, timeoutMs);
  }

  async expectMoreShowMoreNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.moreShowMoreNavigation), count, timeoutMs);
  }

  async longPressPersonalizeYourNavBar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.personalizeYourNavBar));
  }

  async expectPersonalizeYourNavBarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.personalizeYourNavBar), value, timeoutMs);
  }

  async expectPersonalizeYourNavBarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.personalizeYourNavBar), count, timeoutMs);
  }

  async clickSellerHomeGoodEveningShubham(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham));
  }

  async doubleClickSellerHomeGoodEveningShubham(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham));
  }

  async longPressSellerHomeGoodEveningShubham(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham));
  }

  async expectSellerHomeGoodEveningShubhamValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), value, timeoutMs);
  }

  async expectSellerHomeGoodEveningShubhamEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), timeoutMs);
  }

  async expectSellerHomeGoodEveningShubhamDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), timeoutMs);
  }

  async expectSellerHomeGoodEveningShubhamChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), timeoutMs);
  }

  async expectSellerHomeGoodEveningShubhamUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), timeoutMs);
  }

  async expectSellerHomeGoodEveningShubhamFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), timeoutMs);
  }

  async expectSellerHomeGoodEveningShubhamCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sellerHomeGoodEveningShubham), count, timeoutMs);
  }

  async clickGoodEveningShubhamLetS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.goodEveningShubhamLetS));
  }

  async doubleClickGoodEveningShubhamLetS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.goodEveningShubhamLetS));
  }

  async longPressGoodEveningShubhamLetS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.goodEveningShubhamLetS));
  }

  async expectGoodEveningShubhamLetSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), value, timeoutMs);
  }

  async expectGoodEveningShubhamLetSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), timeoutMs);
  }

  async expectGoodEveningShubhamLetSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), timeoutMs);
  }

  async expectGoodEveningShubhamLetSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), timeoutMs);
  }

  async expectGoodEveningShubhamLetSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), timeoutMs);
  }

  async expectGoodEveningShubhamLetSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), timeoutMs);
  }

  async expectGoodEveningShubhamLetSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.goodEveningShubhamLetS), count, timeoutMs);
  }

  async clickCloseDeals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.closeDeals));
  }

  async doubleClickCloseDeals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.closeDeals));
  }

  async longPressCloseDeals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.closeDeals));
  }

  async expectCloseDealsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.closeDeals), value, timeoutMs);
  }

  async expectCloseDealsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.closeDeals), timeoutMs);
  }

  async expectCloseDealsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.closeDeals), timeoutMs);
  }

  async expectCloseDealsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.closeDeals), timeoutMs);
  }

  async expectCloseDealsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.closeDeals), timeoutMs);
  }

  async expectCloseDealsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.closeDeals), timeoutMs);
  }

  async expectCloseDealsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.closeDeals), count, timeoutMs);
  }

  async clickOpportunitiesOwnedByMe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe));
  }

  async doubleClickOpportunitiesOwnedByMe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe));
  }

  async longPressOpportunitiesOwnedByMe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe));
  }

  async expectOpportunitiesOwnedByMeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), value, timeoutMs);
  }

  async expectOpportunitiesOwnedByMeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), timeoutMs);
  }

  async expectOpportunitiesOwnedByMeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), timeoutMs);
  }

  async expectOpportunitiesOwnedByMeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), timeoutMs);
  }

  async expectOpportunitiesOwnedByMeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), timeoutMs);
  }

  async expectOpportunitiesOwnedByMeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), timeoutMs);
  }

  async expectOpportunitiesOwnedByMeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.opportunitiesOwnedByMe), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.element), count, timeoutMs);
  }

  async clickTotalPipeline(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.totalPipeline));
  }

  async doubleClickTotalPipeline(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.totalPipeline));
  }

  async longPressTotalPipeline(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.totalPipeline));
  }

  async expectTotalPipelineValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.totalPipeline), value, timeoutMs);
  }

  async expectTotalPipelineEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.totalPipeline), timeoutMs);
  }

  async expectTotalPipelineDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.totalPipeline), timeoutMs);
  }

  async expectTotalPipelineChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.totalPipeline), timeoutMs);
  }

  async expectTotalPipelineUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.totalPipeline), timeoutMs);
  }

  async expectTotalPipelineFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.totalPipeline), timeoutMs);
  }

  async expectTotalPipelineCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.totalPipeline), count, timeoutMs);
  }

  async clickOpen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.Open));
  }

  async doubleClickOpen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.Open));
  }

  async longPressOpen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.Open));
  }

  async expectOpenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.Open), value, timeoutMs);
  }

  async expectOpenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.Open), timeoutMs);
  }

  async expectOpenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.Open), timeoutMs);
  }

  async expectOpenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.Open), timeoutMs);
  }

  async expectOpenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.Open), timeoutMs);
  }

  async expectOpenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.Open), timeoutMs);
  }

  async expectOpenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.Open), count, timeoutMs);
  }

  async clickWon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.Won));
  }

  async doubleClickWon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.Won));
  }

  async longPressWon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.Won));
  }

  async expectWonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.Won), value, timeoutMs);
  }

  async expectWonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.Won), timeoutMs);
  }

  async expectWonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.Won), timeoutMs);
  }

  async expectWonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.Won), timeoutMs);
  }

  async expectWonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.Won), timeoutMs);
  }

  async expectWonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.Won), timeoutMs);
  }

  async expectWonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.Won), count, timeoutMs);
  }

  async clickLost(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.Lost));
  }

  async doubleClickLost(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.Lost));
  }

  async longPressLost(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.Lost));
  }

  async expectLostValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.Lost), value, timeoutMs);
  }

  async expectLostEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.Lost), timeoutMs);
  }

  async expectLostDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.Lost), timeoutMs);
  }

  async expectLostChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.Lost), timeoutMs);
  }

  async expectLostUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.Lost), timeoutMs);
  }

  async expectLostFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.Lost), timeoutMs);
  }

  async expectLostCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.Lost), count, timeoutMs);
  }

  async longPressViewOpportunitiesOpensIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn));
  }

  async expectViewOpportunitiesOpensInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), value, timeoutMs);
  }

  async expectViewOpportunitiesOpensInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), timeoutMs);
  }

  async expectViewOpportunitiesOpensInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), timeoutMs);
  }

  async expectViewOpportunitiesOpensInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), timeoutMs);
  }

  async expectViewOpportunitiesOpensInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), timeoutMs);
  }

  async expectViewOpportunitiesOpensInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), timeoutMs);
  }

  async expectViewOpportunitiesOpensInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.viewOpportunitiesOpensIn), count, timeoutMs);
  }

  async clickPlanMyAccounts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.planMyAccounts));
  }

  async doubleClickPlanMyAccounts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.planMyAccounts));
  }

  async longPressPlanMyAccounts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.planMyAccounts));
  }

  async expectPlanMyAccountsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.planMyAccounts), value, timeoutMs);
  }

  async expectPlanMyAccountsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.planMyAccounts), timeoutMs);
  }

  async expectPlanMyAccountsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.planMyAccounts), timeoutMs);
  }

  async expectPlanMyAccountsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.planMyAccounts), timeoutMs);
  }

  async expectPlanMyAccountsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.planMyAccounts), timeoutMs);
  }

  async expectPlanMyAccountsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.planMyAccounts), timeoutMs);
  }

  async expectPlanMyAccountsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.planMyAccounts), count, timeoutMs);
  }

  async clickAccountsOwnedByMe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.accountsOwnedByMe));
  }

  async doubleClickAccountsOwnedByMe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.accountsOwnedByMe));
  }

  async longPressAccountsOwnedByMe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.accountsOwnedByMe));
  }

  async expectAccountsOwnedByMeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.accountsOwnedByMe), value, timeoutMs);
  }

  async expectAccountsOwnedByMeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.accountsOwnedByMe), timeoutMs);
  }

  async expectAccountsOwnedByMeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.accountsOwnedByMe), timeoutMs);
  }

  async expectAccountsOwnedByMeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.accountsOwnedByMe), timeoutMs);
  }

  async expectAccountsOwnedByMeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.accountsOwnedByMe), timeoutMs);
  }

  async expectAccountsOwnedByMeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.accountsOwnedByMe), timeoutMs);
  }

  async expectAccountsOwnedByMeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.accountsOwnedByMe), count, timeoutMs);
  }

  async clickUpcomingActivity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity));
  }

  async doubleClickUpcomingActivity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity));
  }

  async longPressUpcomingActivity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity));
  }

  async expectUpcomingActivityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.UpcomingActivity), value, timeoutMs);
  }

  async expectUpcomingActivityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.UpcomingActivity), timeoutMs);
  }

  async expectUpcomingActivityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.UpcomingActivity), timeoutMs);
  }

  async expectUpcomingActivityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.UpcomingActivity), timeoutMs);
  }

  async expectUpcomingActivityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.UpcomingActivity), timeoutMs);
  }

  async expectUpcomingActivityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.UpcomingActivity), timeoutMs);
  }

  async expectUpcomingActivityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.UpcomingActivity), count, timeoutMs);
  }

  async clickPastActivity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.PastActivity));
  }

  async doubleClickPastActivity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.PastActivity));
  }

  async longPressPastActivity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.PastActivity));
  }

  async expectPastActivityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.PastActivity), value, timeoutMs);
  }

  async expectPastActivityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.PastActivity), timeoutMs);
  }

  async expectPastActivityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.PastActivity), timeoutMs);
  }

  async expectPastActivityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.PastActivity), timeoutMs);
  }

  async expectPastActivityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.PastActivity), timeoutMs);
  }

  async expectPastActivityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.PastActivity), timeoutMs);
  }

  async expectPastActivityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.PastActivity), count, timeoutMs);
  }

  async clickNoActivity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.NoActivity));
  }

  async doubleClickNoActivity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.NoActivity));
  }

  async longPressNoActivity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.NoActivity));
  }

  async expectNoActivityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.NoActivity), value, timeoutMs);
  }

  async expectNoActivityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.NoActivity), timeoutMs);
  }

  async expectNoActivityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.NoActivity), timeoutMs);
  }

  async expectNoActivityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.NoActivity), timeoutMs);
  }

  async expectNoActivityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.NoActivity), timeoutMs);
  }

  async expectNoActivityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.NoActivity), timeoutMs);
  }

  async expectNoActivityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.NoActivity), count, timeoutMs);
  }

  async longPressViewAccountsOpensIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.viewAccountsOpensIn));
  }

  async expectViewAccountsOpensInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.viewAccountsOpensIn), value, timeoutMs);
  }

  async expectViewAccountsOpensInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.viewAccountsOpensIn), timeoutMs);
  }

  async expectViewAccountsOpensInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.viewAccountsOpensIn), timeoutMs);
  }

  async expectViewAccountsOpensInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.viewAccountsOpensIn), timeoutMs);
  }

  async expectViewAccountsOpensInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.viewAccountsOpensIn), timeoutMs);
  }

  async expectViewAccountsOpensInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.viewAccountsOpensIn), timeoutMs);
  }

  async expectViewAccountsOpensInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.viewAccountsOpensIn), count, timeoutMs);
  }

  async clickGrowRelationships(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.growRelationships));
  }

  async doubleClickGrowRelationships(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.growRelationships));
  }

  async longPressGrowRelationships(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.growRelationships));
  }

  async expectGrowRelationshipsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.growRelationships), value, timeoutMs);
  }

  async expectGrowRelationshipsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.growRelationships), timeoutMs);
  }

  async expectGrowRelationshipsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.growRelationships), timeoutMs);
  }

  async expectGrowRelationshipsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.growRelationships), timeoutMs);
  }

  async expectGrowRelationshipsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.growRelationships), timeoutMs);
  }

  async expectGrowRelationshipsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.growRelationships), timeoutMs);
  }

  async expectGrowRelationshipsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.growRelationships), count, timeoutMs);
  }

  async clickContactsOwnedByMe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.contactsOwnedByMe));
  }

  async doubleClickContactsOwnedByMe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.contactsOwnedByMe));
  }

  async longPressContactsOwnedByMe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.contactsOwnedByMe));
  }

  async expectContactsOwnedByMeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.contactsOwnedByMe), value, timeoutMs);
  }

  async expectContactsOwnedByMeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.contactsOwnedByMe), timeoutMs);
  }

  async expectContactsOwnedByMeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.contactsOwnedByMe), timeoutMs);
  }

  async expectContactsOwnedByMeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.contactsOwnedByMe), timeoutMs);
  }

  async expectContactsOwnedByMeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.contactsOwnedByMe), timeoutMs);
  }

  async expectContactsOwnedByMeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.contactsOwnedByMe), timeoutMs);
  }

  async expectContactsOwnedByMeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.contactsOwnedByMe), count, timeoutMs);
  }

  async clickUpcomingActivity2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity2));
  }

  async doubleClickUpcomingActivity2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity2));
  }

  async longPressUpcomingActivity2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity2));
  }

  async expectUpcomingActivity2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.UpcomingActivity2), value, timeoutMs);
  }

  async expectUpcomingActivity2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.UpcomingActivity2), timeoutMs);
  }

  async expectUpcomingActivity2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.UpcomingActivity2), timeoutMs);
  }

  async expectUpcomingActivity2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.UpcomingActivity2), timeoutMs);
  }

  async expectUpcomingActivity2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.UpcomingActivity2), timeoutMs);
  }

  async expectUpcomingActivity2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.UpcomingActivity2), timeoutMs);
  }

  async expectUpcomingActivity2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.UpcomingActivity2), count, timeoutMs);
  }

  async clickPastActivity2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.PastActivity2));
  }

  async doubleClickPastActivity2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.PastActivity2));
  }

  async longPressPastActivity2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.PastActivity2));
  }

  async expectPastActivity2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.PastActivity2), value, timeoutMs);
  }

  async expectPastActivity2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.PastActivity2), timeoutMs);
  }

  async expectPastActivity2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.PastActivity2), timeoutMs);
  }

  async expectPastActivity2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.PastActivity2), timeoutMs);
  }

  async expectPastActivity2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.PastActivity2), timeoutMs);
  }

  async expectPastActivity2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.PastActivity2), timeoutMs);
  }

  async expectPastActivity2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.PastActivity2), count, timeoutMs);
  }

  async clickNoActivity2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.NoActivity2));
  }

  async doubleClickNoActivity2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.NoActivity2));
  }

  async longPressNoActivity2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.NoActivity2));
  }

  async expectNoActivity2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.NoActivity2), value, timeoutMs);
  }

  async expectNoActivity2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.NoActivity2), timeoutMs);
  }

  async expectNoActivity2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.NoActivity2), timeoutMs);
  }

  async expectNoActivity2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.NoActivity2), timeoutMs);
  }

  async expectNoActivity2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.NoActivity2), timeoutMs);
  }

  async expectNoActivity2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.NoActivity2), timeoutMs);
  }

  async expectNoActivity2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.NoActivity2), count, timeoutMs);
  }

  async longPressViewContactsOpensIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.viewContactsOpensIn));
  }

  async expectViewContactsOpensInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.viewContactsOpensIn), value, timeoutMs);
  }

  async expectViewContactsOpensInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.viewContactsOpensIn), timeoutMs);
  }

  async expectViewContactsOpensInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.viewContactsOpensIn), timeoutMs);
  }

  async expectViewContactsOpensInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.viewContactsOpensIn), timeoutMs);
  }

  async expectViewContactsOpensInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.viewContactsOpensIn), timeoutMs);
  }

  async expectViewContactsOpensInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.viewContactsOpensIn), timeoutMs);
  }

  async expectViewContactsOpensInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.viewContactsOpensIn), count, timeoutMs);
  }

  async clickBuildPipeline(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.buildPipeline));
  }

  async doubleClickBuildPipeline(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.buildPipeline));
  }

  async longPressBuildPipeline(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.buildPipeline));
  }

  async expectBuildPipelineValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.buildPipeline), value, timeoutMs);
  }

  async expectBuildPipelineEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.buildPipeline), timeoutMs);
  }

  async expectBuildPipelineDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.buildPipeline), timeoutMs);
  }

  async expectBuildPipelineChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.buildPipeline), timeoutMs);
  }

  async expectBuildPipelineUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.buildPipeline), timeoutMs);
  }

  async expectBuildPipelineFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.buildPipeline), timeoutMs);
  }

  async expectBuildPipelineCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.buildPipeline), count, timeoutMs);
  }

  async clickLeadsOwnedByMe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.leadsOwnedByMe));
  }

  async doubleClickLeadsOwnedByMe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.leadsOwnedByMe));
  }

  async longPressLeadsOwnedByMe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.leadsOwnedByMe));
  }

  async expectLeadsOwnedByMeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.leadsOwnedByMe), value, timeoutMs);
  }

  async expectLeadsOwnedByMeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.leadsOwnedByMe), timeoutMs);
  }

  async expectLeadsOwnedByMeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.leadsOwnedByMe), timeoutMs);
  }

  async expectLeadsOwnedByMeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.leadsOwnedByMe), timeoutMs);
  }

  async expectLeadsOwnedByMeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.leadsOwnedByMe), timeoutMs);
  }

  async expectLeadsOwnedByMeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.leadsOwnedByMe), timeoutMs);
  }

  async expectLeadsOwnedByMeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.leadsOwnedByMe), count, timeoutMs);
  }

  async clickUpcomingActivity3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity3));
  }

  async doubleClickUpcomingActivity3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity3));
  }

  async longPressUpcomingActivity3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.UpcomingActivity3));
  }

  async expectUpcomingActivity3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.UpcomingActivity3), value, timeoutMs);
  }

  async expectUpcomingActivity3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.UpcomingActivity3), timeoutMs);
  }

  async expectUpcomingActivity3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.UpcomingActivity3), timeoutMs);
  }

  async expectUpcomingActivity3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.UpcomingActivity3), timeoutMs);
  }

  async expectUpcomingActivity3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.UpcomingActivity3), timeoutMs);
  }

  async expectUpcomingActivity3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.UpcomingActivity3), timeoutMs);
  }

  async expectUpcomingActivity3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.UpcomingActivity3), count, timeoutMs);
  }

  async clickPastActivity3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.PastActivity3));
  }

  async doubleClickPastActivity3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.PastActivity3));
  }

  async longPressPastActivity3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.PastActivity3));
  }

  async expectPastActivity3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.PastActivity3), value, timeoutMs);
  }

  async expectPastActivity3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.PastActivity3), timeoutMs);
  }

  async expectPastActivity3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.PastActivity3), timeoutMs);
  }

  async expectPastActivity3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.PastActivity3), timeoutMs);
  }

  async expectPastActivity3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.PastActivity3), timeoutMs);
  }

  async expectPastActivity3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.PastActivity3), timeoutMs);
  }

  async expectPastActivity3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.PastActivity3), count, timeoutMs);
  }

  async clickNoActivity3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.NoActivity3));
  }

  async doubleClickNoActivity3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.NoActivity3));
  }

  async longPressNoActivity3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.NoActivity3));
  }

  async expectNoActivity3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.NoActivity3), value, timeoutMs);
  }

  async expectNoActivity3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.NoActivity3), timeoutMs);
  }

  async expectNoActivity3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.NoActivity3), timeoutMs);
  }

  async expectNoActivity3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.NoActivity3), timeoutMs);
  }

  async expectNoActivity3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.NoActivity3), timeoutMs);
  }

  async expectNoActivity3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.NoActivity3), timeoutMs);
  }

  async expectNoActivity3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.NoActivity3), count, timeoutMs);
  }

  async longPressViewLeadsOpensIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.viewLeadsOpensIn));
  }

  async expectViewLeadsOpensInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.viewLeadsOpensIn), value, timeoutMs);
  }

  async expectViewLeadsOpensInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.viewLeadsOpensIn), timeoutMs);
  }

  async expectViewLeadsOpensInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.viewLeadsOpensIn), timeoutMs);
  }

  async expectViewLeadsOpensInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.viewLeadsOpensIn), timeoutMs);
  }

  async expectViewLeadsOpensInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.viewLeadsOpensIn), timeoutMs);
  }

  async expectViewLeadsOpensInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.viewLeadsOpensIn), timeoutMs);
  }

  async expectViewLeadsOpensInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.viewLeadsOpensIn), count, timeoutMs);
  }

  async clickMyGoals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.myGoals));
  }

  async doubleClickMyGoals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.myGoals));
  }

  async longPressMyGoals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.myGoals));
  }

  async expectMyGoalsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.myGoals), value, timeoutMs);
  }

  async expectMyGoalsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.myGoals), timeoutMs);
  }

  async expectMyGoalsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.myGoals), timeoutMs);
  }

  async expectMyGoalsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.myGoals), timeoutMs);
  }

  async expectMyGoalsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.myGoals), timeoutMs);
  }

  async expectMyGoalsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.myGoals), timeoutMs);
  }

  async expectMyGoalsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.myGoals), count, timeoutMs);
  }

  async longPressEditMyGoals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.editMyGoals));
  }

  async expectEditMyGoalsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.editMyGoals), value, timeoutMs);
  }

  async expectEditMyGoalsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.editMyGoals), timeoutMs);
  }

  async expectEditMyGoalsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.editMyGoals), timeoutMs);
  }

  async expectEditMyGoalsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.editMyGoals), timeoutMs);
  }

  async expectEditMyGoalsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.editMyGoals), count, timeoutMs);
  }

  async clickSetPersonalWeeklyOr(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.setPersonalWeeklyOr));
  }

  async doubleClickSetPersonalWeeklyOr(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.setPersonalWeeklyOr));
  }

  async longPressSetPersonalWeeklyOr(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.setPersonalWeeklyOr));
  }

  async expectSetPersonalWeeklyOrValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), value, timeoutMs);
  }

  async expectSetPersonalWeeklyOrEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), timeoutMs);
  }

  async expectSetPersonalWeeklyOrDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), timeoutMs);
  }

  async expectSetPersonalWeeklyOrChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), timeoutMs);
  }

  async expectSetPersonalWeeklyOrUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), timeoutMs);
  }

  async expectSetPersonalWeeklyOrFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), timeoutMs);
  }

  async expectSetPersonalWeeklyOrCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.setPersonalWeeklyOr), count, timeoutMs);
  }

  async longPressSetGoals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.setGoals));
  }

  async expectSetGoalsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.setGoals), value, timeoutMs);
  }

  async expectSetGoalsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.setGoals), timeoutMs);
  }

  async expectSetGoalsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.setGoals), timeoutMs);
  }

  async expectSetGoalsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.setGoals), timeoutMs);
  }

  async expectSetGoalsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.setGoals), count, timeoutMs);
  }

  async expectInput161Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.input161), expected, timeoutMs);
  }

  async expectInput161ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.input161), substring, timeoutMs);
  }

  async expectInput161Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.input161), timeoutMs);
  }

  async expectInput161Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.input161), timeoutMs);
  }

  async expectInput161Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.input161), count, timeoutMs);
  }

  async expectInput163Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.input163), expected, timeoutMs);
  }

  async expectInput163ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.input163), substring, timeoutMs);
  }

  async expectInput163Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.input163), timeoutMs);
  }

  async expectInput163Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.input163), timeoutMs);
  }

  async expectInput163Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.input163), count, timeoutMs);
  }

  async expectInput165Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.input165), expected, timeoutMs);
  }

  async expectInput165ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.input165), substring, timeoutMs);
  }

  async expectInput165Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.input165), timeoutMs);
  }

  async expectInput165Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.input165), timeoutMs);
  }

  async expectInput165Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.input165), count, timeoutMs);
  }

  async longPressTimeInterval(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.timeInterval));
  }

  async expectTimeIntervalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.timeInterval), value, timeoutMs);
  }

  async expectTimeIntervalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.timeInterval), timeoutMs);
  }

  async expectTimeIntervalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.timeInterval), timeoutMs);
  }

  async expectTimeIntervalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.timeInterval), timeoutMs);
  }

  async expectTimeIntervalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.timeInterval), count, timeoutMs);
  }

  async clickHomeCardHeader6470(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader6470));
  }

  async doubleClickHomeCardHeader6470(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader6470));
  }

  async longPressHomeCardHeader6470(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader6470));
  }

  async expectHomeCardHeader6470Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.homeCardHeader6470), value, timeoutMs);
  }

  async expectHomeCardHeader6470Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.homeCardHeader6470), timeoutMs);
  }

  async expectHomeCardHeader6470Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.homeCardHeader6470), timeoutMs);
  }

  async expectHomeCardHeader6470Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.homeCardHeader6470), timeoutMs);
  }

  async expectHomeCardHeader6470Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.homeCardHeader6470), timeoutMs);
  }

  async expectHomeCardHeader6470Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.homeCardHeader6470), timeoutMs);
  }

  async expectHomeCardHeader6470Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.homeCardHeader6470), count, timeoutMs);
  }

  async longPressViewCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.viewCalendar));
  }

  async expectViewCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.viewCalendar), value, timeoutMs);
  }

  async expectViewCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.viewCalendar), timeoutMs);
  }

  async expectViewCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.viewCalendar), timeoutMs);
  }

  async expectViewCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.viewCalendar), timeoutMs);
  }

  async expectViewCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.viewCalendar), timeoutMs);
  }

  async expectViewCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.viewCalendar), timeoutMs);
  }

  async expectViewCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.viewCalendar), count, timeoutMs);
  }

  async clickHomeCardHeader7120(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader7120));
  }

  async doubleClickHomeCardHeader7120(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader7120));
  }

  async longPressHomeCardHeader7120(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader7120));
  }

  async expectHomeCardHeader7120Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.homeCardHeader7120), value, timeoutMs);
  }

  async expectHomeCardHeader7120Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.homeCardHeader7120), timeoutMs);
  }

  async expectHomeCardHeader7120Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.homeCardHeader7120), timeoutMs);
  }

  async expectHomeCardHeader7120Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.homeCardHeader7120), timeoutMs);
  }

  async expectHomeCardHeader7120Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.homeCardHeader7120), timeoutMs);
  }

  async expectHomeCardHeader7120Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.homeCardHeader7120), timeoutMs);
  }

  async expectHomeCardHeader7120Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.homeCardHeader7120), count, timeoutMs);
  }

  async longPressSelectAViewOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.selectAViewOf));
  }

  async expectSelectAViewOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.selectAViewOf), value, timeoutMs);
  }

  async expectSelectAViewOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.selectAViewOf), timeoutMs);
  }

  async expectSelectAViewOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.selectAViewOf), timeoutMs);
  }

  async expectSelectAViewOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.selectAViewOf), timeoutMs);
  }

  async expectSelectAViewOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.selectAViewOf), count, timeoutMs);
  }

  async longPressViewAllTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.viewAllTasks));
  }

  async expectViewAllTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.viewAllTasks), value, timeoutMs);
  }

  async expectViewAllTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.viewAllTasks), timeoutMs);
  }

  async expectViewAllTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.viewAllTasks), timeoutMs);
  }

  async expectViewAllTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.viewAllTasks), timeoutMs);
  }

  async expectViewAllTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.viewAllTasks), timeoutMs);
  }

  async expectViewAllTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.viewAllTasks), timeoutMs);
  }

  async expectViewAllTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.viewAllTasks), count, timeoutMs);
  }

  async clickHomeCardHeader7970(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader7970));
  }

  async doubleClickHomeCardHeader7970(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader7970));
  }

  async longPressHomeCardHeader7970(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader7970));
  }

  async expectHomeCardHeader7970Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.homeCardHeader7970), value, timeoutMs);
  }

  async expectHomeCardHeader7970Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.homeCardHeader7970), timeoutMs);
  }

  async expectHomeCardHeader7970Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.homeCardHeader7970), timeoutMs);
  }

  async expectHomeCardHeader7970Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.homeCardHeader7970), timeoutMs);
  }

  async expectHomeCardHeader7970Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.homeCardHeader7970), timeoutMs);
  }

  async expectHomeCardHeader7970Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.homeCardHeader7970), timeoutMs);
  }

  async expectHomeCardHeader7970Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.homeCardHeader7970), count, timeoutMs);
  }

  async clickYouHavenTViewedAny(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.youHavenTViewedAny));
  }

  async doubleClickYouHavenTViewedAny(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.youHavenTViewedAny));
  }

  async longPressYouHavenTViewedAny(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.youHavenTViewedAny));
  }

  async expectYouHavenTViewedAnyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.youHavenTViewedAny), value, timeoutMs);
  }

  async expectYouHavenTViewedAnyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.youHavenTViewedAny), timeoutMs);
  }

  async expectYouHavenTViewedAnyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.youHavenTViewedAny), timeoutMs);
  }

  async expectYouHavenTViewedAnyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.youHavenTViewedAny), timeoutMs);
  }

  async expectYouHavenTViewedAnyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.youHavenTViewedAny), timeoutMs);
  }

  async expectYouHavenTViewedAnyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.youHavenTViewedAny), timeoutMs);
  }

  async expectYouHavenTViewedAnyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.youHavenTViewedAny), count, timeoutMs);
  }

  async clickSalesblazer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.salesblazer));
  }

  async doubleClickSalesblazer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.salesblazer));
  }

  async longPressSalesblazer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.salesblazer));
  }

  async expectSalesblazerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.salesblazer), value, timeoutMs);
  }

  async expectSalesblazerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.salesblazer), timeoutMs);
  }

  async expectSalesblazerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.salesblazer), timeoutMs);
  }

  async expectSalesblazerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.salesblazer), timeoutMs);
  }

  async expectSalesblazerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.salesblazer), timeoutMs);
  }

  async expectSalesblazerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.salesblazer), timeoutMs);
  }

  async expectSalesblazerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.salesblazer), count, timeoutMs);
  }

  async longPressArticleLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.articleLink));
  }

  async expectArticleLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.articleLink), value, timeoutMs);
  }

  async expectArticleLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.articleLink), timeoutMs);
  }

  async expectArticleLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.articleLink), timeoutMs);
  }

  async expectArticleLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.articleLink), timeoutMs);
  }

  async expectArticleLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.articleLink), timeoutMs);
  }

  async expectArticleLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.articleLink), timeoutMs);
  }

  async expectArticleLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.articleLink), count, timeoutMs);
  }

  async clickMinuteRead(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.MinuteRead));
  }

  async doubleClickMinuteRead(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.MinuteRead));
  }

  async longPressMinuteRead(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.MinuteRead));
  }

  async expectMinuteReadValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.MinuteRead), value, timeoutMs);
  }

  async expectMinuteReadEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.MinuteRead), timeoutMs);
  }

  async expectMinuteReadDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.MinuteRead), timeoutMs);
  }

  async expectMinuteReadChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.MinuteRead), timeoutMs);
  }

  async expectMinuteReadUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.MinuteRead), timeoutMs);
  }

  async expectMinuteReadFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.MinuteRead), timeoutMs);
  }

  async expectMinuteReadCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.MinuteRead), count, timeoutMs);
  }

  async longPressJoinTheCommunityLinkNewWindowAssistiveTextLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel));
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), value, timeoutMs);
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), timeoutMs);
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), timeoutMs);
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), timeoutMs);
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), timeoutMs);
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), timeoutMs);
  }

  async expectJoinTheCommunityLinkNewWindowAssistiveTextLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.joinTheCommunityLinkNewWindowAssistiveTextLabel), count, timeoutMs);
  }

  async longPressToDoList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.toDoList));
  }

  async expectToDoListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.toDoList), value, timeoutMs);
  }

  async expectToDoListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.toDoList), timeoutMs);
  }

  async expectToDoListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.toDoList), timeoutMs);
  }

  async expectToDoListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.toDoList), timeoutMs);
  }

  async expectToDoListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.toDoList), count, timeoutMs);
  }

}
