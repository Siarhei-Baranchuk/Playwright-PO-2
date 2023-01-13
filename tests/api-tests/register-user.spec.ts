import { test, expect } from "@playwright/test";
import { BASE_API_URL } from "../../helpers/api/endpoints";
import { API_USER_DATA, RESPONSE } from "../../helpers/api/user-data";

test.describe.parallel("Register user api tests", async () => {
  test("POST. Register user", async ({ request }) => {
    const response = await request.post(BASE_API_URL.USER_REGISTER, {
      data: {
        email: API_USER_DATA.USER_EMAIL,
        password: API_USER_DATA.USER_PASSWORD,
      },
    });
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.OK_200);
    await expect(response).toBeOK();
    expect(responseBody.id).toBeTruthy();
    expect(responseBody.id).not.toBe("");
    expect(responseBody.token).toBeTruthy();
  });

  test("POST. Register user with Email value only", async ({ request }) => {
    const response = await request.post(BASE_API_URL.USER_REGISTER, {
      data: {
        email: API_USER_DATA.USER_EMAIL,
      },
    });
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.BAD_REQUEST_400);
    expect(response.status()).not.toBe(RESPONSE.STATUS.OK_200);
    expect(responseBody.error).toBeTruthy();
    expect(responseBody.error).toBe(RESPONSE.MESSAGE.Missing_password);
  });

  test("POST. Register user with Password value only", async ({
    request,
  }) => {
    const response = await request.post(BASE_API_URL.USER_REGISTER, {
      data: {
        email: API_USER_DATA.USER_PASSWORD,
      },
    });
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.BAD_REQUEST_400);
    expect(response.status()).not.toBe(RESPONSE.STATUS.OK_200);
    expect(responseBody.error).toBeTruthy();
    expect(responseBody.error).toBe(RESPONSE.MESSAGE.Missing_password);
  });
});
