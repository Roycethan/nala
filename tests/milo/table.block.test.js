import { expect, test } from '@playwright/test';
import { features } from '../../features/milo/table.block.spec';
import TableBlock from '../../selectors/milo/table.block.page';

let table;

test.describe('Milo Table block feature test suite', () => {
  test.beforeEach(async ({ page }) => {
    table = new TableBlock(page);
  });

  // Test 0 : Table block (default)
  test(`${features[0].name},${features[0].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[0].path}`);
    const data = features[0].data;

    await test.step('step-1: Go to Table block test page', async () => {
      await page.goto(`${baseURL}${features[0].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[0].path}`);    
    });

    await test.step('step-2: Verify table content/specs', async () => {
      await expect(await table.table).toBeVisible();
      await expect(await table.rows).toHaveCount(data.rowsCount);
      await expect(await table.headingRowColumns).toHaveCount(data.headerRowColCount);
      await expect(await table.sectionRows).toHaveCount(data.sectionRowCount);
      
      //verify header row cell
      const headerCell = data.headerCell2;
      await expect(await table.getHeaderColumnTitle(2)).toContainText(headerCell.heading);
      await expect(await table.getHeaderColumnPricing(2)).toContainText(headerCell.pricingText);
      await expect(await table.getHeaderColumnOutlineButton(2)).toContainText(headerCell.outlineButtonText);
      await expect(await table.getHeaderColumnBlueButton(2)).toContainText(headerCell.blueButtonText);

      //verify section row cell
      const sectionCell = data.sectionRow2;
      await expect(await table.getSectionRowTitle(2)).toContainText(sectionCell.sectionRowTitle);
      await expect(await table.getSectionRowCell(2, 2)).toContainText(sectionCell.cell22);

    });
  });

  // Test 1 : Table (highlight)
  test(`${features[1].name},${features[1].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[1].path}`);
    const data = features[1].data;

    await test.step('step-1: Go to Table block test page', async () => {
      await page.goto(`${baseURL}${features[1].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[1].path}`);    
    });

    await test.step('step-2: Verify table content/specs', async () => {
      await expect(await table.highlightTable).toBeVisible();
      await expect(await table.highlightRow).toBeVisible();

      await expect(await table.rows).toHaveCount(data.rowsCount);
      await expect(await table.headingRowColumns).toHaveCount(data.headerRowColCount);
      await expect(await table.sectionRows).toHaveCount(data.sectionRowCount);

      //verify highlighter row
      const highlighter = data.hightlightRow;
      await expect(await table.getHighlightRowColumnTitle(1)).toContainText(highlighter.cell12);
      await expect(await table.getHighlightRowColumnTitle(2)).toContainText(highlighter.cell13);
      await expect(await table.getHighlightRowColumnTitle(3)).toContainText(highlighter.cell14); 
      
      //verify header row cell
      const headerCell = data.headerCell3;
      await expect(await table.getHeaderColumnTitle(3)).toContainText(headerCell.heading);
      await expect(await table.getHeaderColumnPricing(3)).toContainText(headerCell.pricingText);
      await expect(await table.getHeaderColumnOutlineButton(3)).toContainText(headerCell.outlineButtonText);
      await expect(await table.getHeaderColumnBlueButton(3)).toContainText(headerCell.blueButtonText);

      //verify section row cell
      const sectionCell = data.sectionRow2;
      await expect(await table.getSectionRowTitle(2)).toContainText(sectionCell.sectionRowTitle);
      await expect(await table.getSectionRowCell(2, 2)).toContainText(sectionCell.cell22);

    });
  });

  // Test 2 : Table (sticky)
  test(`${features[2].name},${features[2].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[2].path}`);
    const data = features[2].data;

    await test.step('step-1: Go to Table block test page', async () => {
      await page.goto(`${baseURL}${features[2].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[2].path}`);    
    });

    await test.step('step-2: Verify table content/specs', async () => {
      //verify sticky table header and attributes
      await expect(await table.stickyTable).toBeVisible();  
      await expect(await table.stickyRow).toHaveAttribute('style', 'top: 64px;');
      await expect(await table.stickyRow).toHaveAttribute('class', 'row row-1 row-heading top-border-transparent');

      //verify table row, column count
      await expect(await table.rows).toHaveCount(data.rowsCount);
      await expect(await table.headingRowColumns).toHaveCount(data.headerRowColCount);
      await expect(await table.sectionRows).toHaveCount(data.sectionRowCount);
      
      //verify header row cell
      const headerCell = data.headerCell4;
      await expect(await table.getHeaderColumnTitle(4)).toContainText(headerCell.heading);
      await expect(await table.getHeaderColumnPricing(4)).toContainText(headerCell.pricingText);
      await expect(await table.getHeaderColumnOutlineButton(4)).toContainText(headerCell.outlineButtonText);
      await expect(await table.getHeaderColumnBlueButton(4)).toContainText(headerCell.blueButtonText);

      //verify section row cell
      const sectionCell = data.sectionRow2;
      await expect(await table.getSectionRowTitle(2)).toContainText(sectionCell.sectionRowTitle);
      await expect(await table.getSectionRowCell(2, 2)).toContainText(sectionCell.cell22);
    });
  });

  // Test 3 : Table (highlight, collapse, sticky)
  test(`${features[3].name},${features[3].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[3].path}`);
    const data = features[3].data;

    await test.step('step-1: Go to Table block test page', async () => {
      await page.goto(`${baseURL}${features[3].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[3].path}`);    
    });

    await test.step('step-2: Verify table content/specs', async () => {
      //verify sticky table header and attributes
      await expect(await table.collapseStickyTable).toBeVisible();

      expect(await table.highlightRow).toHaveAttribute('style', 'top: 64px;');
      expect(await table.highlightRow).toHaveAttribute('class', 'row row-1 row-highlight top-border-transparent');

      expect(await table.stickyRow).toHaveAttribute('style', 'top: 114px;');
      expect(await table.stickyRow.getAttribute('class')).toContain('row row-2 row-heading')

      //verify table row, column count
      await expect(await table.rows).toHaveCount(data.rowsCount);
      await expect(await table.headingRowColumns).toHaveCount(data.headerRowColCount);
      await expect(await table.sectionRows).toHaveCount(data.sectionRowCount); 
      
      //verify highlighter row
      const highlighter = data.hightlightRow;
      await expect(await table.getHighlightRowColumnTitle(1)).toContainText(highlighter.cell12);
      await expect(await table.getHighlightRowColumnTitle(2)).toContainText(highlighter.cell13);
      await expect(await table.getHighlightRowColumnTitle(3)).toContainText(highlighter.cell14); 
      
      //verify header row cell
      const headerCell = data.headerCell5;
      await expect(await table.getHeaderColumnTitle(5)).toContainText(headerCell.heading);
      await expect(await table.getHeaderColumnPricing(5)).toContainText(headerCell.pricingText);
      await expect(await table.getHeaderColumnOutlineButton(5)).toContainText(headerCell.outlineButtonText);
      await expect(await table.getHeaderColumnBlueButton(5)).toContainText(headerCell.blueButtonText);

      //verify section row cell
      const sectionCell = data.sectionRow2;
      await expect(await table.getSectionRowTitle(2)).toContainText(sectionCell.sectionRowTitle);
      await expect(await table.getSectionRowCell(2, 2)).toContainText(sectionCell.cell22);
    });
  });  

  // Test 4 : Table (merch)
  test(`${features[4].name},${features[4].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[4].path}`);
    const data = features[4].data;

    await test.step('step-1: Go to Table block test page', async () => {
      await page.goto(`${baseURL}${features[4].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[4].path}`);    
    });

    await test.step('step-2: Verify table content/specs', async () => {
      //verify merch table
      await expect(await table.merchTable).toBeVisible();

      //verify table row, column count
      await expect(await table.rows).toHaveCount(data.rowsCount);
      await expect(await table.headingRowColumns).toHaveCount(data.headerRowColCount);
      await expect(await table.sectionRows).toHaveCount(data.sectionRowCount); 
           
      //verify merch table header row cell
      const headerCell = data.headerCell1;
      await expect(await table.getHeaderColumnTitle(1)).toContainText(headerCell.heading);
      await expect(await table.getHeaderColumnPricing(1)).toContainText(headerCell.pricingText);
      await expect(await table.getHeaderColumnAdditionalText(1)).toContainText(headerCell.AdditionalText);
      await expect(await table.getHeaderColumnOutlineButton(1)).toContainText(headerCell.outlineButtonText);
      await expect(await table.getHeaderColumnBlueButton(1)).toContainText(headerCell.blueButtonText);

      //verify merch table section row cell
      const sectionCell = data.sectionRow2;
      await expect(await table.getSectionRowMerchContent(2)).toContainText(sectionCell.merchContent);
      await expect(await table.getSectionRowMerchContentImg(2)).toBeVisible();
    });
  });
});
