import {test} from '@playwright/test'
test('Launch Amazon',async({page})=> {
await page.goto('https://www.amazon.in/')
await page.locator('#twotabsearchtextbox').fill('iphone')
await page.locator('[type="submit"]').click()
})

test('Qa site',async({page})=>{
await page.goto('https://demoqa.com/text-box')
await page.locator("[id='userName']").fill('Naresh kumar')
await page.locator('#userEmail').fill('batman@gmail.com')
await page.locator('#currentAddress').fill('Gotham city')
await page.locator('#permanentAddress').fill('Gotham city')
page.getByText('submit').click
})
//add comment to a file
//Jenkins -Poll scm trigger