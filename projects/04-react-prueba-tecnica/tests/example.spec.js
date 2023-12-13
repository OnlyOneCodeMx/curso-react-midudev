// @ts-check
import { test, expect } from '@playwright/test';

// arreglar el import en ves de usar require usar import, tambien cambiar a .cjs el archivo config de playwrightConfig

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

const LOCALHOST_URL = 'http://localhost:5173/';

// El test mas importante en una prueba tecnica es el end to end test, ya que es el que nos permite probar la funcionalidad de la aplicacion en su totalidad, es decir, que el usuario pueda interactuar con la aplicacion y que esta responda de manera correcta.

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});
