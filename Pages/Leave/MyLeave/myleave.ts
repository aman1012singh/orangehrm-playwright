

export class MyLeave{
    private page : any;
    private fromDateCalendar: any;
    private toDateCalendar: any;
    
    private leaveStatus: any;
    private leaveStatusDropDown: any;


    private leaveType: any;
    private leaveTypeDropDown: any;
   
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

        this.searchButton=page.getByRole('button',{name:' Search '})
        this.resetButton=page.getByRole('button',{name:' Reset '})  ; 
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
    async clickResetButton(){
        await this.resetButton.click();
    }
    async clickSearchButton(){
        await this.searchButton.click();
    }
}