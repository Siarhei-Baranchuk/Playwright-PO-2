import { test, expect } from "@playwright/test";
import { BASE_API_URL } from "../../helpers/api/endpoints";
import { API_USER_DATA, RESPONSE } from "../../helpers/api/user-data";

test.describe.parallel("Login user api tests", async () => {
  test("POST. Login user", async ({ request }) => {
    const response = await request.post(BASE_API_URL.USER_LOGIN, {
      data: {
        email: API_USER_DATA.USER_EMAIL,
        password: API_USER_DATA.LOGIN_PASSWORD,
      },
    });
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.OK_200);
    expect(responseBody.token).toBeTruthy();
  });

  test("POST. Login failed without password", async ({ request }) => {
    const response = await request.post(BASE_API_URL.USER_LOGIN, {
      data: {
        email: API_USER_DATA.USER_EMAIL,
      },
    });
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.BAD_REQUEST_400);
    expect(responseBody.error).toBeTruthy();
    expect(responseBody.error).toBe(RESPONSE.MESSAGE.Missing_password);
  });

  test("POST. Login failed without email", async ({ request }) => {
    const response = await request.post(BASE_API_URL.USER_LOGIN, {
      data: {
        password: API_USER_DATA.LOGIN_PASSWORD,
      },
    });
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.BAD_REQUEST_400);
    expect(responseBody.error).toBeTruthy();
    expect(responseBody.error).toBe(RESPONSE.MESSAGE.Missing_email_or_username);
  });
});