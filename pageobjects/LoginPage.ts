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

export class LoginPage {
  private static readonly L = {
    salesforceLogin: { strategy: 'text' as const, value: 'Salesforce login', actionKind: 'text' as const },
    salesforceLogin2: { strategy: 'text' as const, value: 'Salesforce login', actionKind: 'text' as const },
    username: { strategy: 'css' as const, value: '#username[name="username"]', actionKind: 'textbox' as const },
    pw: { strategy: 'css' as const, value: '#password[name="pw"]', actionKind: 'textbox' as const },
    login: { strategy: 'css' as const, value: '#Login[name="Login"]', actionKind: 'generic' as const },
    rememberUn: { strategy: 'css' as const, value: '#rememberUn[name="rememberUn"]', actionKind: 'checkbox' as const },
    forgotYourPassword: { strategy: 'css' as const, value: '#forgot_password_link', actionKind: 'link' as const },
    useCustomDomain: { strategy: 'css' as const, value: '#mydomainLink', actionKind: 'link' as const },
    or: { strategy: 'text' as const, value: 'or', actionKind: 'text' as const },
    logInWithEmail: { strategy: 'css' as const, value: '#gidr-email-log-in-button', actionKind: 'link' as const },
    notACustomer: { strategy: 'text' as const, value: 'Not a customer?', actionKind: 'text' as const },
    tryForFree: { strategy: 'css' as const, value: '#signup_link', actionKind: 'link' as const },
    privacy: { strategy: 'css' as const, value: '#privacy-link', actionKind: 'link' as const },
    buildATrustedAI: { strategy: 'text' as const, value: 'Build a trusted AI strategy for your growing small', frame: 'iframe#marketing', actionKind: 'text' as const },
    clickHereToDownload: { strategy: 'label' as const, value: 'Click here to download the guide about AI for small businesses', frame: 'iframe#marketing', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextSalesforceLogin(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin));
  }

  async expectSalesforceLoginVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.salesforceLogin), expected, timeoutMs);
  }

  async expectSalesforceLoginContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.salesforceLogin), substring, timeoutMs);
  }

  async scrollSalesforceLoginIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin));
  }

  async getInnerTextSalesforceLogin2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin2));
  }

  async expectSalesforceLogin2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.salesforceLogin2), timeoutMs);
  }

  async expectSalesforceLogin2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.salesforceLogin2), timeoutMs);
  }

  async expectSalesforceLogin2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.salesforceLogin2), expected, timeoutMs);
  }

  async expectSalesforceLogin2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.salesforceLogin2), substring, timeoutMs);
  }

  async scrollSalesforceLogin2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin2));
  }

  async fillUsername(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.username), value);
  }

  async clearUsername(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async typeTextUsername(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.username), value);
  }

  async expectUsernameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.username), expected, timeoutMs);
  }

  async expectUsernameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async scrollUsernameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async fillPw(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.pw), value);
  }

  async clearPw(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.pw));
  }

  async typeTextPw(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.pw), value);
  }

  async expectPwVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.pw), expected, timeoutMs);
  }

  async expectPwFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async scrollPwIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.pw));
  }

  async clickLogin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async doubleClickLogin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async expectLoginVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.login), expected, timeoutMs);
  }

  async expectLoginContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.login), substring, timeoutMs);
  }

  async scrollLoginIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async checkRememberUn(): Promise<void> {
    await checkWhenVisible(webLocator(this.page, LoginPage.L.rememberUn));
  }

  async uncheckRememberUn(): Promise<void> {
    await uncheckWhenVisible(webLocator(this.page, LoginPage.L.rememberUn));
  }

  async expectRememberUnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.rememberUn), timeoutMs);
  }

  async expectRememberUnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.rememberUn), timeoutMs);
  }

  async expectRememberUnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.rememberUn), timeoutMs);
  }

  async expectRememberUnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.rememberUn), timeoutMs);
  }

  async expectRememberUnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.rememberUn), timeoutMs);
  }

  async expectRememberUnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.rememberUn), timeoutMs);
  }

  async scrollRememberUnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.rememberUn));
  }

  async clickForgotYourPassword(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.forgotYourPassword));
  }

  async doubleClickForgotYourPassword(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.forgotYourPassword));
  }

  async expectForgotYourPasswordVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.forgotYourPassword), expected, timeoutMs);
  }

  async expectForgotYourPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.forgotYourPassword), substring, timeoutMs);
  }

  async scrollForgotYourPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.forgotYourPassword));
  }

  async clickUseCustomDomain(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.useCustomDomain));
  }

  async doubleClickUseCustomDomain(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.useCustomDomain));
  }

  async expectUseCustomDomainVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.useCustomDomain), timeoutMs);
  }

  async expectUseCustomDomainHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.useCustomDomain), timeoutMs);
  }

  async expectUseCustomDomainText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.useCustomDomain), expected, timeoutMs);
  }

  async expectUseCustomDomainContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.useCustomDomain), substring, timeoutMs);
  }

  async scrollUseCustomDomainIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.useCustomDomain));
  }

  async getInnerTextOr(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.or));
  }

  async expectOrVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.or), expected, timeoutMs);
  }

  async expectOrContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.or), substring, timeoutMs);
  }

  async scrollOrIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.or));
  }

  async clickLogInWithEmail(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.logInWithEmail));
  }

  async doubleClickLogInWithEmail(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.logInWithEmail));
  }

  async expectLogInWithEmailVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.logInWithEmail), timeoutMs);
  }

  async expectLogInWithEmailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.logInWithEmail), timeoutMs);
  }

  async expectLogInWithEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.logInWithEmail), expected, timeoutMs);
  }

  async expectLogInWithEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.logInWithEmail), substring, timeoutMs);
  }

  async scrollLogInWithEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.logInWithEmail));
  }

  async getInnerTextNotACustomer(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.notACustomer));
  }

  async expectNotACustomerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.notACustomer), timeoutMs);
  }

  async expectNotACustomerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.notACustomer), timeoutMs);
  }

  async expectNotACustomerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.notACustomer), expected, timeoutMs);
  }

  async expectNotACustomerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.notACustomer), substring, timeoutMs);
  }

  async scrollNotACustomerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.notACustomer));
  }

  async clickTryForFree(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.tryForFree));
  }

  async doubleClickTryForFree(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.tryForFree));
  }

  async expectTryForFreeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.tryForFree), timeoutMs);
  }

  async expectTryForFreeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.tryForFree), timeoutMs);
  }

  async expectTryForFreeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.tryForFree), expected, timeoutMs);
  }

  async expectTryForFreeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.tryForFree), substring, timeoutMs);
  }

  async scrollTryForFreeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.tryForFree));
  }

  async clickPrivacy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.privacy));
  }

  async doubleClickPrivacy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.privacy));
  }

  async expectPrivacyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.privacy), timeoutMs);
  }

  async expectPrivacyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.privacy), timeoutMs);
  }

  async expectPrivacyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.privacy), expected, timeoutMs);
  }

  async expectPrivacyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.privacy), substring, timeoutMs);
  }

  async scrollPrivacyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.privacy));
  }

  async getInnerTextBuildATrustedAI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.buildATrustedAI));
  }

  async expectBuildATrustedAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.buildATrustedAI), timeoutMs);
  }

  async expectBuildATrustedAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.buildATrustedAI), timeoutMs);
  }

  async expectBuildATrustedAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.buildATrustedAI), expected, timeoutMs);
  }

  async expectBuildATrustedAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.buildATrustedAI), substring, timeoutMs);
  }

  async scrollBuildATrustedAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.buildATrustedAI));
  }

  async clickClickHereToDownload(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.clickHereToDownload));
  }

  async doubleClickClickHereToDownload(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.clickHereToDownload));
  }

  async expectClickHereToDownloadVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.clickHereToDownload), timeoutMs);
  }

  async expectClickHereToDownloadHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.clickHereToDownload), timeoutMs);
  }

  async expectClickHereToDownloadText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.clickHereToDownload), expected, timeoutMs);
  }

  async expectClickHereToDownloadContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.clickHereToDownload), substring, timeoutMs);
  }

  async scrollClickHereToDownloadIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.clickHereToDownload));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickSalesforceLogin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin));
  }

  async doubleClickSalesforceLogin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin));
  }

  async longPressSalesforceLogin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin));
  }

  async expectSalesforceLoginValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.salesforceLogin), value, timeoutMs);
  }

  async expectSalesforceLoginEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.salesforceLogin), count, timeoutMs);
  }

  async clickSalesforceLogin2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin2));
  }

  async doubleClickSalesforceLogin2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin2));
  }

  async longPressSalesforceLogin2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin2));
  }

  async expectSalesforceLogin2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.salesforceLogin2), value, timeoutMs);
  }

  async expectSalesforceLogin2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.salesforceLogin2), timeoutMs);
  }

  async expectSalesforceLogin2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.salesforceLogin2), timeoutMs);
  }

  async expectSalesforceLogin2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.salesforceLogin2), timeoutMs);
  }

  async expectSalesforceLogin2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.salesforceLogin2), timeoutMs);
  }

  async expectSalesforceLogin2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.salesforceLogin2), timeoutMs);
  }

  async expectSalesforceLogin2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.salesforceLogin2), count, timeoutMs);
  }

  async expectUsernameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.username), expected, timeoutMs);
  }

  async expectUsernameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.username), substring, timeoutMs);
  }

  async expectUsernameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.username), count, timeoutMs);
  }

  async expectPwText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.pw), expected, timeoutMs);
  }

  async expectPwContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.pw), substring, timeoutMs);
  }

  async expectPwChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.pw), count, timeoutMs);
  }

  async longPressLogin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async expectLoginValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.login), value, timeoutMs);
  }

  async expectLoginChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.login), count, timeoutMs);
  }

  async expectRememberUnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.rememberUn), expected, timeoutMs);
  }

  async expectRememberUnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.rememberUn), substring, timeoutMs);
  }

  async expectRememberUnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.rememberUn), value, timeoutMs);
  }

  async expectRememberUnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.rememberUn), timeoutMs);
  }

  async expectRememberUnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.rememberUn), count, timeoutMs);
  }

  async longPressForgotYourPassword(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.forgotYourPassword));
  }

  async expectForgotYourPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.forgotYourPassword), value, timeoutMs);
  }

  async expectForgotYourPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.forgotYourPassword), count, timeoutMs);
  }

  async longPressUseCustomDomain(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.useCustomDomain));
  }

  async expectUseCustomDomainValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.useCustomDomain), value, timeoutMs);
  }

  async expectUseCustomDomainEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.useCustomDomain), timeoutMs);
  }

  async expectUseCustomDomainDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.useCustomDomain), timeoutMs);
  }

  async expectUseCustomDomainChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.useCustomDomain), timeoutMs);
  }

  async expectUseCustomDomainUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.useCustomDomain), timeoutMs);
  }

  async expectUseCustomDomainFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.useCustomDomain), timeoutMs);
  }

  async expectUseCustomDomainCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.useCustomDomain), count, timeoutMs);
  }

  async clickOr(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.or));
  }

  async doubleClickOr(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.or));
  }

  async longPressOr(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.or));
  }

  async expectOrValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.or), value, timeoutMs);
  }

  async expectOrEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.or), count, timeoutMs);
  }

  async longPressLogInWithEmail(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.logInWithEmail));
  }

  async expectLogInWithEmailValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.logInWithEmail), value, timeoutMs);
  }

  async expectLogInWithEmailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.logInWithEmail), timeoutMs);
  }

  async expectLogInWithEmailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.logInWithEmail), timeoutMs);
  }

  async expectLogInWithEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.logInWithEmail), timeoutMs);
  }

  async expectLogInWithEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.logInWithEmail), timeoutMs);
  }

  async expectLogInWithEmailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.logInWithEmail), timeoutMs);
  }

  async expectLogInWithEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.logInWithEmail), count, timeoutMs);
  }

  async clickNotACustomer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.notACustomer));
  }

  async doubleClickNotACustomer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.notACustomer));
  }

  async longPressNotACustomer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.notACustomer));
  }

  async expectNotACustomerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.notACustomer), value, timeoutMs);
  }

  async expectNotACustomerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.notACustomer), timeoutMs);
  }

  async expectNotACustomerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.notACustomer), timeoutMs);
  }

  async expectNotACustomerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.notACustomer), timeoutMs);
  }

  async expectNotACustomerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.notACustomer), timeoutMs);
  }

  async expectNotACustomerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.notACustomer), timeoutMs);
  }

  async expectNotACustomerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.notACustomer), count, timeoutMs);
  }

  async longPressTryForFree(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.tryForFree));
  }

  async expectTryForFreeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.tryForFree), value, timeoutMs);
  }

  async expectTryForFreeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.tryForFree), timeoutMs);
  }

  async expectTryForFreeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.tryForFree), timeoutMs);
  }

  async expectTryForFreeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.tryForFree), timeoutMs);
  }

  async expectTryForFreeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.tryForFree), timeoutMs);
  }

  async expectTryForFreeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.tryForFree), timeoutMs);
  }

  async expectTryForFreeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.tryForFree), count, timeoutMs);
  }

  async longPressPrivacy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.privacy));
  }

  async expectPrivacyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.privacy), value, timeoutMs);
  }

  async expectPrivacyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.privacy), timeoutMs);
  }

  async expectPrivacyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.privacy), timeoutMs);
  }

  async expectPrivacyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.privacy), timeoutMs);
  }

  async expectPrivacyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.privacy), timeoutMs);
  }

  async expectPrivacyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.privacy), timeoutMs);
  }

  async expectPrivacyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.privacy), count, timeoutMs);
  }

  async clickBuildATrustedAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.buildATrustedAI));
  }

  async doubleClickBuildATrustedAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.buildATrustedAI));
  }

  async longPressBuildATrustedAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.buildATrustedAI));
  }

  async expectBuildATrustedAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.buildATrustedAI), value, timeoutMs);
  }

  async expectBuildATrustedAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.buildATrustedAI), timeoutMs);
  }

  async expectBuildATrustedAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.buildATrustedAI), timeoutMs);
  }

  async expectBuildATrustedAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.buildATrustedAI), timeoutMs);
  }

  async expectBuildATrustedAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.buildATrustedAI), timeoutMs);
  }

  async expectBuildATrustedAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.buildATrustedAI), timeoutMs);
  }

  async expectBuildATrustedAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.buildATrustedAI), count, timeoutMs);
  }

  async longPressClickHereToDownload(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.clickHereToDownload));
  }

  async expectClickHereToDownloadValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.clickHereToDownload), value, timeoutMs);
  }

  async expectClickHereToDownloadEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.clickHereToDownload), timeoutMs);
  }

  async expectClickHereToDownloadDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.clickHereToDownload), timeoutMs);
  }

  async expectClickHereToDownloadChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.clickHereToDownload), timeoutMs);
  }

  async expectClickHereToDownloadUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.clickHereToDownload), timeoutMs);
  }

  async expectClickHereToDownloadFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.clickHereToDownload), timeoutMs);
  }

  async expectClickHereToDownloadCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.clickHereToDownload), count, timeoutMs);
  }

}
