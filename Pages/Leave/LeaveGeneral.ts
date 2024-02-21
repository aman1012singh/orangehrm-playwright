

export class LeaveGeneral{
    private page : any;
    private leaveSection : any;
   
    constructor({page}:{page: any}){
        this.page = page;
        this.leaveSection= page.locator('[class="oxd-topbar-body"]>nav>ul>li');

    }

    async selectLeaveSection(choice: string){
        const numberOfLeaveSection = await this.leaveSection.count();
        //click the TargetLink
        if(choice=== "Apply"){
            await await this.leaveSection.nth(0).click();
        }
        if(choice=== "My Leave"){
            await await this.leaveSection.nth(1).click();
        }
        if(choice=== "Entitlement"){
            await await this.leaveSection.nth(2).click();
        }
        if(choice=== "Reports"){
            await await this.leaveSection.nth(3).click();
        }
        if(choice=== "Configure"){
            await await this.leaveSection.nth(4).click();
        }
        if(choice=== "Leave List"){
            await await this.leaveSection.nth(5).click();
        }
        if(choice=== "Assign Leave"){
            await await this.leaveSection.nth(6).click();
        }

    }

}