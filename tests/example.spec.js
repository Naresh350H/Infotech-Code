import {test} from '@playwright/test';
test('Test case 1',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    // const title=await page.title();
    // console.log(title);
    // const url=await page.url()
    // console.log(url)

    // await page.goto('https://ww.j.com/')
    // console.log(await page.title())
    // console.log(await page.title())

    // await page.goBack();
    // console.log(await page.url())
})

// test('Test case 2',async({page})=>{
//     await page.goto("https://www.amazon.in/")
//     console.log(await page.url());

//     await page.goto("https://www.makemytrip.com/")
//     console.log(await page.title())

//     await page.goto("https://www.facebook.com/")
//     await page.goBack()
//     await page.goBack()

// })


