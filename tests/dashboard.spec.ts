import {test, expect} from '@playwright/test'
import { Homepage } from '../Pages/homepage'
import { Dashboard } from '../Pages/dashboard';
import {navLink} from '../TestData/NavLinkTestData.json';



test.describe("OrangeHRM test", async ()=>{
    
    //perform login function before each test case:
    test.beforeEach(async ({page})=>{
        const homepageObj = new Homepage({page});
        await homepageObj.gotoHomePage();
        homepageObj.enterUsername("Admin");
        await page.waitForTimeout(5000);                //??????Why I need to give the wait
        homepageObj.enterPassword("admin123");
        homepageObj.clickOnLoginButton();
        await expect(page).toHaveURL(/.*dashboard/);
    })

    //after login from homePage, dashboard should be opened
    test("HomePage to Dashboard", async ({page})=>{
        const dashboardObj = new Dashboard({page});
        await dashboardObj.isDashboardtextVisible();
        await page.pause();
    });




    //perform logout operations
    test("Logout", async ({page})=>{
        const dashboardObj = new Dashboard({page});
        await dashboardObj.clickOnProfileDropdown();
        await page.waitForTimeout(5000); 
        dashboardObj.clickOnButtonInProfileDropdown('Logout');
        await page.waitForTimeout(5000);                //??????Why I need to give the wait

        //ASERTION:- after logout login button should be visible : Homepage
        const homepageObj = new Homepage({page}); 
        await homepageObj.isLoginButtonVisible();
        await expect(page.getByPlaceholder('Password')).toBeVisible();
    });


    

    //checking the functionality of the Nav Links in Dashboard
    test("Checking Nav link In left Menu", async({page})=>{
        const dashboardObj = new Dashboard({page});
        for(let i=0;i<navLink.textData.length;i++){
            await page.waitForTimeout(500);      //??????Why I need to give the wait- because it skips the data while calling the function
            await dashboardObj.clickOnNavlinkInLeftMenu(navLink.textData[i]);
        }              
    });
   


    
    











    //after all test cases close the instance of the page
    test.afterAll( async ()=> { 
    });
} );
