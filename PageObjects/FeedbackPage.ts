import { expect, Locator, Page } from "@playwright/test";
import { URLS } from "../helpers/ui/urls";

export class FeedbackPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly commentTextArea: Locator;
  readonly clearButton: Locator;
  readonly submitButton: Locator;
  readonly feedbackTitle: Locator;
  readonly feedbackMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator("#name");
    this.emailInput = page.locator("#email");
    this.subjectInput = page.locator("#subject");
    this.commentTextArea = page.locator("#comment");
    this.clearButton = page.locator("input[name='clear']");
    this.submitButton = page.locator("input[name='submit']");
    this.feedbackTitle = page.locator("#feedback-title");
    this.feedbackMessage = page.getByText("Thank you for your comments")
  }

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

