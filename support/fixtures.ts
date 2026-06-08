import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pageobjects/HomePage";
import { LeadNewPage } from "../pageobjects/LeadNewPage";
import { LeadPipelineInspectionPage } from "../pageobjects/LeadPipelineInspectionPage";
import { LoginPage } from "../pageobjects/LoginPage";

type AppFixtures = {
  homePage: HomePage;
  leadNewPage: LeadNewPage;
  leadPipelineInspectionPage: LeadPipelineInspectionPage;
  loginPage: LoginPage;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  leadNewPage: async ({ page }, use) => {
    await use(new LeadNewPage(page));
  },
  leadPipelineInspectionPage: async ({ page }, use) => {
    await use(new LeadPipelineInspectionPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };
