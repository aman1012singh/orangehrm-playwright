import { expect } from "@playwright/test";
import { waitForDebugger } from "inspector";

export class AssignLeave{
    private page : any;
    private leaveTypeDropDown: any
    private leaveType: any;
    private empNameTextbox: any
    private empNameSuggestion: any
    private fromDateCalendar: any;
    private toDateCalendar: any;
    private commentTextbox : any;
    private assignButton: any;
    
   

    constructor({page}:{page: any}){
        this.page = page;
        this.empNameTextbox= page.getByPlaceholder('Type for hints...');
        this.empNameSuggestion= page.locator('[class="oxd-autocomplete-option"]>span')

        this.leaveTypeDropDown= page.locator('[class="oxd-select-option"]>span');
        this.leaveType=page.getByText('-- Select --');
        
        this.fromDateCalendar =page.getByPlaceholder('yyyy-dd-mm').first()
        this.toDateCalendar= page.getByPlaceholder('yyyy-dd-mm').nth(1);
        this.commentTextbox= page.locator('.oxd-input-group textarea');
        this.assignButton=page.getByText(' Apply ')
    }


    async selectEmpName(nameHint: string, name: string){

        await  this.empNameTextbox.fill(nameHint);
        await this.page.waitForTimeout(5000);
        const numberOfSuggestions =await this.empNameSuggestion.count();

        for(let i=0; i<numberOfSuggestions; i++){
            //element at ith Index
            const element = await this.empNameSuggestion.nth(i);
            //text of ith element
            const elementText = await element.textContent();
            //click the TargetLink
            if(elementText.includes(name)){
                await element.click();
                break;
            }
        }
    }

    async selectLeaveType(leavetype: string){
        await this.leaveType.click();
        await this.page.waitForTimeout(3000); 
        const numberOfSuggestions =await this.leaveTypeDropDown.count();
        for(let i=0; i<numberOfSuggestions; i++){
            //element at ith Index
            const element = await this.leaveTypeDropDown.nth(i);
            //text of ith element
            const elementText = await element.textContent();
            //click the TargetLink
            if(elementText=== leavetype){
                await element.click();
                break;
            }
        }

    }
    async selectFromDate(fromDate: string){
        await this.fromDateCalendar.fill(fromDate);
    }
    async selectToDate(toDate: string){
        await this.toDateCalendar.press('Control+a');
        await this.toDateCalendar.fill(toDate);
    }
    async typeComment(comment: string){
        await this.commentTextbox.fill(comment);
    }
    async clickAssignButton(){
        await this.assignButton.click();
    }
    
}