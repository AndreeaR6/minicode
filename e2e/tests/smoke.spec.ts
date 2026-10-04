import { test, expect } from '@playwright/test';
test('worker returns 200 with HTML', async ({ request }) => {
const res = await request.get('/');
expect(res.status()).toBe(200);
expect(res.headers()['content-type']).toContain('text/html');
});
test('page loads without JavaScript errors', async ({ page }) => {
const errors: string[] = [];
page.on('pageerror', (e) => errors.push(e.message));
await page.goto('/');
await page.waitForLoadState('networkidle');
expect(errors, errors.join('\n')).toEqual([]);
});
test('MiniCode has webCssTab and webJsTab in DOM', async ({ page }) => {
await page.goto('/');
await expect(page.locator('#webCssTab')).toHaveCount(1);
await expect(page.locator('#webJsTab')).toHaveCount(1);
});
