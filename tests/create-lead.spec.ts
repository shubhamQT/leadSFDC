import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('E2E: Attempt to create Lead without Last Name and verify validation error', { tag: ["@e2e","@regression","@lead","@P1","@e2e-create-lead-missing-lastname"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter First Name', async () => {
    await leadNewPage.fillFirstName('John');
  });
  await test.step('Fill — Enter Company (mandatory)', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify validation error for missing Last Name', async () => {
    await leadNewPage.expectSaveEditVisible();

    await expect(page.locator('.errorsList li')).toBeVisible();
  });
});

test('E2E: Attempt to create Lead without Company and verify validation error', { tag: ["@e2e","@regression","@lead","@P1","@e2e-create-lead-missing-company"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter First Name', async () => {
    await leadNewPage.fillFirstName('John');
  });
  await test.step('Fill — Enter Last Name (mandatory)', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify validation error for missing Company', async () => {
    await leadNewPage.expectSaveEditVisible();
    await expect(page.locator('.errorsList li')).toBeVisible();
  });
});

test("E2E: Verify Lead Status is set to default after creation", { tag: ["@e2e","@regression","@lead","@P1","@e2e-lead-status-default"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter all mandatory fields', async () => {
    await leadNewPage.fillLastName('Smith');
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step("Assert text — Verify Lead Status is 'Open - Not Contacted'", async () => {
    await expect(page.locator("span[data-field='Status']")).toHaveText('Open - Not Contacted');
  });
});

test('Functional: Create Lead with only required fields', { tag: ["@functional","@regression","@lead","@P0","@functional-create-lead-required-fields"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter Last Name (mandatory)', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step('Fill — Enter Company (mandatory)', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify Lead record page is displayed', async () => {
    await expect(page.locator("h1[title='Smith']")).toBeVisible();
  });
});

test('Functional: Create Lead with all fields populated', { tag: ["@functional","@regression","@lead","@P1","@functional-create-lead-all-fields"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter First Name', async () => {
    await leadNewPage.fillFirstName('John');
  });
  await test.step('Fill — Enter Last Name (mandatory)', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step('Fill — Enter Company (mandatory)', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step('Fill — Enter Phone', async () => {
    await leadNewPage.fillPhone('9989876789');
  });
  await test.step('Fill — Enter Email', async () => {
    await leadNewPage.fillEmail('john.smith@example.com');
  });
  await test.step('Select — Select Lead Source', async () => {

    await page.selectOption('select[name="LeadSource"]', 'Web');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify Lead record page is displayed', async () => {
    await expect(page.locator("h1[title='Smith']")).toBeVisible();
  });
});

test('Functional: Show validation error when Last Name is blank', { tag: ["@functional","@regression","@lead","@P1","@functional-create-lead-missing-lastname"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter Company (mandatory)', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify validation error for missing Last Name', async () => {
    await leadNewPage.expectSaveEditVisible();
    await expect(page.locator('.errorsList li')).toBeVisible();
  });
});

test('Functional: Show validation error when Company is blank', { tag: ["@functional","@regression","@lead","@P1","@functional-create-lead-missing-company"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter Last Name (mandatory)', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify validation error for missing Company', async () => {
    await leadNewPage.expectSaveEditVisible();
    await expect(page.locator('.errorsList li')).toBeVisible();
  });
});
