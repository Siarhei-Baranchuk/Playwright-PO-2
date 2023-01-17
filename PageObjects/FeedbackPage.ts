import { expect } from "@playwright/test";
import { URLS } from "../helpers/ui/urls";
import { NavBar } from "./Components/NavBar";

export class FeedbackPage extends NavBar {
  nameInput = this.page.locator("#name");
  emailInput = this.page.locator("#email");
  subjectInput = this.page.locator("#subject");
  commentTextArea = this.page.locator("#comment");
  clearButton = this.page.locator("input[name='clear']");
  submitButton = this.page.locator("input[name='submit']");
  feedbackTitle = this.page.locator("#feedback-title");
  feedbackMessage = this.page.getByText("Thank you for your comments");

  async openFP() {
    await this.page.goto(URLS.FEEDBACK_PAGE);
    await expect(this.page).toHaveURL(URLS.FEEDBACK_PAGE);
  }

  async fillFeedbackForm(
    name: string,
    email: string,
    subject: string,
    comment: string,
  ) {
    await this.nameInput.type(name);
    await this.emailInput.type(email);
    await this.subjectInput.type(subject);
    await this.commentTextArea.type(comment);
  }
}
