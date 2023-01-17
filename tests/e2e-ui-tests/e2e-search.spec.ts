import test, { expect } from "../../fixtures/page-objects";

test.describe("Search Results", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.openHP();
  });

  test.afterEach(async ({ navBar }) => {
    await expect(navBar.searchResultsTitle).toBeVisible();
    await expect(navBar.searchResultsTitle).toHaveText("Search Results:");
  });

  test("Should find results bank", async ({ navBar }) => {
    await navBar.searchFor("bank");
    await expect(navBar.numberOfSearchResults).toHaveCount(2);
  });

  test("Should find results loan", async ({ navBar }) => {
    await navBar.searchFor("loan");
    await expect(navBar.numberOfSearchResults).toHaveCount(1);
  });

  test("Show message for non existing results", async ({ navBar }) => {
    await navBar.searchFor("five");
    await expect(navBar.noSearchResults).toBeVisible();
  });
});
