import { expect, Locator, Page } from "@playwright/test";
import { URLS } from "../helpers/ui/urls";

export class HomePage {
  readonly page: Page;
  readonly onlineBankingLink: Locator;
  readonly feedbackLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.onlineBankingLink = page.locator("#onlineBankingMenu")
    this.feedbackLink = page.locator("#feedback")
  }

  async openHP() {
    await this.page.goto(URLS.HOME_PAGE)
    await expect(this.page).toHaveURL(URLS.HOME_PAGE);
  }

}