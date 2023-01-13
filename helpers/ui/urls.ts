require("dotenv").config();

// export async function openPage(path, page) {
//   // const BASE_URL = await process.env.ENV_BASE_URL
//   // await browser.url(`${process.env.ENV_BASE_URl}${page}`)
//   await page.goto(`${process.env.ENV_BASE_URl}${path}`);
// }

export const BASE_URL = process.env.ENV_BASE_URL;

export const URLS = {
  HOME_PAGE: `${BASE_URL}index.html`,
  LOGIN_PAGE: `${BASE_URL}login.html`,
  ONLINE_BANKING_PAGE: `${BASE_URL}online-banking.html`,
  FEEDBACK_PAGE: `${BASE_URL}feedback.html`,
  SEND_FEEDBACK_PAGE: `${BASE_URL}sendFeedback.html`,
  ACCOUNT_SUMMARY_PAGE: `${BASE_URL}bank/account-summary.html`,
  ACCOUNT_ACTIVITY_PAGE: `${BASE_URL}bank/account-activity.html`,
  TRANSFER_FUNDS_PAGE: `${BASE_URL}bank/transfer-funds.html`,
  PAY_BILLS_PAGE: `${BASE_URL}bank/pay-bills.html`,
  MY_MONEY_MAP_PAGE: `${BASE_URL}bank/money-map.html`,
};