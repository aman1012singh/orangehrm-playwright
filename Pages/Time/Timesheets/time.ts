
export class Time{

    private page: any
    private timeSectionDropDown: any
    private dropDownChoice : any  // "timesheetsDropDown"  "attemdanceDropDown"   "reportsDropDown"   "projectInfoDropDown"  they all have same locators
    

    constructor({page}:{page:any}){
        this.page =page;
        this.timeSectionDropDown = page.locator('[class="oxd-topbar-body"]>nav>ul>li');
        this.dropDownChoice= page.locator('[class="oxd-dropdown-menu"]>li')
    }
    async clickOnTimeSectionDropDown(targetSection: any){
        const numberOfTimeSectionDropDown =await this.timeSectionDropDown.count();
        for (let i=0; i< numberOfTimeSectionDropDown; i++){
            const element = await this.timeSectionDropDown.nth(i);
            const elementText = await element.textContent();
            await this.page.waitForTimeout(3000);         
            if(elementText===targetSection){
                await element.click();
                break;
            }
        }
    }
    async clickOnDropDownChoice(choice: any){
        await this.page.waitForTimeout(3000);             //??????Why I need to give the wait- because wait to open the drop down
        const numberOfChoices = await this.dropDownChoice.count();
        for (let i=0; i< numberOfChoices; i++){
            const element = await this.dropDownChoice.nth(i);
            const elementText = await element.textContent();
            if(elementText===choice){
                await element.click();
                break;
            }
        }
    }
    
}