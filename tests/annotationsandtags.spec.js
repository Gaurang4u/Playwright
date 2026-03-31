import { test, expect } from '@playwright/test'

test.skip('Test One', async ({ page }) => {

})

test('not yet ready', async ({ page }) => {
   test.fail();
 });

 test.fixme('test to be fixed', async ({ page }) => {
 });

 test('slow test', async ({ page }) => {
   test.slow();
 });

//  test.only('focus this test', async ({ page }) => {
//    // Run only focused tests in the entire project
//  });

 test('Test full report @smoke', async ({ page }) => {
   // ...
 });