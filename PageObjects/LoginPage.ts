import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  // Define selectors
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
  readonly loginForm: Locator;

  // Init selectors using constructor
  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator("#user_login");
    this.passwordInput = page.locator("#user_password");
    this.submitButton = page.locator("text=Sign in");
    this.errorMessage = page.locator(".alert-error");
    this.loginForm = page.locator("#login_form");
  }

  // Define Login Page methods
  async login(username: string, password: string) {
    await this.userNameInput.type(username);
    await this.passwordInput.type(password);
    await this.submitButton.click();
  }

  async snapshotLoginForm() {
    // await expect(this.loginForm.screenshot()).toMatchSnapshot("login-form.png")
    await this.loginForm.screenshot({ path: "img/login-form.png"});
    await this.page.screenshot({ path: "img/fullPageLoginForm.png", fullPage: true });
  }

  async snapshotErrorMessage() {
    await this.errorMessage.screenshot({path: "img/login-error.png"});
    await this.page.screenshot({ path: "img/fullPageLoginError.png", fullPage: true });
  }
}
