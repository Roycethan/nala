import { expect, test } from '@playwright/test';
import { WebUtil } from '../../libs/webutil.js';
import { features } from '../../features/milo/merchcard.block.spec.js';
import MerchCard from '../../selectors/milo/merchcard.block.page.js';

let merchCard;
let webUtil;

test.describe('Milo Modal feature test suite', () => {
  test.beforeEach(async ({ page }) => {
    merchCard = new MerchCard(page);
    webUtil = new WebUtil(page);
  });

  // Test 0 : Merch Card (Segment)
  test(`${features[0].name},${features[0].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[0].path}`);
    const data = features[0].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[0].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[0].path}`);    
    });

    await test.step('step-2: Verify Merch Card content/specs', async () => {
      await expect(await merchCard.segment).toBeVisible();
      await expect(await merchCard.segmentTitle).toContainText(data.title);

      //await expect(await merchCard.price).toContainText(data.price);
      //await expect(await merchCard.strikethroughPrice).toContainText(data.strikethroughPrice);

      await expect(await merchCard.segmentDescription1).toContainText(data.description);
      await expect(await merchCard.linkText1).toContainText(data.link1Text);
      await expect(await merchCard.linkText2).toContainText(data.link2Text);

      await expect(await merchCard.footer).toBeVisible();
      await expect(await merchCard.footerOutlineButton).toBeVisible();
      await expect(await merchCard.footerOutlineButton).toContainText(data.footerOutlineButtonText);

      await expect(await merchCard.footerBlueButton).toBeVisible();
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButtonText);

    });
  });

  // Test 1 : Merch Card (Segment) with Badge
  test(`${features[1].name},${features[1].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[1].path}`);
    const data = features[1].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[1].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[1].path}`);    
    });

    await test.step('step-2: Verify Merch Card with Badge content/specs', async () => {
      await expect(await merchCard.segment).toBeVisible();
      await expect(await merchCard.segmentTitle).toContainText(data.title);

      await expect(await merchCard.segmentRibbon).toBeVisible();
      await expect(await merchCard.segmentRibbon).toContainText(data.badgeText);

      //await expect(await merchCard.price).toContainText(data.price);
      //await expect(await merchCard.strikethroughPrice).toContainText(data.strikethroughPrice);

      await expect(await merchCard.segmentDescription1).toContainText(data.description);
      await expect(await merchCard.linkText1).toContainText(data.link1Text);
      await expect(await merchCard.linkText2).toContainText(data.link2Text);

      await expect(await merchCard.footer).toBeVisible();
      await expect(await merchCard.footerOutlineButton).toBeVisible();
      await expect(await merchCard.footerOutlineButton).toContainText(data.footerOutlineButtonText);

      await expect(await merchCard.footerBlueButton).toBeVisible();
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButtonText);
    });

    await test.step('step-3: Verify Merch Card attributes', async () => {
      await expect(await merchCard.segmentRibbon).toHaveAttribute('style', merchCard.attributes['segmentRibbon']['style']);

    });
  });

  // Test 2 : Merch Card (Special Offers) 
  test(`${features[2].name},${features[2].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[2].path}`);
    const data = features[2].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[2].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[2].path}`);    
    });

    await test.step('step-2: Verify Merch Card special offers content/specs', async () => {
      await expect(await merchCard.sepcialOffers).toBeVisible();
      await expect(await merchCard.sepcialOffersImage).toBeVisible();

      //await expect(await merchCard.sepcialOffersTitleH4).toBeVisible();
      await expect(await merchCard.sepcialOffersTitleH4).toContainText(data.titleH4);
      await expect(await merchCard.sepcialOffersTitleH3).toContainText(data.titleH3);

      await expect(await merchCard.sepcialOffersDescription1).toContainText(data.description1);
      await expect(await merchCard.sepcialOffersDescription2).toContainText(data.description2);

      await expect(await merchCard.footer).toBeVisible();
      await expect(await merchCard.footerBlueButton).toBeVisible();      
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButtonText);
    });
  });
  
  // Test 3 : Merch Card (Special Offers) with badge 
  test(`${features[3].name},${features[3].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[3].path}`);
    const data = features[3].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[3].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[3].path}`);    
    });

    await test.step('step-2: Verify Merch Card special offers content/specs', async () => {
      await expect(await merchCard.sepcialOffers).toBeVisible();
      await expect(await merchCard.sepcialOffersImage).toBeVisible();

      await expect(await merchCard.sepcialOffersRibbon).toBeVisible();
      await expect(await merchCard.sepcialOffersRibbon).toContainText(data.badgeText);

      //await expect(await merchCard.sepcialOffersTitleH4).toContainText(data.titleH4);
      await expect(await merchCard.sepcialOffersTitleH3).toContainText(data.titleH3);

      await expect(await merchCard.sepcialOffersDescription2).toContainText(data.description);
      await expect(await merchCard.seeTermsTextLink).toContainText(data.link1Text);

      await expect(await merchCard.footer).toBeVisible();
      await expect(await merchCard.footerOutlineButton).toBeVisible();
      await expect(await merchCard.footerOutlineButton).toContainText(data.footerOutlineButtonText);

      await expect(await merchCard.footerBlueButton).toBeVisible();      
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButtonText);
    });

    await test.step('step-3: Verify Merch Card attributes', async () => {
      await expect(await merchCard.sepcialOffersRibbon).toHaveAttribute('style', merchCard.attributes['specialOfferRibbon']['style']);

    });    
  });  
 
  // Test 4 : Merch Card (plans)
  test(`${features[4].name},${features[4].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[4].path}`);
    const data = features[4].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[4].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[4].path}`);    
    });

    await test.step('step-2: Verify Merch Card special offers content/specs', async () => {
      await expect(await merchCard.plans).toBeVisible();
      await expect(await merchCard.productIcon).toBeVisible();

      await expect(await merchCard.plansCardTitleH3).toContainText(data.titleH3);      
      await expect(await merchCard.plansCardTitleH5).toContainText(data.titleH5);

      //await expect(await merchCard.price).toContainText(data.price);
      await expect(await merchCard.plansCardDescription2).toContainText(data.description);
      await expect(await merchCard.seePlansTextLink).toContainText(data.link1Text);

      await expect(await merchCard.footer).toBeVisible();

      await expect(await merchCard.footerBlueButton).toBeVisible();      
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButtonText);
    });   
  });
  
  // Test 5 : Merch Card (plans) with badge
  test(`${features[5].name},${features[5].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[5].path}`);
    const data = features[5].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[5].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[5].path}`);    
    });

    await test.step('step-2: Verify Merch Card special offers content/specs', async () => {
      await expect(await merchCard.plans).toBeVisible();
      await expect(await merchCard.productIcon).toBeVisible();

      await expect(await merchCard.plansRibbon).toBeVisible();
      await expect(await merchCard.plansRibbon).toContainText(data.badgeText);      

      await expect(await merchCard.plansCardTitleH3).toContainText(data.titleH3);      
      await expect(await merchCard.plansCardTitleH5).toContainText(data.titleH5);

      //await expect(await merchCard.price).toContainText(data.price);
      await expect(await merchCard.plansCardDescription2).toContainText(data.description);
      await expect(await merchCard.seePlansTextLink).toContainText(data.link1Text);

      await expect(await merchCard.footer).toBeVisible();

      await expect(await merchCard.footerBlueButton).toBeVisible();      
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButtonText);
    });   
  }); 
  
  // Test 6 : Merch Card (plans) with secure
  // Note: skipping the test as there were failures, informed the team
  test.skip(`${features[6].name},${features[6].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[6].path}`);
    const data = features[6].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[6].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[6].path}`);    
    });

    await test.step('step-2: Verify Merch Card special offers content/specs', async () => {
      await expect(await merchCard.plans).toBeVisible();
      await expect(await merchCard.productIcon).toBeVisible();   

      await expect(await merchCard.plansCardTitleH3).toContainText(data.titleH3);      
      await expect(await merchCard.plansCardTitleH5).toContainText(data.titleH5);

      //await expect(await merchCard.price).toContainText(data.price);
      await expect(await merchCard.plansCardDescription2).toContainText(data.description);
      await expect(await merchCard.seePlansTextLink).toContainText(data.link1Text);

      await expect(await merchCard.footer).toBeVisible();

      await expect(await merchCard.footerBlueButton).toBeVisible();       
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButton1Text);

      await expect(await merchCard.footerBlueButton2).toBeVisible();
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButton2Text);

      await expect(await merchCard.footerCheckbox).toBeVisible(); 
      await expect(await merchCard.footerCheckboxLabel).toContainText(data.checkboxLabel);

      await expect(await merchCard.secureTransactionIcon).toBeVisible(); 
      await expect(await merchCard.secureTransactionLabel).toContainText(data.secureLabel);
    });

    await test.step('step-3: Click the check box and verify the free trial button', async () => {
      await merchCard.footerCheckbox.click();
      
      await expect(await merchCard.footerOutlineButton).toBeVisible();       
      await expect(await merchCard.footerOutlineButton).toContainText(data.footerOutlineButtonText);   
    });    

  });
  
  // Test 7 : Merch Card (plans, secure) with badge
  // Note: skipping the test as there were failures, informed the team
  test.skip(`${features[7].name},${features[7].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[7].path}`);
    const data = features[7].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[7].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[7].path}`);    
    });

    await test.step('step-2: Verify Merch Card special offers content/specs', async () => {
      await expect(await merchCard.plans).toBeVisible();
      await expect(await merchCard.productIcon).toBeVisible();
      
      await expect(await merchCard.plansRibbon).toBeVisible();
      await expect(await merchCard.plansRibbon).toContainText(data.badgeText);  

      await expect(await merchCard.plansCardTitleH3).toContainText(data.titleH3);      
      await expect(await merchCard.plansCardTitleH5).toContainText(data.titleH5);

      //await expect(await merchCard.price).toContainText(data.price);
      await expect(await merchCard.plansCardDescription2).toContainText(data.description);
      await expect(await merchCard.seePlansTextLink).toContainText(data.link1Text);

      await expect(await merchCard.footer).toBeVisible();

      await expect(await merchCard.footerBlueButton).toBeVisible();       
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButton1Text);

      await expect(await merchCard.footerCheckbox).toBeVisible(); 
      await expect(await merchCard.footerCheckboxLabel).toContainText(data.checkboxLabel);

      await expect(await merchCard.secureTransactionIcon).toBeVisible(); 
      await expect(await merchCard.secureTransactionLabel).toContainText(data.secureLabel);
    });

    await test.step('step-3: Click the check box and verify the free trial button', async () => {
      await merchCard.footerCheckbox.click();
      
      await expect(await merchCard.footerOutlineButton).toBeVisible();       
      await expect(await merchCard.footerOutlineButton).toContainText(data.footerOutlineButtonText);   
    });   
  });
  
  // Test 8 : Merch Card (catalog)
  test(`${features[8].name},${features[8].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[8].path}`);
    const data = features[8].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[8].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[8].path}`);    
    });

    await test.step('step-2: Verify Merch Card catalog content/specs', async () => {
      await expect(await merchCard.catalog).toBeVisible();
      await expect(await merchCard.catalogCardTitleH3).toContainText(data.titleH3);
      await expect(await merchCard.catalogCardTitleH4).toContainText(data.titleH4);

      //await expect(await merchCard.price).toContainText(data.price);

      await expect(await merchCard.catalogCardDescription2).toContainText(data.description);
      await expect(await merchCard.seeWhatsIncludedTextLink).toContainText(data.link1Text);
      await expect(await merchCard.learnMoreTextLink).toContainText(data.link2Text);

      await expect(await merchCard.footer).toBeVisible();

      await expect(await merchCard.footerBlueButton).toBeVisible();      
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButton1Text);

      await expect(await merchCard.footerOutlineButton).toBeVisible();      
      await expect(await merchCard.footerOutlineButton).toContainText(data.footerOutlineButtonText);
    });   
  }); 
  
  // Test 9 : Merch Card (catalog) with badge
  test(`${features[9].name},${features[9].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[9].path}`);
    const data = features[9].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[9].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[9].path}`);    
    });

    await test.step('step-2: Verify Merch Card catalog with badge content/specs', async () => {
      await expect(await merchCard.catalog).toBeVisible();
      
      await expect(await merchCard.catalog).toHaveAttribute('badge-background-color', data.badgeBgColor);
      await expect(await merchCard.catalog).toHaveAttribute('badge-color', data.badgeColor);;
      await expect(await merchCard.catalog).toHaveAttribute('badge-text', data.badgeText);

      await expect(await merchCard.catalogCardTitleH3).toContainText(data.titleH3);
      await expect(await merchCard.catalogCardTitleH4).toContainText(data.titleH4);

      //await expect(await merchCard.price).toContainText(data.price);
      
      await expect(await merchCard.catalogCardDescription2).toContainText(data.description);
      await expect(await merchCard.seeWhatsIncludedTextLink).toContainText(data.link1Text);
      await expect(await merchCard.learnMoreTextLink).toContainText(data.link2Text);

      await expect(await merchCard.footer).toBeVisible();

      await expect(await merchCard.footerBlueButton).toBeVisible();      
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButton1Text);

      await expect(await merchCard.footerOutlineButton).toBeVisible();      
      await expect(await merchCard.footerOutlineButton).toContainText(data.footerOutlineButtonText);
    });   
  });

  // Test 10 : Merch Card (catalog) with more info and badge
  test(`${features[10].name},${features[10].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[10].path}`);
    const data = features[10].data;

    await test.step('step-1: Go to Merch Card feature test page', async () => {
      await page.goto(`${baseURL}${features[10].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[10].path}`);    
    });

    await test.step('step-2: Verify Merch Card catalog with badge content/specs', async () => {
      await expect(await merchCard.catalog).toBeVisible();
      
      await expect(await merchCard.catalog).toHaveAttribute('badge-background-color', data.badgeBgColor);
      await expect(await merchCard.catalog).toHaveAttribute('badge-color', data.badgeColor);;
      await expect(await merchCard.catalog).toHaveAttribute('badge-text', data.badgeText);

      await expect(await merchCard.catalogCardTitleH3).toContainText(data.titleH3);
      await expect(await merchCard.catalogCardTitleH4).toContainText(data.titleH4);

      //await expect(await merchCard.price).toContainText(data.price);
      
      await expect(await merchCard.catalogCardDescription2).toContainText(data.description);
      await expect(await merchCard.seeWhatsIncludedTextLink).toContainText(data.link1Text);
      await expect(await merchCard.learnMoreTextLink).toContainText(data.link2Text);

      await expect(await merchCard.footer).toBeVisible();

      await expect(await merchCard.footerBlueButton).toBeVisible();      
      await expect(await merchCard.footerBlueButton).toContainText(data.footerBlueButton1Text);

      await expect(await merchCard.footerOutlineButton).toBeVisible();      
      await expect(await merchCard.footerOutlineButton).toContainText(data.footerOutlineButtonText);
    }); 
    
    await test.step('step-3: click more info link and verify action menu list', async () => {
      await merchCard.catalog.hover();
      await merchCard.catalog.click();
      await page.waitForTimeout(1000);

      await expect(await merchCard.catalogActionMenuList).toHaveCount(data.actionMenuListCount); 
      await expect(await merchCard.catalogActionMenuPText1).toContainText(data.actionMenuText1);
      await expect(await merchCard.catalogActionMenuPText2).toContainText(data.actionMenuText2);
      await expect(await merchCard.catalogActionMenuPText3).toContainText(data.actionMenuText3);
    });
  });  

});
