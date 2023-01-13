import { test, expect } from "@playwright/test";
import { BASE_API_URL } from "../../helpers/api/endpoints";
import {
  API_USER_DATA,
  randomJobTitle,
  randomName,
  RESPONSE,
} from "../../helpers/api/user-data";

test.describe.parallel("Create, Update, Delete user api tests", () => {
  test("POST. Create new user", async ({ request }) => {
    const response = await request.post(BASE_API_URL.USER_CREATE, {
      data: {
        id: 1000,
        name: API_USER_DATA.USER_NAME,
        job: API_USER_DATA.JOB_TITLE,
      },
    });
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(RESPONSE.STATUS.OK_201);
    expect(responseBody.id).toBe(1000);
    expect(responseBody.name).toBeTruthy();
    expect(responseBody.name).toBe(API_USER_DATA.USER_NAME);
    expect(responseBody.job).toBe(API_USER_DATA.JOB_TITLE);
    expect(responseBody.createdAt).toBeTruthy();
  });

  test("PUT. Update user", async ({ request }) => {
    const response = await request.put(BASE_API_URL.USER_UPDATE, {
      data: {
        name: randomName,
        job: randomJobTitle,
      },
    });
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.OK_200);
    expect(responseBody.name).toBeTruthy();
    expect(responseBody.name).toBe(randomName);
    expect(responseBody.job).toBe(randomJobTitle);
    expect(responseBody.updatedAt).toBeTruthy();
  });

  test("PATCH. Update user Name", async ({ request }) => {
    const response = await request.patch(BASE_API_URL.USER_UPDATE, {
      data: {
        name: randomName,
      },
    });
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.OK_200);
    expect(responseBody.name).toBeTruthy();
    expect(responseBody.name).toBe(randomName);
    expect(responseBody.updatedAt).toBeTruthy();
  });

  test("PATCH. Update user Job Title", async ({ request }) => {
    const response = await request.patch(BASE_API_URL.USER_UPDATE, {
      data: {
        job: randomJobTitle,
      },
    });
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.OK_200);
    expect(responseBody.job).toBeTruthy();
    expect(responseBody.job).toBe(randomJobTitle);
    expect(responseBody.updatedAt).toBeTruthy();
  });

  test("DELETE. Delete user", async ({ request }) => {
    const response = await request.delete(BASE_API_URL.USER_DELETE);
    expect(response.status()).toBe(RESPONSE.STATUS.OK_204);
  });
});
