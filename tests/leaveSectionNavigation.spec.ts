import {test, expect} from '@playwright/test'
import { Homepage } from '../Pages/homepage';
import { Dashboard } from '../Pages/dashboard';
import { LeaveList } from '../Pages/Leave/LeaveList/Leavelist';
import { AssignLeave } from '../Pages/Leave/AssignLeave/assignLeave';
import { LeaveGeneral } from '../Pages/Leave/LeaveGeneral';
import { MyLeave } from '../Pages/Leave/MyLeave/myleave';



test.describe("Leave Section navigation Test", async()=>{
    

    //before each test case : login operation must be performed and goto Leave Section
    test.beforeEach(async({page})=>{
        const homepageObj = new Homepage({page});
        await homepageObj.gotoHomePage();
        homepageObj.enterUsername("Admin");
        await page.waitForTimeout(5000);                //??????Why I need to give the wait - because?
        homepageObj.enterPassword("admin123");
        homepageObj.clickOnLoginButton();
        await expect(page).toHaveURL(/.*dashboard/);

        //open Leave Section
        const dashboardObj = new Dashboard({page});
        await page.waitForTimeout(500);      //??????Why I need to give the wait- because it skips the data while calling the function
        await dashboardObj.clickOnNavlinkInLeftMenu("Leave");
    });

    test("leave List ", async ({page})=>{
        const leaveGeneralObj=new LeaveGeneral({page});
        leaveGeneralObj.selectLeaveSection("Leave List");
        await page.waitForTimeout(3000);


        const leaveListObj = new LeaveList({page});
        await leaveListObj.selectFromDate("2024-01-23");
        await leaveListObj.selectToDate( "2024-05-05");

        await leaveListObj.selectLeaveStatus("Rejected");
        await leaveListObj.selectLeaveType("CAN - FMLA");

        await leaveListObj.selectEmpName("a", "Odis");

        await leaveListObj.selectSubUnit("Administration");

        await leaveListObj.clickOnPastEmpEnableButton();

        await leaveListObj.clickSearchButton();
        await leaveListObj.clickResetButton();
    })


    test("leave- Assign", async ({page})=>{
        const leaveGeneralObj=new LeaveGeneral({page});
        leaveGeneralObj.selectLeaveSection("Assign Leave");

        await page.waitForTimeout(3000);
        const assignObj = new AssignLeave({page});
        await assignObj.selectEmpName("a", "Odis");
        await assignObj.selectLeaveType("CAN - FMLA");
        await page.waitForTimeout(5000);                //??????Why I need to give the wait - because?

        await assignObj.selectFromDate("2024-01-23");
        await assignObj.selectToDate( "2024-01-27");
        await assignObj.typeComment("Testing Purpose Comment");
        await assignObj.clickAssignButton();
    })



    test("My Leave Test", async ({page})=>{
        const leaveGeneralObj=new LeaveGeneral({page});
        leaveGeneralObj.selectLeaveSection("My Leave");
        await page.waitForTimeout(3000);


        const myLeaveObj = new MyLeave({page});
        await myLeaveObj.selectFromDate("2024-01-23");
        await myLeaveObj.selectToDate( "2024-05-05");

        await myLeaveObj.selectLeaveStatus("Rejected");
        await myLeaveObj.selectLeaveType("US - FMLA");


        await myLeaveObj.clickSearchButton();

        await page.waitForTimeout(5000);
        await myLeaveObj.clickResetButton();

        await page.pause();
    })






})