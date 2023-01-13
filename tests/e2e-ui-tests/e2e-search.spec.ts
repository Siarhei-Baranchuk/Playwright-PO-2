import { test, expect } from "@playwright/test";
import { HomePage } from "../../PageObjects/HomePage";
import { NavBar } from "../../PageObjects/Components/NavBar";

test.describe("Search Results", () => {
  let homePage: HomePage;
  let navBar: NavBar;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    navBar = new NavBar(page);

    await homePage.openHP();
  });

  test.afterEach(async ({page}) => {
    homePage = new HomePage(page);
    navBar = new NavBar(page);
    await expect(navBar.searchResultsTitle).toBeVisible()
    await expect(navBar.searchResultsTitle).toHaveText("Search Results:");
  })

  test("Should find results bank", async ({ page }) => {
    await navBar.searchFor("bank")
    await expect(navBar.numberOfSearchResults).toHaveCount(2);
  });

  test("Should find results loan", async ({ page }) => {
    await navBar.searchFor("loan")
    await expect(navBar.numberOfSearchResults).toHaveCount(1);
  });

  test("Show message for non existing results", async ({ page }) => {
    await navBar.searchFor("five")
    await expect(navBar.noSearchResults).toBeVisible();
  });
});
