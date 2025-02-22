import { Page } from "@playwright/test";

export async function waitForApiResponse(
  page: Page,
  api: string,
  status?: any,
) {
  return await page.waitForResponse((response) => {
    if (status) {
      return response.url().includes(api) && response.status() === status;
    }
    return response.url().includes(api);
  });
}
