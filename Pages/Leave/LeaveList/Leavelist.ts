import { expect } from "@playwright/test";
import { waitForDebugger } from "inspector";

export class LeaveList{
    private page : any;
    private fromDateCalendar: any;
    private toDateCalendar: any;
    
    private leaveStatus: any;
    private leaveStatusDropDown: any;


    private leaveType: any;
    private leaveTypeDropDown: any;
    private subUnit: any;
    private subUnitDropDown: any;
    private empNameTextbox: any
    private empNameSuggestion: any
    private pastEmpEnableButton: any;
    private searchButton: any;
    private resetButton: any;

    constructor({page}:{page: any}){
        this.page = page;
        this.fromDateCalendar =page.getByPlaceholder('yyyy-dd-mm').first()
        this.toDateCalendar= page.getByPlaceholder('yyyy-dd-mm').nth(1);
    
        this.leaveStatusDropDown= page.locator('[class="oxd-select-option"]>span');
        this.leaveStatus=page.getByText('Select', { exact: true });

        this.leaveTypeDropDown= page.locator('[class="oxd-select-option"]>span');
        this.leaveType=page.getByText('-- Select --').first();



        this.subUnitDropDown= page.locator('[class="oxd-select-option --indent-1"]>span');
        this.subUnit=page.getByText('-- Select --').last();
       
        this.empNameTextbox= page.getByPlaceholder('Type for hints...');
        this.empNameSuggestion= page.locator('[class="oxd-autocomplete-option"]>span')
    
        this.searchButton=page.getByText(' Search ')
        this.resetButton=page.getByText(' Reset ')  ; 



        this.pastEmpEnableButton = page.locator('[class="oxd-switch-input oxd-switch-input--active --label-right"]')
    }
    async selectFromDate(fromDate: string){
        await this.fromDateCalendar.fill(fromDate);
        
    }
    async selectToDate(toDate: string){
        await this.toDateCalendar.fill(toDate);
    }


    async selectLeaveStatus(status : string ){
        await this.leaveStatus.click();
        await this.page.waitForTimeout(2000);
        const numberOfSuggestions=await this.leaveStatusDropDown.count();
        for(let i=0; i<numberOfSuggestions; i++){
            //element at ith Index
            const element = await this.leaveStatusDropDown.nth(i);
            //text of ith element
            const elementText = await element.textContent();
            //click the TargetLink
            if(elementText=== status){
                await element.click();
                break;
            }
        }
        
    }




    async selectLeaveType(leavetype: string){
        await this.leaveType.click();
        await this.page.waitForTimeout(2000); 
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



    async selectEmpName(nameHint: string, name: string){

        await  this.empNameTextbox.fill(nameHint);
        await this.page.waitForTimeout(2000);
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

    async selectSubUnit(subunit: string){
        await this.subUnit.click();
        await this.page.waitForTimeout(2000); 
        const numberOfSuggestions =await this.subUnitDropDown.count();
        for(let i=0; i<numberOfSuggestions; i++){
            //element at ith Index
            const element = await this.subUnitDropDown.nth(i);
            //text of ith element
            const elementText = await element.textContent();
            //click the TargetLink
            if(elementText=== subunit){
                await element.click();
                
                break;
            }
        }

    }

    async clickOnPastEmpEnableButton(){
        await this.pastEmpEnableButton.click();
    }
    async clickResetButton(){
        await this.resetButton.click();
    }
    async clickSearchButton(){
        await this.searchButton.click();
    }
}