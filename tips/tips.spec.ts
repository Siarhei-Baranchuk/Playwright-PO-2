import { test, expect } from "@playwright/test";
import { generateRandomNumber, generateRandomString } from "../helpers/ui/functions";

test.describe("Tips and Tricks Section", () => {
  test("TestInfo Object", async ({ page }, testInfo) => {
    await page.goto("https://example.com/");
    // console.log(testInfo);
  });

  test("Test skip browser", async ({ page, browserName }) => {
    test.skip(
      browserName === "chromium",
      "Feature is not ready for Chrome browser",
    );
    await page.goto("https://example.com/");
  });

  test("Test fixme annotation", async ({ page, browserName }) => {
    test.fixme(
      browserName === "chromium",
      "Test is not stable, needs revision",
    );
    await page.goto("https://example.com/");
  });

  const people = ["Mike", "Judy", "Peter", "Elon", "Alice"];
  for (let name of people) {
    test(`Running test for ${name}`, async ({ page }) => {
      await page.goto("http://zero.webappsecurity.com/");
      await page.type("#searchTerm", `${name}`);
      await page.waitForTimeout(1000);
    });
  }

  test("Mouse Movement Simulation", async ({ page }) => {
    await page.goto("https://example.com/");
    await page.mouse.move(0, 0);
    await page.mouse.down();
    await page.mouse.move(0, 100);
    await page.mouse.up();
  });

  test("Multiple Browser Tabs inside 1 Browser", async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();
    await page1.goto("https://example.com/");
    await page2.goto("https://example.com/");
    await page3.goto("https://example.com/");
    await page1.waitForTimeout(5000);
  });
  
  test("Test", async ({ page }) => {
    let newNumber = await generateRandomNumber();
    console.log(newNumber);
    let newString = await generateRandomString();
    console.log(newString);
  });
});
