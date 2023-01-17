import { expect } from "@playwright/test";
import { URLS } from "../helpers/ui/urls";
import { NavBar } from "./Components/NavBar";

export class HomePage extends NavBar {
  onlineBankingLink = this.page.locator("#onlineBankingMenu");
  feedbackLink = this.page.locator("#feedback");

  async openHP() {
    await this.page.goto(URLS.HOME_PAGE);
    await expect(this.page).toHaveURL(URLS.HOME_PAGE);
  }
}
