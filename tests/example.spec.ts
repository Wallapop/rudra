import { test, expect } from '@playwright/test';


test('Wallapop is opened', async ({ page }) => {
  await page.goto('https://es.wallapop.com');
  // Expect a title "to contain" a substring.
  await expect(page.getByAltText('wallapop logo')).toBeVisible();
});

test('Log in Wallapop Website', async ({ page }) => {
      await page.goto('https://es.wallapop.com');
      await page.getByRole('button', {name: /Regístrate o inicia sesión/}).click();
      await page.getByRole('button', {name: /Iniciar sesión/}).click();
      //await page.getByRole('input', { name: 'Dirección de e-mail', exact: true}).fill("personalization1@yopmail.com");
      //await page.getByRole('input', { name: 'Contraseña', exact: true}).fill("12345678");
});