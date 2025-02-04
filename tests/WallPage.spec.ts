import { test, expect} from '@playwright/test';
import { WallPage} from '../pages/WallPage';


test('Wall is opened', async ({ page }) => {
  const wallPage = new WallPage(page);
  wallPage.navigateTo();
  await wallPage.cookiesAcceptation();
  await expect(page.getByAltText('wallapop logo')).toBeVisible();
});

test('All Categories dropdown is opened', async ({ page }) => {
  const wallPage = new WallPage(page);
  wallPage.navigateTo();
  await wallPage.cookiesAcceptation();
  await wallPage.clickAllCategories();
  await expect(page.getByRole('link', { name: 'Informática' })).toBeVisible();
});
