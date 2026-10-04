import { defineConfig, devices } from '@playwright/test';
const baseURL = process.env.BASE_URL;
if (!baseURL) throw new Error('Set BASE_URL (workers.dev address of bug-free-guide).');
export default defineConfig({
testDir: './tests',
timeout: 30000,
retries: process.env.CI ? 1 : 0,
reporter: [['list'], ['html', { open: 'never' }]],
use: { baseURL, trace: 'on-first-retry', screenshot: 'only-on-failure' },
projects: [
{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
{ name: 'mobile', use: { ...devices['Pixel 7'] } },
],
});
