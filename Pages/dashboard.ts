import { expect } from "@playwright/test";

export class Dashboard{
    private page: any
    private dashboardtext : any
    private profileDropdownButton : any
    private profileDropdownList : any
    private navLinkInMenuList : any

    
    constructor({page}: {page:any}){
        this.page= page;
        this.dashboardtext= page.getByRole('heading', { name: 'Dashboard' });
        this.profileDropdownButton= page.getByAltText('profile picture');
        this.profileDropdownList= page.locator('[role="menu"]>li');
        this.navLinkInMenuList = page.locator('[class="oxd-main-menu"]>li>a>span');
    }

    async isDashboardtextVisible(){
        await expect(this.dashboardtext).toBeVisible();
    }
    async clickOnProfileDropdown(){
        await this.profileDropdownButton.click();
    }



    async clickOnButtonInProfileDropdown(button: any){
        console.log("::::Number of element in the profileDropdownList:::  ", await this.profileDropdownList.count());

        const counter = await this.profileDropdownList.count();

        for(let i: number=0 ; i<counter; i++ ){
            // Get the element at the current index
            const element = await this.profileDropdownList.nth(i);

            // Get the text content of the located element
            const elementText = await element.textContent();
            //console.log(elementText);

            // Check if the text content matches the Target Text
            if (elementText === button) {
                await element.click();
                break; // Exit the loop after clicking the element
            }
        }
    }

    //click on "TargetLink" Nav Link in the left Menu , and TargetLink is passed as input parameter
    async clickOnNavlinkInLeftMenu(TargetLink:string){
        const numberOfNavLinks = await this.navLinkInMenuList.count();
    
        for(let i=0; i<numberOfNavLinks-2; i++){ //since total count of element is 12 and we need only 9 element i.e why we have used "numberOfNavLinks-2"
            //element at ith Index
            const element = await this.navLinkInMenuList.nth(i);
            //text of ith element
            const elementText = await element.textContent();
            
            //click the TargetLink
            if(elementText===TargetLink){
                await element.click();
                //assert the url of 
               (TargetLink=== "My Info")? (await this.assertNavLink("viewPersonalDetails")) :  (await this.assertNavLink(TargetLink.toLowerCase())); //here the url of "My Info" is different i.e why we used conditional statement
            }
        }
    }
    async assertNavLink(NavLinkName:string){
        //used soft asertion to bypass the failed test case for perticular link and proceed further
        expect.soft(this.page.url()).toContain(NavLinkName);
    } 
}