import { NavBar } from "./Components/NavBar";

export class LoginPage extends NavBar {
  userNameInput = this.page.locator("#user_login");
  passwordInput = this.page.locator("#user_password");
  submitButton = this.page.locator("text=Sign in");
  errorMessage = this.page.locator(".alert-error");
  loginForm = this.page.locator("#login_form");

  async login(username: string, password: string) {
    await this.userNameInput.type(username);
    await this.passwordInput.type(password);
    await this.submitButton.click();
  }

  async snapshotLoginForm() {
    // await expect(this.loginForm.screenshot()).toMatchSnapshot("login-form.png")
    await this.loginForm.screenshot({ path: "img/login-form.png" });
    await this.page.screenshot({
      path: "img/fullPageLoginForm.png",
      fullPage: true,
    });
  }

  async snapshotErrorMessage() {
    await this.errorMessage.screenshot({ path: "img/login-error.png" });
    await this.page.screenshot({
      path: "img/fullPageLoginError.png",
      fullPage: true,
    });
  }
}
