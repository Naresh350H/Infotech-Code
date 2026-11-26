import{test} from '@playwright/test'

test('Simple Dropdown', async({page})=>{

await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
await page.getByRole('combobox').selectOption([{value: "option2"}])
})

test('styledDropdown', async({page})=>{
await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
await page.locator('[data-target="styled-dropdown"]').click();
await page.getByRole('combobox').selectOption([{value: "option2"}])
})

test('multiDropdown', async({page})=>{
await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
await page.locator('[data-target="multi-select-dropdown"]').click()
await page.locator('.form-multiselect').selectOption([{index:0}, {index:2}, {index:4}]);
})

