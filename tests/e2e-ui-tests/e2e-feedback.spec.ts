import { test, expect } from "@playwright/test";
import { HomePage } from "../../PageObjects/HomePage";
import { FeedbackPage } from "../../PageObjects/FeedbackPage";
import { USER_DATA } from "../../helpers/ui/user-data";
import { MESSAGES } from "../../helpers/ui/messages";
import { URLS } from "../../helpers/ui/urls";

test.describe("Feedback form", () => {
  let homePage: HomePage;
  let feedbackPage: FeedbackPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    feedbackPage = new FeedbackPage(page);

    await homePage.openHP();
    await homePage.feedbackLink.click();
    await expect(page).toHaveURL(URLS.FEEDBACK_PAGE);
  });

  test("Reset Feedback form", async ({ page }) => {
    await feedbackPage.fillFeedbackForm(
      USER_DATA.USER_NAME,
      USER_DATA.USER_EMAIL,
      MESSAGES.SUBJECT_MESSAGE,
      MESSAGES.TEXT_MESSAGE,
    );
    await feedbackPage.clearButton.click();

    await expect(feedbackPage.nameInput).toBeEmpty();
    await expect(feedbackPage.emailInput).toBeEmpty();
    await expect(feedbackPage.subjectInput).toBeEmpty();
    await expect(feedbackPage.commentTextArea).toBeEmpty();
  });

  test("Submit feedback form", async ({ page }) => {
    await feedbackPage.fillFeedbackForm(
      USER_DATA.USER_NAME,
      USER_DATA.USER_EMAIL,
      MESSAGES.SUBJECT_MESSAGE,
      MESSAGES.TEXT_MESSAGE,
    );
    await feedbackPage.submitButton.click();

    await expect(page).toHaveURL(URLS.SEND_FEEDBACK_PAGE);
    await expect(feedbackPage.feedbackTitle).toContainText("Feedback");
    await expect(feedbackPage.feedbackMessage).toBeVisible();
  });

  test("Submit empty feedback form", async ({ page }) => {
    await feedbackPage.submitButton.click();
    await expect(feedbackPage.nameInput).toBeEmpty();
    await expect(feedbackPage.emailInput).toBeEmpty();
    await expect(feedbackPage.subjectInput).toBeEmpty();
    await expect(feedbackPage.commentTextArea).toBeEmpty();
  });
  test("Submit feedback form with empty Name", async ({ page }) => {
    await feedbackPage.emailInput.type(USER_DATA.USER_EMAIL);
    await feedbackPage.subjectInput.type(MESSAGES.SUBJECT_MESSAGE);
    await feedbackPage.commentTextArea.type(MESSAGES.TEXT_MESSAGE);
    await feedbackPage.submitButton.click();
    await expect(feedbackPage.nameInput).toBeEmpty();
    await expect(feedbackPage.emailInput).not.toBeEmpty();
    await expect(feedbackPage.subjectInput).not.toBeEmpty();
    await expect(feedbackPage.commentTextArea).not.toBeEmpty();
  });

  test("Submit feedback form with empty Email", async ({ page }) => {
    await feedbackPage.nameInput.type(USER_DATA.USER_NAME);
    await feedbackPage.subjectInput.type(MESSAGES.SUBJECT_MESSAGE);
    await feedbackPage.commentTextArea.type(MESSAGES.TEXT_MESSAGE);
    await feedbackPage.submitButton.click();
    await expect(feedbackPage.nameInput).not.toBeEmpty();
    await expect(feedbackPage.emailInput).toBeEmpty();
    await expect(feedbackPage.subjectInput).not.toBeEmpty();
    await expect(feedbackPage.commentTextArea).not.toBeEmpty();
  });

  test("Submit feedback form with empty Subject", async ({ page }) => {
    await feedbackPage.nameInput.type(USER_DATA.USER_NAME);
    await feedbackPage.emailInput.type(USER_DATA.USER_EMAIL);
    await feedbackPage.commentTextArea.type(MESSAGES.TEXT_MESSAGE);
    await feedbackPage.submitButton.click();
    await expect(feedbackPage.nameInput).not.toBeEmpty();
    await expect(feedbackPage.emailInput).not.toBeEmpty();
    await expect(feedbackPage.subjectInput).toBeEmpty();
    await expect(feedbackPage.commentTextArea).not.toBeEmpty();
  });

  test("Submit feedback form with empty Comment", async ({ page }) => {
    await feedbackPage.nameInput.type(USER_DATA.USER_NAME);
    await feedbackPage.emailInput.type(USER_DATA.USER_EMAIL);
    await feedbackPage.subjectInput.type(MESSAGES.SUBJECT_MESSAGE);
    await feedbackPage.submitButton.click();
    await expect(feedbackPage.nameInput).not.toBeEmpty();
    await expect(feedbackPage.emailInput).not.toBeEmpty();
    await expect(feedbackPage.subjectInput).not.toBeEmpty();
    await expect(feedbackPage.commentTextArea).toBeEmpty();
    await expect(feedbackPage.submitButton).toBeVisible();
  });
});
