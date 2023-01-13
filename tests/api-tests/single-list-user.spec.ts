import { test, expect } from "@playwright/test";
import { BASE_API_URL } from "../../helpers/api/endpoints";
import { RESPONSE } from "../../helpers/api/user-data";

test.describe.parallel("Single/List users api tests", async () => {
  test("GET. Users list", async ({ request }) => {
    const response = await request.get(BASE_API_URL.USER_LIST);
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.OK_200);
    expect(responseBody.page).toBeTruthy();
    expect(responseBody.per_page).toBeTruthy();
    expect(responseBody.per_page).toBe(6);
    expect(responseBody.total).toBeTruthy();
    expect(responseBody.total_pages).toBeTruthy();
    const users = responseBody.data.length;
    for (let user in users) {
      expect(user["id"]).toBeTruthy();
      expect(user["email"]).toBeTruthy();
      expect(user["first_name"]).toBeTruthy();
      expect(user["last_name"]).toBeTruthy();
      expect(user["avatar"]).toBeTruthy();
    }
  });

  test("GET. Single user", async ({ request }) => {
    const response = await request.get(BASE_API_URL.SINGLE_USER);
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.OK_200);
    expect(responseBody.data.id).toBeTruthy()
    expect(responseBody.data.id).not.toBe("");
    expect(responseBody.data.id).not.toBe(null);
    expect(responseBody.data.email).toBeTruthy();
    expect(responseBody.data.first_name).toBeTruthy();
    expect(responseBody.data.last_name).toBeTruthy();
    expect(responseBody.data.avatar).toBeTruthy();
    expect(responseBody.support.url).toBeTruthy();
    expect(responseBody.support.text).toBeTruthy();
  });

  test("GET. Single user not found", async ({ request }) => {
    const response = await request.get(BASE_API_URL.INVALID_USER);
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.NOT_FOUND_404);
    expect(response.statusText()).toBe(RESPONSE.MESSAGE.NOT_FOUND)
  });
});
