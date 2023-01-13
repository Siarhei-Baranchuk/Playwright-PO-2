import { test, expect } from "@playwright/test";
import { BASE_API_URL } from "../../helpers/api/endpoints";
import { RESPONSE } from "../../helpers/api/user-data";

test.describe.parallel("Single/List recourses api tests", async () => {
  test("GET. Recourse list", async ({ request }) => {
    const response = await request.get(BASE_API_URL.RESOURCE_LIST);
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.OK_200);
    expect(responseBody.page).toBeTruthy();
    expect(responseBody.per_page).toBeTruthy();
    expect(responseBody.per_page).toBe(6);
    expect(responseBody.total).toBeTruthy();
    expect(responseBody.total_pages).toBeTruthy();
    const recourses = responseBody.data.length;
    for (let recourse in recourses) {
      expect(recourse["id"]).toBeTruthy();
      expect(recourse["name"]).toBeTruthy();
      expect(recourse["year"]).toBeTruthy();
      expect(recourse["color"]).toBeTruthy();
      expect(recourse["pantone_value"]).toBeTruthy();
    }
  });

  test("GET. Single recourse", async ({ request }) => {
    const response = await request.get(BASE_API_URL.SINGLE_RESOURCE);
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.OK_200);
    expect(responseBody.data.id).toBeTruthy();
    expect(responseBody.data.id).not.toBe("");
    expect(responseBody.data.id).not.toBe(null);
    expect(responseBody.data.year).toBeTruthy();
    expect(responseBody.data.color).toBeTruthy();
    expect(responseBody.data.pantone_value).toBeTruthy();
    expect(responseBody.support.url).toBeTruthy();
    expect(responseBody.support.text).toBeTruthy();
  });

  test("GET. Single user not found", async ({ request }) => {
    const response = await request.get(BASE_API_URL.INVALID_RESOURSE);
    const responseBody = JSON.parse(await response.text());
    // console.log(responseBody);
    expect(response.status()).toBe(RESPONSE.STATUS.NOT_FOUND_404);
    expect(response.statusText()).toBe(RESPONSE.MESSAGE.NOT_FOUND);
  });
});
