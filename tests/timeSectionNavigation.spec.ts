import {test, expect} from '@playwright/test'
import { Homepage } from '../Pages/homepage';
import { Dashboard } from '../Pages/dashboard';
import { EmployeeTimeSheets} from '../Pages/Time/Timesheets/time_EmployeeTimesheets'
import { Time } from '../Pages/Time/Timesheets/time';

test.describe("Time Section navigation Test", async()=>{
    

    //before each test case : login operation must be performed and goto Time Section
    test.beforeEach(async({page})=>{
        const homepageObj = new Homepage({page});
        await homepageObj.gotoHomePage();
        await page.waitForTimeout(2000);
        homepageObj.enterUsername("Admin");
        await page.waitForTimeout(5000);                //??????Why I need to give the wait
        homepageObj.enterPassword("admin123");
        homepageObj.clickOnLoginButton();
        await expect(page).toHaveURL(/.*dashboard/);

        //open the Time Section::::::::::
        const dashboardObj = new Dashboard({page});
        await page.waitForTimeout(3000);                //??????Why I need to give the wait- because Test Ends while calling the function
        await dashboardObj.clickOnNavlinkInLeftMenu("Time");
        
    });

    test.only("Employee Timesheets", async({page})=>{
        const timeObj = new Time({page}); 
        await page.waitForTimeout(3000);             //??????Why I need to give the wait- because wait till time section opens
        timeObj.clickOnTimeSectionDropDown("Timesheets ");        
        timeObj.clickOnDropDownChoice("Employee Timesheets");
        await page.pause();

    });
});