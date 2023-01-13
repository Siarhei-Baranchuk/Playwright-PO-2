export async function loadHomePage(page) {  // example
  await page.goto("https://example.com/");
}

export async function assertTitle(page) {
  await page.waitForSelector("h1");
}

export async function generateRandomNumber() {
  return Math.floor(Math.random() * 100000 + 1);
}

const crypto= require("crypto")
export async function generateRandomString() {
  return crypto.randomBytes(20).toString("hex");
}
