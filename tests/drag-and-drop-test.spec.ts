import { test, expect } from '@playwright/test';

test('Drag & Drop Test', async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/mouse-event/');

    const source = page.locator('[id="draggableElement"]');
    const target = page.locator('[id="droppableElement"]');
    const draggedElement = page.locator('[id="droppableElement"]')
                               .locator('[id="draggableElement"]');

    await source.dragTo(target);
    await expect(draggedElement).toBeVisible();

    await page.close();
});

