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

export class LeadNewPage {
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
    cancelAndClose: { strategy: 'css' as const, value: '[title="Cancel and close"]', actionKind: 'button' as const },
    newLead: { strategy: 'text' as const, value: 'New Lead', shadowHost: 'records-lwc-detail-panel', actionKind: 'text' as const },
    leadInformation: { strategy: 'text' as const, value: 'Lead Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    leadOwner: { strategy: 'text' as const, value: 'Lead Owner', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    phone: { strategy: 'css' as const, value: '[name="Phone"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    name: { strategy: 'text' as const, value: '*Name', shadowHost: 'lightning-input-name', actionKind: 'text' as const },
    salutation: { strategy: 'css' as const, value: '[name="salutation"]', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    firstName: { strategy: 'css' as const, value: '[name="firstName"][placeholder="First Name"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    lastName: { strategy: 'css' as const, value: '[name="lastName"][placeholder="Last Name"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    mobilePhone: { strategy: 'css' as const, value: '[name="MobilePhone"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    company: { strategy: 'css' as const, value: '[name="Company"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    fax: { strategy: 'css' as const, value: '[name="Fax"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    title: { strategy: 'css' as const, value: '[name="Title"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    email: { strategy: 'css' as const, value: '[name="Email"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    leadSource: { strategy: 'label' as const, value: 'Lead Source', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    website: { strategy: 'css' as const, value: '[name="Website"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    industry: { strategy: 'label' as const, value: 'Industry', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    leadStatus: { strategy: 'label' as const, value: 'Lead Status', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    annualRevenue: { strategy: 'css' as const, value: '[name="AnnualRevenue"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    rating: { strategy: 'label' as const, value: 'Rating', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    numberOfEmployees: { strategy: 'css' as const, value: '[name="NumberOfEmployees"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    addressInformation: { strategy: 'text' as const, value: 'Address Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    address: { strategy: 'text' as const, value: 'Address', shadowHost: 'lightning-input-address', actionKind: 'text' as const },
    country: { strategy: 'css' as const, value: '[name="country"]', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    street: { strategy: 'css' as const, value: '[name="street"]', shadowHost: 'lightning-textarea', actionKind: 'textbox' as const },
    city: { strategy: 'css' as const, value: '[name="city"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    province: { strategy: 'css' as const, value: '[name="province"]', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    postalCode: { strategy: 'css' as const, value: '[name="postalCode"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    additionalInformation: { strategy: 'text' as const, value: 'Additional Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    productInterest: { strategy: 'label' as const, value: 'Product Interest', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    currentGeneratorsC: { strategy: 'css' as const, value: '[name="CurrentGenerators__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    sICCodeC: { strategy: 'css' as const, value: '[name="SICCode__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    primary: { strategy: 'label' as const, value: 'Primary', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    numberofLocationsC: { strategy: 'css' as const, value: '[name="NumberofLocations__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    descriptionInformation: { strategy: 'text' as const, value: 'Description Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    cancelEdit: { strategy: 'css' as const, value: '[name="CancelEdit"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    saveAndNew: { strategy: 'css' as const, value: '[name="SaveAndNew"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    saveEdit: { strategy: 'css' as const, value: '[name="SaveEdit"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickSkipToNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.skipToNavigation));
  }

  async doubleClickSkipToNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.skipToNavigation));
  }

  async expectSkipToNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.skipToNavigation), expected, timeoutMs);
  }

  async expectSkipToNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.skipToNavigation), substring, timeoutMs);
  }

  async scrollSkipToNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.skipToNavigation));
  }

  async clickSkipToMainContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.skipToMainContent));
  }

  async doubleClickSkipToMainContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.skipToMainContent));
  }

  async expectSkipToMainContentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.skipToMainContent), expected, timeoutMs);
  }

  async expectSkipToMainContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.skipToMainContent), substring, timeoutMs);
  }

  async scrollSkipToMainContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.skipToMainContent));
  }

  async clickTogglePanel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.togglePanel));
  }

  async doubleClickTogglePanel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.togglePanel));
  }

  async expectTogglePanelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.togglePanel), expected, timeoutMs);
  }

  async expectTogglePanelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.togglePanel), substring, timeoutMs);
  }

  async scrollTogglePanelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.togglePanel));
  }

  async getInnerTextDeveloperEdition(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.developerEdition));
  }

  async expectDeveloperEditionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.developerEdition), expected, timeoutMs);
  }

  async expectDeveloperEditionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.developerEdition), substring, timeoutMs);
  }

  async scrollDeveloperEditionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.developerEdition));
  }

  async clickShowMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.showMenu));
  }

  async doubleClickShowMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.showMenu));
  }

  async expectShowMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.showMenu), expected, timeoutMs);
  }

  async expectShowMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.showMenu), substring, timeoutMs);
  }

  async scrollShowMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.showMenu));
  }

  async clickSearch(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.search));
  }

  async doubleClickSearch(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.search), timeoutMs);
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.search), timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.search), substring, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.search));
  }

  async getInnerTextThisItemDoesnTSupport(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport));
  }

  async expectThisItemDoesnTSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), expected, timeoutMs);
  }

  async expectThisItemDoesnTSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), substring, timeoutMs);
  }

  async scrollThisItemDoesnTSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport));
  }

  async clickThisItemDoesnTSupportButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton));
  }

  async doubleClickThisItemDoesnTSupportButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton));
  }

  async expectThisItemDoesnTSupportButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), expected, timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), substring, timeoutMs);
  }

  async scrollThisItemDoesnTSupportButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton));
  }

  async clickFavoritesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.favoritesList));
  }

  async doubleClickFavoritesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.favoritesList));
  }

  async expectFavoritesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.favoritesList), expected, timeoutMs);
  }

  async expectFavoritesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.favoritesList), substring, timeoutMs);
  }

  async scrollFavoritesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.favoritesList));
  }

  async clickGlobalActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.globalActions));
  }

  async doubleClickGlobalActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.globalActions));
  }

  async expectGlobalActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.globalActions), expected, timeoutMs);
  }

  async expectGlobalActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.globalActions), substring, timeoutMs);
  }

  async scrollGlobalActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.globalActions));
  }

  async clickGuidanceCenter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.guidanceCenter));
  }

  async doubleClickGuidanceCenter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.guidanceCenter));
  }

  async expectGuidanceCenterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.guidanceCenter), expected, timeoutMs);
  }

  async expectGuidanceCenterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.guidanceCenter), substring, timeoutMs);
  }

  async scrollGuidanceCenterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.guidanceCenter));
  }

  async clickSalesforceHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.salesforceHelp));
  }

  async doubleClickSalesforceHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.salesforceHelp));
  }

  async expectSalesforceHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.salesforceHelp), expected, timeoutMs);
  }

  async expectSalesforceHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.salesforceHelp), substring, timeoutMs);
  }

  async scrollSalesforceHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.salesforceHelp));
  }

  async clickSetup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.setup));
  }

  async doubleClickSetup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.setup));
  }

  async expectSetupVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.setup), timeoutMs);
  }

  async expectSetupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.setup), timeoutMs);
  }

  async expectSetupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.setup), expected, timeoutMs);
  }

  async expectSetupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.setup), substring, timeoutMs);
  }

  async scrollSetupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.setup));
  }

  async clickNotifications(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.notifications));
  }

  async doubleClickNotifications(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.notifications));
  }

  async expectNotificationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.notifications), timeoutMs);
  }

  async expectNotificationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.notifications), timeoutMs);
  }

  async expectNotificationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.notifications), timeoutMs);
  }

  async expectNotificationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.notifications), timeoutMs);
  }

  async expectNotificationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.notifications), expected, timeoutMs);
  }

  async expectNotificationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.notifications), substring, timeoutMs);
  }

  async scrollNotificationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.notifications));
  }

  async clickViewProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.viewProfile));
  }

  async doubleClickViewProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.viewProfile));
  }

  async expectViewProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.viewProfile), expected, timeoutMs);
  }

  async expectViewProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.viewProfile), substring, timeoutMs);
  }

  async scrollViewProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.viewProfile));
  }

  async clickAppLauncher(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.appLauncher));
  }

  async doubleClickAppLauncher(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.appLauncher));
  }

  async expectAppLauncherVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.appLauncher), expected, timeoutMs);
  }

  async expectAppLauncherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.appLauncher), substring, timeoutMs);
  }

  async scrollAppLauncherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.appLauncher));
  }

  async getInnerTextSales(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.sales));
  }

  async expectSalesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.sales), timeoutMs);
  }

  async expectSalesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.sales), timeoutMs);
  }

  async expectSalesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.sales), expected, timeoutMs);
  }

  async expectSalesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.sales), substring, timeoutMs);
  }

  async scrollSalesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.sales));
  }

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.home));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.home), timeoutMs);
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.home), substring, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.home));
  }

  async clickOpportunities(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.opportunities));
  }

  async doubleClickOpportunities(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.opportunities));
  }

  async expectOpportunitiesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.opportunities), expected, timeoutMs);
  }

  async expectOpportunitiesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.opportunities), substring, timeoutMs);
  }

  async scrollOpportunitiesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.opportunities));
  }

  async clickOpportunitiesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.opportunitiesList));
  }

  async doubleClickOpportunitiesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.opportunitiesList));
  }

  async expectOpportunitiesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.opportunitiesList), expected, timeoutMs);
  }

  async expectOpportunitiesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.opportunitiesList), substring, timeoutMs);
  }

  async scrollOpportunitiesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.opportunitiesList));
  }

  async clickLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leads));
  }

  async doubleClickLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leads));
  }

  async expectLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leads), timeoutMs);
  }

  async expectLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leads), timeoutMs);
  }

  async expectLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leads), expected, timeoutMs);
  }

  async expectLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leads), substring, timeoutMs);
  }

  async scrollLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leads));
  }

  async clickLeadsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadsList));
  }

  async doubleClickLeadsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadsList));
  }

  async expectLeadsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadsList), expected, timeoutMs);
  }

  async expectLeadsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadsList), substring, timeoutMs);
  }

  async scrollLeadsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadsList));
  }

  async clickTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.tasks));
  }

  async doubleClickTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.tasks));
  }

  async expectTasksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.tasks), timeoutMs);
  }

  async expectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.tasks), timeoutMs);
  }

  async expectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.tasks), expected, timeoutMs);
  }

  async expectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.tasks), substring, timeoutMs);
  }

  async scrollTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.tasks));
  }

  async clickTasksList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.tasksList));
  }

  async doubleClickTasksList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.tasksList));
  }

  async expectTasksListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.tasksList), timeoutMs);
  }

  async expectTasksListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.tasksList), timeoutMs);
  }

  async expectTasksListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.tasksList), expected, timeoutMs);
  }

  async expectTasksListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.tasksList), substring, timeoutMs);
  }

  async scrollTasksListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.tasksList));
  }

  async clickFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.files));
  }

  async doubleClickFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.files));
  }

  async expectFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.files), timeoutMs);
  }

  async expectFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.files), timeoutMs);
  }

  async expectFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.files), expected, timeoutMs);
  }

  async expectFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.files), substring, timeoutMs);
  }

  async scrollFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.files));
  }

  async clickFilesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.filesList));
  }

  async doubleClickFilesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.filesList));
  }

  async expectFilesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.filesList), timeoutMs);
  }

  async expectFilesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.filesList), timeoutMs);
  }

  async expectFilesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.filesList), expected, timeoutMs);
  }

  async expectFilesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.filesList), substring, timeoutMs);
  }

  async scrollFilesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.filesList));
  }

  async clickAccounts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.accounts));
  }

  async doubleClickAccounts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.accounts));
  }

  async expectAccountsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.accounts), timeoutMs);
  }

  async expectAccountsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.accounts), timeoutMs);
  }

  async expectAccountsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.accounts), expected, timeoutMs);
  }

  async expectAccountsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.accounts), substring, timeoutMs);
  }

  async scrollAccountsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.accounts));
  }

  async clickAccountsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.accountsList));
  }

  async doubleClickAccountsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.accountsList));
  }

  async expectAccountsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.accountsList), expected, timeoutMs);
  }

  async expectAccountsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.accountsList), substring, timeoutMs);
  }

  async scrollAccountsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.accountsList));
  }

  async clickContacts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.contacts));
  }

  async doubleClickContacts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.contacts));
  }

  async expectContactsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.contacts), timeoutMs);
  }

  async expectContactsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.contacts), timeoutMs);
  }

  async expectContactsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.contacts), expected, timeoutMs);
  }

  async expectContactsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.contacts), substring, timeoutMs);
  }

  async scrollContactsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.contacts));
  }

  async clickContactsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.contactsList));
  }

  async doubleClickContactsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.contactsList));
  }

  async expectContactsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.contactsList), timeoutMs);
  }

  async expectContactsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.contactsList), timeoutMs);
  }

  async expectContactsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.contactsList), expected, timeoutMs);
  }

  async expectContactsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.contactsList), substring, timeoutMs);
  }

  async scrollContactsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.contactsList));
  }

  async clickCampaigns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.campaigns));
  }

  async doubleClickCampaigns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.campaigns));
  }

  async expectCampaignsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.campaigns), expected, timeoutMs);
  }

  async expectCampaignsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.campaigns), substring, timeoutMs);
  }

  async scrollCampaignsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.campaigns));
  }

  async clickCampaignsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.campaignsList));
  }

  async doubleClickCampaignsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.campaignsList));
  }

  async expectCampaignsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.campaignsList), expected, timeoutMs);
  }

  async expectCampaignsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.campaignsList), substring, timeoutMs);
  }

  async scrollCampaignsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.campaignsList));
  }

  async clickDashboards(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.dashboards));
  }

  async doubleClickDashboards(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.dashboards));
  }

  async expectDashboardsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.dashboards), expected, timeoutMs);
  }

  async expectDashboardsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.dashboards), substring, timeoutMs);
  }

  async scrollDashboardsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.dashboards));
  }

  async clickDashboardsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.dashboardsList));
  }

  async doubleClickDashboardsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.dashboardsList));
  }

  async expectDashboardsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.dashboardsList), expected, timeoutMs);
  }

  async expectDashboardsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.dashboardsList), substring, timeoutMs);
  }

  async scrollDashboardsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.dashboardsList));
  }

  async clickReports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.reports));
  }

  async doubleClickReports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.reports));
  }

  async expectReportsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.reports), timeoutMs);
  }

  async expectReportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.reports), timeoutMs);
  }

  async expectReportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.reports), expected, timeoutMs);
  }

  async expectReportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.reports), substring, timeoutMs);
  }

  async scrollReportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.reports));
  }

  async clickReportsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.reportsList));
  }

  async doubleClickReportsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.reportsList));
  }

  async expectReportsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.reportsList), timeoutMs);
  }

  async expectReportsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.reportsList), timeoutMs);
  }

  async expectReportsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.reportsList), expected, timeoutMs);
  }

  async expectReportsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.reportsList), substring, timeoutMs);
  }

  async scrollReportsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.reportsList));
  }

  async clickMoreShowMoreNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation));
  }

  async doubleClickMoreShowMoreNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), expected, timeoutMs);
  }

  async expectMoreShowMoreNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), substring, timeoutMs);
  }

  async scrollMoreShowMoreNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation));
  }

  async clickPersonalizeYourNavBar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar));
  }

  async doubleClickPersonalizeYourNavBar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar));
  }

  async expectPersonalizeYourNavBarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), expected, timeoutMs);
  }

  async expectPersonalizeYourNavBarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), substring, timeoutMs);
  }

  async scrollPersonalizeYourNavBarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar));
  }

  async getInnerTextLeadsMyLeads(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.leadsMyLeads));
  }

  async expectLeadsMyLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadsMyLeads), expected, timeoutMs);
  }

  async expectLeadsMyLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadsMyLeads), substring, timeoutMs);
  }

  async scrollLeadsMyLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadsMyLeads));
  }

  async getInnerTextMyLeads(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.myLeads));
  }

  async expectMyLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.myLeads), expected, timeoutMs);
  }

  async expectMyLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.myLeads), substring, timeoutMs);
  }

  async scrollMyLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.myLeads));
  }

  async clickSelectAListView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.selectAListView));
  }

  async doubleClickSelectAListView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.selectAListView));
  }

  async expectSelectAListViewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.selectAListView), expected, timeoutMs);
  }

  async expectSelectAListViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.selectAListView), substring, timeoutMs);
  }

  async scrollSelectAListViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.selectAListView));
  }

  async clickLeadViewSettings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadViewSettings));
  }

  async doubleClickLeadViewSettings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadViewSettings));
  }

  async expectLeadViewSettingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadViewSettings), expected, timeoutMs);
  }

  async expectLeadViewSettingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadViewSettings), substring, timeoutMs);
  }

  async scrollLeadViewSettingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadViewSettings));
  }

  async clickRefresh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.refresh));
  }

  async doubleClickRefresh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.refresh));
  }

  async expectRefreshVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.refresh), timeoutMs);
  }

  async expectRefreshHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.refresh), timeoutMs);
  }

  async expectRefreshEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.refresh), timeoutMs);
  }

  async expectRefreshDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.refresh), timeoutMs);
  }

  async expectRefreshText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.refresh), expected, timeoutMs);
  }

  async expectRefreshContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.refresh), substring, timeoutMs);
  }

  async scrollRefreshIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.refresh));
  }

  async clickInlineEditButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.inlineEditButton));
  }

  async doubleClickInlineEditButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.inlineEditButton));
  }

  async expectInlineEditButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.inlineEditButton), expected, timeoutMs);
  }

  async expectInlineEditButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.inlineEditButton), substring, timeoutMs);
  }

  async scrollInlineEditButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.inlineEditButton));
  }

  async clickNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.new));
  }

  async doubleClickNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.new));
  }

  async expectNewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.new), timeoutMs);
  }

  async expectNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.new), timeoutMs);
  }

  async expectNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.new), timeoutMs);
  }

  async expectNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.new), timeoutMs);
  }

  async expectNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.new), expected, timeoutMs);
  }

  async expectNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.new), substring, timeoutMs);
  }

  async scrollNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.new));
  }

  async clickPipelineInspectionToListView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView));
  }

  async doubleClickPipelineInspectionToListView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView));
  }

  async expectPipelineInspectionToListViewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), expected, timeoutMs);
  }

  async expectPipelineInspectionToListViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), substring, timeoutMs);
  }

  async scrollPipelineInspectionToListViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView));
  }

  async clickTimePeriodFilterThis(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis));
  }

  async doubleClickTimePeriodFilterThis(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis));
  }

  async expectTimePeriodFilterThisVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), expected, timeoutMs);
  }

  async expectTimePeriodFilterThisContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), substring, timeoutMs);
  }

  async scrollTimePeriodFilterThisIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis));
  }

  async clickLeadOwnerFilterMe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe));
  }

  async doubleClickLeadOwnerFilterMe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe));
  }

  async expectLeadOwnerFilterMeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), expected, timeoutMs);
  }

  async expectLeadOwnerFilterMeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), substring, timeoutMs);
  }

  async scrollLeadOwnerFilterMeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe));
  }

  async clickImportantLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.importantLeads));
  }

  async doubleClickImportantLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.importantLeads));
  }

  async expectImportantLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.importantLeads), expected, timeoutMs);
  }

  async expectImportantLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.importantLeads), substring, timeoutMs);
  }

  async scrollImportantLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.importantLeads));
  }

  async getInnerTextApplyImportantLeadsFilter(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter));
  }

  async expectApplyImportantLeadsFilterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), expected, timeoutMs);
  }

  async expectApplyImportantLeadsFilterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), substring, timeoutMs);
  }

  async scrollApplyImportantLeadsFilterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter));
  }

  async getInnerTextPriorityRecordFilterButtonTooltip(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip));
  }

  async expectPriorityRecordFilterButtonTooltipVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), expected, timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), substring, timeoutMs);
  }

  async scrollPriorityRecordFilterButtonTooltipIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip));
  }

  async clickShowFilters(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.showFilters));
  }

  async doubleClickShowFilters(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.showFilters));
  }

  async expectShowFiltersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.showFilters), expected, timeoutMs);
  }

  async expectShowFiltersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.showFilters), substring, timeoutMs);
  }

  async scrollShowFiltersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.showFilters));
  }

  async clickTotalLeads0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.totalLeads0));
  }

  async doubleClickTotalLeads0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.totalLeads0));
  }

  async expectTotalLeads0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.totalLeads0), expected, timeoutMs);
  }

  async expectTotalLeads0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.totalLeads0), substring, timeoutMs);
  }

  async scrollTotalLeads0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.totalLeads0));
  }

  async clickNoActivity0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.noActivity0));
  }

  async doubleClickNoActivity0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.noActivity0));
  }

  async expectNoActivity0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.noActivity0), expected, timeoutMs);
  }

  async expectNoActivity0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.noActivity0), substring, timeoutMs);
  }

  async scrollNoActivity0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.noActivity0));
  }

  async clickHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.help));
  }

  async doubleClickHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.help));
  }

  async expectHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.help), timeoutMs);
  }

  async expectHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.help), timeoutMs);
  }

  async expectHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.help), timeoutMs);
  }

  async expectHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.help), timeoutMs);
  }

  async expectHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.help), expected, timeoutMs);
  }

  async expectHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.help), substring, timeoutMs);
  }

  async scrollHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.help));
  }

  async clickIdle0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.idle0));
  }

  async doubleClickIdle0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.idle0));
  }

  async expectIdle0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.idle0), timeoutMs);
  }

  async expectIdle0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.idle0), timeoutMs);
  }

  async expectIdle0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.idle0), timeoutMs);
  }

  async expectIdle0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.idle0), timeoutMs);
  }

  async expectIdle0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.idle0), expected, timeoutMs);
  }

  async expectIdle0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.idle0), substring, timeoutMs);
  }

  async scrollIdle0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.idle0));
  }

  async clickHelpButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton));
  }

  async doubleClickHelpButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton));
  }

  async expectHelpButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.helpButton), expected, timeoutMs);
  }

  async expectHelpButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.helpButton), substring, timeoutMs);
  }

  async scrollHelpButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton));
  }

  async clickNoUpcoming0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.noUpcoming0));
  }

  async doubleClickNoUpcoming0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.noUpcoming0));
  }

  async expectNoUpcoming0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.noUpcoming0), expected, timeoutMs);
  }

  async expectNoUpcoming0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.noUpcoming0), substring, timeoutMs);
  }

  async scrollNoUpcoming0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.noUpcoming0));
  }

  async clickHelpButton2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton2));
  }

  async doubleClickHelpButton2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton2));
  }

  async expectHelpButton2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.helpButton2), expected, timeoutMs);
  }

  async expectHelpButton2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.helpButton2), substring, timeoutMs);
  }

  async scrollHelpButton2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton2));
  }

  async clickOverdue0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.overdue0));
  }

  async doubleClickOverdue0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.overdue0));
  }

  async expectOverdue0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.overdue0), expected, timeoutMs);
  }

  async expectOverdue0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.overdue0), substring, timeoutMs);
  }

  async scrollOverdue0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.overdue0));
  }

  async clickDueToday0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.dueToday0));
  }

  async doubleClickDueToday0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.dueToday0));
  }

  async expectDueToday0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.dueToday0), expected, timeoutMs);
  }

  async expectDueToday0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.dueToday0), substring, timeoutMs);
  }

  async scrollDueToday0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.dueToday0));
  }

  async clickUpcoming0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.upcoming0));
  }

  async doubleClickUpcoming0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.upcoming0));
  }

  async expectUpcoming0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.upcoming0), expected, timeoutMs);
  }

  async expectUpcoming0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.upcoming0), substring, timeoutMs);
  }

  async scrollUpcoming0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.upcoming0));
  }

  async clickHelpButton3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton3));
  }

  async doubleClickHelpButton3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton3));
  }

  async expectHelpButton3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.helpButton3), expected, timeoutMs);
  }

  async expectHelpButton3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.helpButton3), substring, timeoutMs);
  }

  async scrollHelpButton3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton3));
  }

  async clickMassChangeStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.massChangeStatus));
  }

  async doubleClickMassChangeStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.massChangeStatus));
  }

  async expectMassChangeStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.massChangeStatus), expected, timeoutMs);
  }

  async expectMassChangeStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.massChangeStatus), substring, timeoutMs);
  }

  async scrollMassChangeStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.massChangeStatus));
  }

  async clickMassChangeOwner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.massChangeOwner));
  }

  async doubleClickMassChangeOwner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.massChangeOwner));
  }

  async expectMassChangeOwnerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.massChangeOwner), expected, timeoutMs);
  }

  async expectMassChangeOwnerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.massChangeOwner), substring, timeoutMs);
  }

  async scrollMassChangeOwnerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.massChangeOwner));
  }

  async clickSendListEmailAction(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.sendListEmailAction));
  }

  async doubleClickSendListEmailAction(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.sendListEmailAction));
  }

  async expectSendListEmailActionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.sendListEmailAction), expected, timeoutMs);
  }

  async expectSendListEmailActionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.sendListEmailAction), substring, timeoutMs);
  }

  async scrollSendListEmailActionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.sendListEmailAction));
  }

  async clickMassAssignRecordLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel));
  }

  async doubleClickMassAssignRecordLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel));
  }

  async expectMassAssignRecordLabelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), expected, timeoutMs);
  }

  async expectMassAssignRecordLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), substring, timeoutMs);
  }

  async scrollMassAssignRecordLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel));
  }

  async getInnerTextGetYourLeadPipeline(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline));
  }

  async expectGetYourLeadPipelineVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), expected, timeoutMs);
  }

  async expectGetYourLeadPipelineContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), substring, timeoutMs);
  }

  async scrollGetYourLeadPipelineIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline));
  }

  async getInnerTextWhenThereAreLeads(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.whenThereAreLeads));
  }

  async expectWhenThereAreLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), expected, timeoutMs);
  }

  async expectWhenThereAreLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), substring, timeoutMs);
  }

  async scrollWhenThereAreLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.whenThereAreLeads));
  }

  async clickToDoList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.toDoList));
  }

  async doubleClickToDoList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.toDoList));
  }

  async expectToDoListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.toDoList), timeoutMs);
  }

  async expectToDoListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.toDoList), timeoutMs);
  }

  async expectToDoListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.toDoList), timeoutMs);
  }

  async expectToDoListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.toDoList), timeoutMs);
  }

  async expectToDoListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.toDoList), expected, timeoutMs);
  }

  async expectToDoListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.toDoList), substring, timeoutMs);
  }

  async scrollToDoListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.toDoList));
  }

  async clickCancelAndClose(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.cancelAndClose));
  }

  async doubleClickCancelAndClose(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.cancelAndClose));
  }

  async expectCancelAndCloseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.cancelAndClose), expected, timeoutMs);
  }

  async expectCancelAndCloseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.cancelAndClose), substring, timeoutMs);
  }

  async scrollCancelAndCloseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.cancelAndClose));
  }

  async getInnerTextNewLead(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.newLead));
  }

  async expectNewLeadVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.newLead), expected, timeoutMs);
  }

  async expectNewLeadContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.newLead), substring, timeoutMs);
  }

  async scrollNewLeadIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.newLead));
  }

  async getInnerTextLeadInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.leadInformation));
  }

  async expectLeadInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadInformation), expected, timeoutMs);
  }

  async expectLeadInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadInformation), substring, timeoutMs);
  }

  async scrollLeadInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadInformation));
  }

  async getInnerTextLeadOwner(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwner));
  }

  async expectLeadOwnerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadOwner), expected, timeoutMs);
  }

  async expectLeadOwnerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadOwner), substring, timeoutMs);
  }

  async scrollLeadOwnerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwner));
  }

  async fillPhone(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.phone), value);
  }

  async clearPhone(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.phone));
  }

  async typeTextPhone(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.phone), value);
  }

  async expectPhoneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.phone), expected, timeoutMs);
  }

  async expectPhoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async scrollPhoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.phone));
  }

  async getInnerTextName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.name));
  }

  async expectNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.name), expected, timeoutMs);
  }

  async expectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.name), substring, timeoutMs);
  }

  async scrollNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.name));
  }

  async clickSalutation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async doubleClickSalutation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async expectSalutationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.salutation), expected, timeoutMs);
  }

  async expectSalutationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.salutation), substring, timeoutMs);
  }

  async scrollSalutationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async fillFirstName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.firstName), value);
  }

  async clearFirstName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.firstName));
  }

  async typeTextFirstName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.firstName), value);
  }

  async expectFirstNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.firstName), expected, timeoutMs);
  }

  async expectFirstNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async scrollFirstNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.firstName));
  }

  async fillLastName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.lastName), value);
  }

  async clearLastName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.lastName));
  }

  async typeTextLastName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.lastName), value);
  }

  async expectLastNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.lastName), expected, timeoutMs);
  }

  async expectLastNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async scrollLastNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.lastName));
  }

  async fillMobilePhone(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone), value);
  }

  async clearMobilePhone(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone));
  }

  async typeTextMobilePhone(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone), value);
  }

  async expectMobilePhoneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.mobilePhone), expected, timeoutMs);
  }

  async expectMobilePhoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async scrollMobilePhoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone));
  }

  async fillCompany(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.company), value);
  }

  async clearCompany(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.company));
  }

  async typeTextCompany(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.company), value);
  }

  async expectCompanyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.company), expected, timeoutMs);
  }

  async expectCompanyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async scrollCompanyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.company));
  }

  async fillFax(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.fax), value);
  }

  async clearFax(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.fax));
  }

  async typeTextFax(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.fax), value);
  }

  async expectFaxVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.fax), expected, timeoutMs);
  }

  async expectFaxFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async scrollFaxIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.fax));
  }

  async fillTitle(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.title), value);
  }

  async clearTitle(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.title));
  }

  async typeTextTitle(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.title), value);
  }

  async expectTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.title), expected, timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.title));
  }

  async fillEmail(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.email), value);
  }

  async clearEmail(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.email));
  }

  async typeTextEmail(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.email), value);
  }

  async expectEmailVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.email), expected, timeoutMs);
  }

  async expectEmailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async scrollEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.email));
  }

  async clickLeadSource(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async doubleClickLeadSource(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async expectLeadSourceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadSource), expected, timeoutMs);
  }

  async expectLeadSourceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadSource), substring, timeoutMs);
  }

  async scrollLeadSourceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async fillWebsite(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.website), value);
  }

  async clearWebsite(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.website));
  }

  async typeTextWebsite(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.website), value);
  }

  async expectWebsiteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.website), expected, timeoutMs);
  }

  async expectWebsiteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async scrollWebsiteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.website));
  }

  async clickIndustry(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async doubleClickIndustry(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async expectIndustryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.industry), expected, timeoutMs);
  }

  async expectIndustryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.industry), substring, timeoutMs);
  }

  async scrollIndustryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async clickLeadStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadStatus));
  }

  async doubleClickLeadStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadStatus));
  }

  async expectLeadStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadStatus), expected, timeoutMs);
  }

  async expectLeadStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadStatus), substring, timeoutMs);
  }

  async scrollLeadStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadStatus));
  }

  async fillAnnualRevenue(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.annualRevenue), value);
  }

  async clearAnnualRevenue(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.annualRevenue));
  }

  async typeTextAnnualRevenue(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.annualRevenue), value);
  }

  async expectAnnualRevenueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.annualRevenue), expected, timeoutMs);
  }

  async expectAnnualRevenueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async scrollAnnualRevenueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.annualRevenue));
  }

  async clickRating(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.rating));
  }

  async doubleClickRating(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.rating));
  }

  async expectRatingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.rating), expected, timeoutMs);
  }

  async expectRatingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.rating), substring, timeoutMs);
  }

  async scrollRatingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.rating));
  }

  async fillNumberOfEmployees(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees), value);
  }

  async clearNumberOfEmployees(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees));
  }

  async typeTextNumberOfEmployees(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees), value);
  }

  async expectNumberOfEmployeesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.numberOfEmployees), expected, timeoutMs);
  }

  async expectNumberOfEmployeesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async scrollNumberOfEmployeesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees));
  }

  async getInnerTextAddressInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.addressInformation));
  }

  async expectAddressInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.addressInformation), expected, timeoutMs);
  }

  async expectAddressInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.addressInformation), substring, timeoutMs);
  }

  async scrollAddressInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.addressInformation));
  }

  async getInnerTextAddress(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.address));
  }

  async expectAddressVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.address), expected, timeoutMs);
  }

  async expectAddressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.address), substring, timeoutMs);
  }

  async scrollAddressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.address));
  }

  async fillCountry(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.country), value);
  }

  async clearCountry(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.country));
  }

  async typeTextCountry(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.country), value);
  }

  async expectCountryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.country), expected, timeoutMs);
  }

  async expectCountryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async scrollCountryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.country));
  }

  async fillStreet(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.street), value);
  }

  async clearStreet(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.street));
  }

  async typeTextStreet(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.street), value);
  }

  async expectStreetVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.street), expected, timeoutMs);
  }

  async expectStreetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async scrollStreetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.street));
  }

  async fillCity(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.city), value);
  }

  async clearCity(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.city));
  }

  async typeTextCity(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.city), value);
  }

  async expectCityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.city), expected, timeoutMs);
  }

  async expectCityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async scrollCityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.city));
  }

  async fillProvince(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.province), value);
  }

  async clearProvince(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.province));
  }

  async typeTextProvince(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.province), value);
  }

  async expectProvinceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.province), expected, timeoutMs);
  }

  async expectProvinceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async scrollProvinceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.province));
  }

  async fillPostalCode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode), value);
  }

  async clearPostalCode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode));
  }

  async typeTextPostalCode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode), value);
  }

  async expectPostalCodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.postalCode), expected, timeoutMs);
  }

  async expectPostalCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async scrollPostalCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode));
  }

  async getInnerTextAdditionalInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.additionalInformation));
  }

  async expectAdditionalInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.additionalInformation), expected, timeoutMs);
  }

  async expectAdditionalInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.additionalInformation), substring, timeoutMs);
  }

  async scrollAdditionalInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.additionalInformation));
  }

  async clickProductInterest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async doubleClickProductInterest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async expectProductInterestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.productInterest), expected, timeoutMs);
  }

  async expectProductInterestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.productInterest), substring, timeoutMs);
  }

  async scrollProductInterestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async fillCurrentGeneratorsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), value);
  }

  async clearCurrentGeneratorsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC));
  }

  async typeTextCurrentGeneratorsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), value);
  }

  async expectCurrentGeneratorsCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), expected, timeoutMs);
  }

  async expectCurrentGeneratorsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async scrollCurrentGeneratorsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC));
  }

  async fillSICCodeC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC), value);
  }

  async clearSICCodeC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC));
  }

  async typeTextSICCodeC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC), value);
  }

  async expectSICCodeCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.sICCodeC), expected, timeoutMs);
  }

  async expectSICCodeCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async scrollSICCodeCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC));
  }

  async clickPrimary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async doubleClickPrimary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async expectPrimaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.primary), expected, timeoutMs);
  }

  async expectPrimaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.primary), substring, timeoutMs);
  }

  async scrollPrimaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async fillNumberofLocationsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC), value);
  }

  async clearNumberofLocationsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC));
  }

  async typeTextNumberofLocationsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC), value);
  }

  async expectNumberofLocationsCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.numberofLocationsC), expected, timeoutMs);
  }

  async expectNumberofLocationsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async scrollNumberofLocationsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC));
  }

  async getInnerTextDescriptionInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation));
  }

  async expectDescriptionInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.descriptionInformation), expected, timeoutMs);
  }

  async expectDescriptionInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.descriptionInformation), substring, timeoutMs);
  }

  async scrollDescriptionInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation));
  }

  async clickCancelEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async doubleClickCancelEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async expectCancelEditVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.cancelEdit), expected, timeoutMs);
  }

  async expectCancelEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.cancelEdit), substring, timeoutMs);
  }

  async scrollCancelEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async clickSaveAndNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async doubleClickSaveAndNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async expectSaveAndNewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.saveAndNew), expected, timeoutMs);
  }

  async expectSaveAndNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.saveAndNew), substring, timeoutMs);
  }

  async scrollSaveAndNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async clickSaveEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async doubleClickSaveEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async expectSaveEditVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.saveEdit), expected, timeoutMs);
  }

  async expectSaveEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.saveEdit), substring, timeoutMs);
  }

  async scrollSaveEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async longPressSkipToNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.skipToNavigation));
  }

  async expectSkipToNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.skipToNavigation), value, timeoutMs);
  }

  async expectSkipToNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.skipToNavigation), count, timeoutMs);
  }

  async longPressSkipToMainContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.skipToMainContent));
  }

  async expectSkipToMainContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.skipToMainContent), value, timeoutMs);
  }

  async expectSkipToMainContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.skipToMainContent), count, timeoutMs);
  }

  async longPressTogglePanel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.togglePanel));
  }

  async expectTogglePanelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.togglePanel), value, timeoutMs);
  }

  async expectTogglePanelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.togglePanel), count, timeoutMs);
  }

  async clickDeveloperEdition(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.developerEdition));
  }

  async doubleClickDeveloperEdition(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.developerEdition));
  }

  async longPressDeveloperEdition(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.developerEdition));
  }

  async expectDeveloperEditionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.developerEdition), value, timeoutMs);
  }

  async expectDeveloperEditionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.developerEdition), count, timeoutMs);
  }

  async longPressShowMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.showMenu));
  }

  async expectShowMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.showMenu), value, timeoutMs);
  }

  async expectShowMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.showMenu), count, timeoutMs);
  }

  async longPressSearch(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.search));
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.search), value, timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.search), count, timeoutMs);
  }

  async clickThisItemDoesnTSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport));
  }

  async doubleClickThisItemDoesnTSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport));
  }

  async longPressThisItemDoesnTSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport));
  }

  async expectThisItemDoesnTSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), value, timeoutMs);
  }

  async expectThisItemDoesnTSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupport), count, timeoutMs);
  }

  async longPressThisItemDoesnTSupportButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton));
  }

  async expectThisItemDoesnTSupportButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), value, timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.thisItemDoesnTSupportButton), count, timeoutMs);
  }

  async longPressFavoritesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.favoritesList));
  }

  async expectFavoritesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.favoritesList), value, timeoutMs);
  }

  async expectFavoritesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.favoritesList), count, timeoutMs);
  }

  async longPressGlobalActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.globalActions));
  }

  async expectGlobalActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.globalActions), value, timeoutMs);
  }

  async expectGlobalActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.globalActions), count, timeoutMs);
  }

  async longPressGuidanceCenter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.guidanceCenter));
  }

  async expectGuidanceCenterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.guidanceCenter), value, timeoutMs);
  }

  async expectGuidanceCenterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.guidanceCenter), count, timeoutMs);
  }

  async longPressSalesforceHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.salesforceHelp));
  }

  async expectSalesforceHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.salesforceHelp), value, timeoutMs);
  }

  async expectSalesforceHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.salesforceHelp), count, timeoutMs);
  }

  async longPressSetup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.setup));
  }

  async expectSetupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.setup), value, timeoutMs);
  }

  async expectSetupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.setup), timeoutMs);
  }

  async expectSetupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.setup), timeoutMs);
  }

  async expectSetupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.setup), timeoutMs);
  }

  async expectSetupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.setup), timeoutMs);
  }

  async expectSetupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.setup), timeoutMs);
  }

  async expectSetupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.setup), count, timeoutMs);
  }

  async longPressNotifications(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.notifications));
  }

  async expectNotificationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.notifications), value, timeoutMs);
  }

  async expectNotificationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.notifications), timeoutMs);
  }

  async expectNotificationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.notifications), timeoutMs);
  }

  async expectNotificationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.notifications), timeoutMs);
  }

  async expectNotificationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.notifications), count, timeoutMs);
  }

  async longPressViewProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.viewProfile));
  }

  async expectViewProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.viewProfile), value, timeoutMs);
  }

  async expectViewProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.viewProfile), count, timeoutMs);
  }

  async longPressAppLauncher(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.appLauncher));
  }

  async expectAppLauncherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.appLauncher), value, timeoutMs);
  }

  async expectAppLauncherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.appLauncher), count, timeoutMs);
  }

  async clickSales(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.sales));
  }

  async doubleClickSales(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.sales));
  }

  async longPressSales(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.sales));
  }

  async expectSalesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.sales), value, timeoutMs);
  }

  async expectSalesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.sales), timeoutMs);
  }

  async expectSalesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.sales), timeoutMs);
  }

  async expectSalesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.sales), timeoutMs);
  }

  async expectSalesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.sales), timeoutMs);
  }

  async expectSalesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.sales), timeoutMs);
  }

  async expectSalesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.sales), count, timeoutMs);
  }

  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.home));
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.home), count, timeoutMs);
  }

  async longPressOpportunities(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.opportunities));
  }

  async expectOpportunitiesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.opportunities), value, timeoutMs);
  }

  async expectOpportunitiesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.opportunities), count, timeoutMs);
  }

  async longPressOpportunitiesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.opportunitiesList));
  }

  async expectOpportunitiesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.opportunitiesList), value, timeoutMs);
  }

  async expectOpportunitiesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.opportunitiesList), count, timeoutMs);
  }

  async longPressLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leads));
  }

  async expectLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leads), value, timeoutMs);
  }

  async expectLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leads), timeoutMs);
  }

  async expectLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leads), timeoutMs);
  }

  async expectLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leads), timeoutMs);
  }

  async expectLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leads), timeoutMs);
  }

  async expectLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leads), timeoutMs);
  }

  async expectLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leads), count, timeoutMs);
  }

  async longPressLeadsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadsList));
  }

  async expectLeadsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadsList), value, timeoutMs);
  }

  async expectLeadsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadsList), count, timeoutMs);
  }

  async longPressTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.tasks));
  }

  async expectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.tasks), value, timeoutMs);
  }

  async expectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.tasks), timeoutMs);
  }

  async expectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.tasks), timeoutMs);
  }

  async expectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.tasks), timeoutMs);
  }

  async expectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.tasks), timeoutMs);
  }

  async expectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.tasks), timeoutMs);
  }

  async expectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.tasks), count, timeoutMs);
  }

  async longPressTasksList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.tasksList));
  }

  async expectTasksListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.tasksList), value, timeoutMs);
  }

  async expectTasksListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.tasksList), timeoutMs);
  }

  async expectTasksListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.tasksList), timeoutMs);
  }

  async expectTasksListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.tasksList), timeoutMs);
  }

  async expectTasksListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.tasksList), timeoutMs);
  }

  async expectTasksListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.tasksList), timeoutMs);
  }

  async expectTasksListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.tasksList), count, timeoutMs);
  }

  async longPressFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.files));
  }

  async expectFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.files), value, timeoutMs);
  }

  async expectFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.files), timeoutMs);
  }

  async expectFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.files), timeoutMs);
  }

  async expectFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.files), timeoutMs);
  }

  async expectFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.files), timeoutMs);
  }

  async expectFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.files), timeoutMs);
  }

  async expectFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.files), count, timeoutMs);
  }

  async longPressFilesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.filesList));
  }

  async expectFilesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.filesList), value, timeoutMs);
  }

  async expectFilesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.filesList), timeoutMs);
  }

  async expectFilesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.filesList), timeoutMs);
  }

  async expectFilesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.filesList), timeoutMs);
  }

  async expectFilesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.filesList), timeoutMs);
  }

  async expectFilesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.filesList), timeoutMs);
  }

  async expectFilesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.filesList), count, timeoutMs);
  }

  async longPressAccounts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.accounts));
  }

  async expectAccountsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.accounts), value, timeoutMs);
  }

  async expectAccountsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.accounts), timeoutMs);
  }

  async expectAccountsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.accounts), timeoutMs);
  }

  async expectAccountsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.accounts), timeoutMs);
  }

  async expectAccountsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.accounts), timeoutMs);
  }

  async expectAccountsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.accounts), timeoutMs);
  }

  async expectAccountsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.accounts), count, timeoutMs);
  }

  async longPressAccountsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.accountsList));
  }

  async expectAccountsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.accountsList), value, timeoutMs);
  }

  async expectAccountsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.accountsList), count, timeoutMs);
  }

  async longPressContacts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.contacts));
  }

  async expectContactsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.contacts), value, timeoutMs);
  }

  async expectContactsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.contacts), timeoutMs);
  }

  async expectContactsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.contacts), timeoutMs);
  }

  async expectContactsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.contacts), timeoutMs);
  }

  async expectContactsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.contacts), timeoutMs);
  }

  async expectContactsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.contacts), timeoutMs);
  }

  async expectContactsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.contacts), count, timeoutMs);
  }

  async longPressContactsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.contactsList));
  }

  async expectContactsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.contactsList), value, timeoutMs);
  }

  async expectContactsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.contactsList), timeoutMs);
  }

  async expectContactsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.contactsList), timeoutMs);
  }

  async expectContactsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.contactsList), timeoutMs);
  }

  async expectContactsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.contactsList), timeoutMs);
  }

  async expectContactsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.contactsList), timeoutMs);
  }

  async expectContactsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.contactsList), count, timeoutMs);
  }

  async longPressCampaigns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.campaigns));
  }

  async expectCampaignsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.campaigns), value, timeoutMs);
  }

  async expectCampaignsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.campaigns), count, timeoutMs);
  }

  async longPressCampaignsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.campaignsList));
  }

  async expectCampaignsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.campaignsList), value, timeoutMs);
  }

  async expectCampaignsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.campaignsList), count, timeoutMs);
  }

  async longPressDashboards(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.dashboards));
  }

  async expectDashboardsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.dashboards), value, timeoutMs);
  }

  async expectDashboardsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.dashboards), count, timeoutMs);
  }

  async longPressDashboardsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.dashboardsList));
  }

  async expectDashboardsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.dashboardsList), value, timeoutMs);
  }

  async expectDashboardsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.dashboardsList), count, timeoutMs);
  }

  async longPressReports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.reports));
  }

  async expectReportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.reports), value, timeoutMs);
  }

  async expectReportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.reports), timeoutMs);
  }

  async expectReportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.reports), timeoutMs);
  }

  async expectReportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.reports), timeoutMs);
  }

  async expectReportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.reports), timeoutMs);
  }

  async expectReportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.reports), timeoutMs);
  }

  async expectReportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.reports), count, timeoutMs);
  }

  async longPressReportsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.reportsList));
  }

  async expectReportsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.reportsList), value, timeoutMs);
  }

  async expectReportsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.reportsList), timeoutMs);
  }

  async expectReportsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.reportsList), timeoutMs);
  }

  async expectReportsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.reportsList), timeoutMs);
  }

  async expectReportsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.reportsList), timeoutMs);
  }

  async expectReportsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.reportsList), timeoutMs);
  }

  async expectReportsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.reportsList), count, timeoutMs);
  }

  async longPressMoreShowMoreNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), value, timeoutMs);
  }

  async expectMoreShowMoreNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.moreShowMoreNavigation), count, timeoutMs);
  }

  async longPressPersonalizeYourNavBar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar));
  }

  async expectPersonalizeYourNavBarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), value, timeoutMs);
  }

  async expectPersonalizeYourNavBarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.personalizeYourNavBar), count, timeoutMs);
  }

  async clickLeadsMyLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadsMyLeads));
  }

  async doubleClickLeadsMyLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadsMyLeads));
  }

  async longPressLeadsMyLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadsMyLeads));
  }

  async expectLeadsMyLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadsMyLeads), value, timeoutMs);
  }

  async expectLeadsMyLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadsMyLeads), timeoutMs);
  }

  async expectLeadsMyLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadsMyLeads), count, timeoutMs);
  }

  async clickMyLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.myLeads));
  }

  async doubleClickMyLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.myLeads));
  }

  async longPressMyLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.myLeads));
  }

  async expectMyLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.myLeads), value, timeoutMs);
  }

  async expectMyLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.myLeads), count, timeoutMs);
  }

  async longPressSelectAListView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.selectAListView));
  }

  async expectSelectAListViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.selectAListView), value, timeoutMs);
  }

  async expectSelectAListViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.selectAListView), count, timeoutMs);
  }

  async longPressLeadViewSettings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadViewSettings));
  }

  async expectLeadViewSettingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadViewSettings), value, timeoutMs);
  }

  async expectLeadViewSettingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadViewSettings), timeoutMs);
  }

  async expectLeadViewSettingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadViewSettings), count, timeoutMs);
  }

  async longPressRefresh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.refresh));
  }

  async expectRefreshValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.refresh), value, timeoutMs);
  }

  async expectRefreshChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.refresh), timeoutMs);
  }

  async expectRefreshUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.refresh), timeoutMs);
  }

  async expectRefreshFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.refresh), timeoutMs);
  }

  async expectRefreshCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.refresh), count, timeoutMs);
  }

  async longPressInlineEditButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.inlineEditButton));
  }

  async expectInlineEditButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.inlineEditButton), value, timeoutMs);
  }

  async expectInlineEditButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.inlineEditButton), count, timeoutMs);
  }

  async longPressNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.new));
  }

  async expectNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.new), value, timeoutMs);
  }

  async expectNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.new), timeoutMs);
  }

  async expectNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.new), timeoutMs);
  }

  async expectNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.new), timeoutMs);
  }

  async expectNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.new), count, timeoutMs);
  }

  async longPressPipelineInspectionToListView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView));
  }

  async expectPipelineInspectionToListViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), value, timeoutMs);
  }

  async expectPipelineInspectionToListViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.pipelineInspectionToListView), count, timeoutMs);
  }

  async longPressTimePeriodFilterThis(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis));
  }

  async expectTimePeriodFilterThisValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), value, timeoutMs);
  }

  async expectTimePeriodFilterThisChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), timeoutMs);
  }

  async expectTimePeriodFilterThisCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.timePeriodFilterThis), count, timeoutMs);
  }

  async longPressLeadOwnerFilterMe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe));
  }

  async expectLeadOwnerFilterMeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), value, timeoutMs);
  }

  async expectLeadOwnerFilterMeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), timeoutMs);
  }

  async expectLeadOwnerFilterMeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadOwnerFilterMe), count, timeoutMs);
  }

  async longPressImportantLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.importantLeads));
  }

  async expectImportantLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.importantLeads), value, timeoutMs);
  }

  async expectImportantLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.importantLeads), timeoutMs);
  }

  async expectImportantLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.importantLeads), count, timeoutMs);
  }

  async clickApplyImportantLeadsFilter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter));
  }

  async doubleClickApplyImportantLeadsFilter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter));
  }

  async longPressApplyImportantLeadsFilter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter));
  }

  async expectApplyImportantLeadsFilterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), value, timeoutMs);
  }

  async expectApplyImportantLeadsFilterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), timeoutMs);
  }

  async expectApplyImportantLeadsFilterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.applyImportantLeadsFilter), count, timeoutMs);
  }

  async clickPriorityRecordFilterButtonTooltip(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip));
  }

  async doubleClickPriorityRecordFilterButtonTooltip(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip));
  }

  async longPressPriorityRecordFilterButtonTooltip(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip));
  }

  async expectPriorityRecordFilterButtonTooltipValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), value, timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), timeoutMs);
  }

  async expectPriorityRecordFilterButtonTooltipCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.priorityRecordFilterButtonTooltip), count, timeoutMs);
  }

  async longPressShowFilters(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.showFilters));
  }

  async expectShowFiltersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.showFilters), value, timeoutMs);
  }

  async expectShowFiltersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.showFilters), timeoutMs);
  }

  async expectShowFiltersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.showFilters), count, timeoutMs);
  }

  async longPressTotalLeads0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.totalLeads0));
  }

  async expectTotalLeads0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.totalLeads0), value, timeoutMs);
  }

  async expectTotalLeads0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.totalLeads0), timeoutMs);
  }

  async expectTotalLeads0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.totalLeads0), count, timeoutMs);
  }

  async longPressNoActivity0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.noActivity0));
  }

  async expectNoActivity0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.noActivity0), value, timeoutMs);
  }

  async expectNoActivity0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.noActivity0), timeoutMs);
  }

  async expectNoActivity0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.noActivity0), count, timeoutMs);
  }

  async longPressHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.help));
  }

  async expectHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.help), value, timeoutMs);
  }

  async expectHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.help), timeoutMs);
  }

  async expectHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.help), timeoutMs);
  }

  async expectHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.help), timeoutMs);
  }

  async expectHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.help), count, timeoutMs);
  }

  async longPressIdle0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.idle0));
  }

  async expectIdle0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.idle0), value, timeoutMs);
  }

  async expectIdle0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.idle0), timeoutMs);
  }

  async expectIdle0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.idle0), timeoutMs);
  }

  async expectIdle0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.idle0), timeoutMs);
  }

  async expectIdle0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.idle0), count, timeoutMs);
  }

  async longPressHelpButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton));
  }

  async expectHelpButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.helpButton), value, timeoutMs);
  }

  async expectHelpButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.helpButton), timeoutMs);
  }

  async expectHelpButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.helpButton), count, timeoutMs);
  }

  async longPressNoUpcoming0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.noUpcoming0));
  }

  async expectNoUpcoming0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.noUpcoming0), value, timeoutMs);
  }

  async expectNoUpcoming0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.noUpcoming0), timeoutMs);
  }

  async expectNoUpcoming0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.noUpcoming0), count, timeoutMs);
  }

  async longPressHelpButton2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton2));
  }

  async expectHelpButton2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.helpButton2), value, timeoutMs);
  }

  async expectHelpButton2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.helpButton2), timeoutMs);
  }

  async expectHelpButton2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.helpButton2), count, timeoutMs);
  }

  async longPressOverdue0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.overdue0));
  }

  async expectOverdue0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.overdue0), value, timeoutMs);
  }

  async expectOverdue0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.overdue0), timeoutMs);
  }

  async expectOverdue0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.overdue0), count, timeoutMs);
  }

  async longPressDueToday0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.dueToday0));
  }

  async expectDueToday0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.dueToday0), value, timeoutMs);
  }

  async expectDueToday0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.dueToday0), timeoutMs);
  }

  async expectDueToday0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.dueToday0), count, timeoutMs);
  }

  async longPressUpcoming0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.upcoming0));
  }

  async expectUpcoming0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.upcoming0), value, timeoutMs);
  }

  async expectUpcoming0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.upcoming0), timeoutMs);
  }

  async expectUpcoming0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.upcoming0), count, timeoutMs);
  }

  async longPressHelpButton3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.helpButton3));
  }

  async expectHelpButton3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.helpButton3), value, timeoutMs);
  }

  async expectHelpButton3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.helpButton3), timeoutMs);
  }

  async expectHelpButton3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.helpButton3), count, timeoutMs);
  }

  async longPressMassChangeStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.massChangeStatus));
  }

  async expectMassChangeStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.massChangeStatus), value, timeoutMs);
  }

  async expectMassChangeStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.massChangeStatus), count, timeoutMs);
  }

  async longPressMassChangeOwner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.massChangeOwner));
  }

  async expectMassChangeOwnerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.massChangeOwner), value, timeoutMs);
  }

  async expectMassChangeOwnerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.massChangeOwner), count, timeoutMs);
  }

  async longPressSendListEmailAction(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.sendListEmailAction));
  }

  async expectSendListEmailActionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.sendListEmailAction), value, timeoutMs);
  }

  async expectSendListEmailActionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.sendListEmailAction), count, timeoutMs);
  }

  async longPressMassAssignRecordLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel));
  }

  async expectMassAssignRecordLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), value, timeoutMs);
  }

  async expectMassAssignRecordLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.massAssignRecordLabel), count, timeoutMs);
  }

  async clickGetYourLeadPipeline(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline));
  }

  async doubleClickGetYourLeadPipeline(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline));
  }

  async longPressGetYourLeadPipeline(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline));
  }

  async expectGetYourLeadPipelineValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), value, timeoutMs);
  }

  async expectGetYourLeadPipelineEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), timeoutMs);
  }

  async expectGetYourLeadPipelineCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.getYourLeadPipeline), count, timeoutMs);
  }

  async clickWhenThereAreLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.whenThereAreLeads));
  }

  async doubleClickWhenThereAreLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.whenThereAreLeads));
  }

  async longPressWhenThereAreLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.whenThereAreLeads));
  }

  async expectWhenThereAreLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), value, timeoutMs);
  }

  async expectWhenThereAreLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), timeoutMs);
  }

  async expectWhenThereAreLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.whenThereAreLeads), count, timeoutMs);
  }

  async longPressToDoList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.toDoList));
  }

  async expectToDoListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.toDoList), value, timeoutMs);
  }

  async expectToDoListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.toDoList), timeoutMs);
  }

  async expectToDoListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.toDoList), timeoutMs);
  }

  async expectToDoListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.toDoList), timeoutMs);
  }

  async expectToDoListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.toDoList), count, timeoutMs);
  }

  async longPressCancelAndClose(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.cancelAndClose));
  }

  async expectCancelAndCloseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.cancelAndClose), value, timeoutMs);
  }

  async expectCancelAndCloseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.cancelAndClose), count, timeoutMs);
  }

  async clickNewLead(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.newLead));
  }

  async doubleClickNewLead(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.newLead));
  }

  async longPressNewLead(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.newLead));
  }

  async expectNewLeadValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.newLead), value, timeoutMs);
  }

  async expectNewLeadEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.newLead), count, timeoutMs);
  }

  async clickLeadInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadInformation));
  }

  async doubleClickLeadInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadInformation));
  }

  async longPressLeadInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadInformation));
  }

  async expectLeadInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadInformation), value, timeoutMs);
  }

  async expectLeadInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadInformation), count, timeoutMs);
  }

  async clickLeadOwner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwner));
  }

  async doubleClickLeadOwner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwner));
  }

  async longPressLeadOwner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwner));
  }

  async expectLeadOwnerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadOwner), value, timeoutMs);
  }

  async expectLeadOwnerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadOwner), count, timeoutMs);
  }

  async expectPhoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.phone), expected, timeoutMs);
  }

  async expectPhoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.phone), substring, timeoutMs);
  }

  async expectPhoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.phone), count, timeoutMs);
  }

  async clickName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.name));
  }

  async doubleClickName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.name));
  }

  async longPressName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.name));
  }

  async expectNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.name), value, timeoutMs);
  }

  async expectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.name), count, timeoutMs);
  }

  async longPressSalutation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async expectSalutationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.salutation), value, timeoutMs);
  }

  async expectSalutationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.salutation), count, timeoutMs);
  }

  async expectFirstNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.firstName), expected, timeoutMs);
  }

  async expectFirstNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.firstName), substring, timeoutMs);
  }

  async expectFirstNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.firstName), count, timeoutMs);
  }

  async expectLastNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.lastName), expected, timeoutMs);
  }

  async expectLastNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.lastName), substring, timeoutMs);
  }

  async expectLastNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.lastName), count, timeoutMs);
  }

  async expectMobilePhoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.mobilePhone), expected, timeoutMs);
  }

  async expectMobilePhoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.mobilePhone), substring, timeoutMs);
  }

  async expectMobilePhoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.mobilePhone), count, timeoutMs);
  }

  async expectCompanyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.company), expected, timeoutMs);
  }

  async expectCompanyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.company), substring, timeoutMs);
  }

  async expectCompanyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.company), count, timeoutMs);
  }

  async expectFaxText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.fax), expected, timeoutMs);
  }

  async expectFaxContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.fax), substring, timeoutMs);
  }

  async expectFaxChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.fax), count, timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.title), expected, timeoutMs);
  }

  async expectTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.title), substring, timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.title), count, timeoutMs);
  }

  async expectEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.email), expected, timeoutMs);
  }

  async expectEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.email), substring, timeoutMs);
  }

  async expectEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.email), count, timeoutMs);
  }

  async longPressLeadSource(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async expectLeadSourceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadSource), value, timeoutMs);
  }

  async expectLeadSourceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadSource), count, timeoutMs);
  }

  async expectWebsiteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.website), expected, timeoutMs);
  }

  async expectWebsiteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.website), substring, timeoutMs);
  }

  async expectWebsiteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.website), count, timeoutMs);
  }

  async longPressIndustry(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async expectIndustryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.industry), value, timeoutMs);
  }

  async expectIndustryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.industry), count, timeoutMs);
  }

  async longPressLeadStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadStatus));
  }

  async expectLeadStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadStatus), value, timeoutMs);
  }

  async expectLeadStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadStatus), count, timeoutMs);
  }

  async expectAnnualRevenueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.annualRevenue), expected, timeoutMs);
  }

  async expectAnnualRevenueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.annualRevenue), substring, timeoutMs);
  }

  async expectAnnualRevenueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.annualRevenue), count, timeoutMs);
  }

  async longPressRating(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.rating));
  }

  async expectRatingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.rating), value, timeoutMs);
  }

  async expectRatingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.rating), count, timeoutMs);
  }

  async expectNumberOfEmployeesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.numberOfEmployees), expected, timeoutMs);
  }

  async expectNumberOfEmployeesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.numberOfEmployees), substring, timeoutMs);
  }

  async expectNumberOfEmployeesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.numberOfEmployees), count, timeoutMs);
  }

  async clickAddressInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.addressInformation));
  }

  async doubleClickAddressInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.addressInformation));
  }

  async longPressAddressInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.addressInformation));
  }

  async expectAddressInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.addressInformation), value, timeoutMs);
  }

  async expectAddressInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.addressInformation), count, timeoutMs);
  }

  async clickAddress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.address));
  }

  async doubleClickAddress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.address));
  }

  async longPressAddress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.address));
  }

  async expectAddressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.address), value, timeoutMs);
  }

  async expectAddressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.address), count, timeoutMs);
  }

  async expectCountryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.country), expected, timeoutMs);
  }

  async expectCountryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.country), substring, timeoutMs);
  }

  async expectCountryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.country), count, timeoutMs);
  }

  async expectStreetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.street), expected, timeoutMs);
  }

  async expectStreetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.street), substring, timeoutMs);
  }

  async expectStreetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.street), count, timeoutMs);
  }

  async expectCityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.city), expected, timeoutMs);
  }

  async expectCityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.city), substring, timeoutMs);
  }

  async expectCityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.city), count, timeoutMs);
  }

  async expectProvinceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.province), expected, timeoutMs);
  }

  async expectProvinceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.province), substring, timeoutMs);
  }

  async expectProvinceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.province), count, timeoutMs);
  }

  async expectPostalCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.postalCode), expected, timeoutMs);
  }

  async expectPostalCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.postalCode), substring, timeoutMs);
  }

  async expectPostalCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.postalCode), count, timeoutMs);
  }

  async clickAdditionalInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.additionalInformation));
  }

  async doubleClickAdditionalInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.additionalInformation));
  }

  async longPressAdditionalInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.additionalInformation));
  }

  async expectAdditionalInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.additionalInformation), value, timeoutMs);
  }

  async expectAdditionalInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.additionalInformation), count, timeoutMs);
  }

  async longPressProductInterest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async expectProductInterestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.productInterest), value, timeoutMs);
  }

  async expectProductInterestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.productInterest), count, timeoutMs);
  }

  async expectCurrentGeneratorsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), expected, timeoutMs);
  }

  async expectCurrentGeneratorsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), substring, timeoutMs);
  }

  async expectCurrentGeneratorsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), count, timeoutMs);
  }

  async expectSICCodeCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.sICCodeC), expected, timeoutMs);
  }

  async expectSICCodeCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.sICCodeC), substring, timeoutMs);
  }

  async expectSICCodeCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.sICCodeC), count, timeoutMs);
  }

  async longPressPrimary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async expectPrimaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.primary), value, timeoutMs);
  }

  async expectPrimaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.primary), count, timeoutMs);
  }

  async expectNumberofLocationsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.numberofLocationsC), expected, timeoutMs);
  }

  async expectNumberofLocationsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.numberofLocationsC), substring, timeoutMs);
  }

  async expectNumberofLocationsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.numberofLocationsC), count, timeoutMs);
  }

  async clickDescriptionInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation));
  }

  async doubleClickDescriptionInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation));
  }

  async longPressDescriptionInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation));
  }

  async expectDescriptionInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.descriptionInformation), value, timeoutMs);
  }

  async expectDescriptionInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.descriptionInformation), count, timeoutMs);
  }

  async longPressCancelEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async expectCancelEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.cancelEdit), value, timeoutMs);
  }

  async expectCancelEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.cancelEdit), count, timeoutMs);
  }

  async longPressSaveAndNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async expectSaveAndNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.saveAndNew), value, timeoutMs);
  }

  async expectSaveAndNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.saveAndNew), count, timeoutMs);
  }

  async longPressSaveEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async expectSaveEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.saveEdit), value, timeoutMs);
  }

  async expectSaveEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.saveEdit), count, timeoutMs);
  }

}
