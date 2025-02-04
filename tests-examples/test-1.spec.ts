import { test, expect } from '@playwright/test';

// Test generated by screen recording
test('test', async ({ page }) => {
  await page.goto('https://es.wallapop.com/');
  await page.getByRole('button', { name: 'Rechazar todo' }).click();
  await page.locator('#searchbox-form-input').click();
  await page.locator('#searchbox-form-input').fill('iphone');
  await page.locator('#searchbox-form-input').press('Enter');
});

