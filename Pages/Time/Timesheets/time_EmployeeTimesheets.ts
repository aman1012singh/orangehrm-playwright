export class EmployeeTimeSheets{
    private page: any
    private empNametextBox : any

    constructor({page}: {page:any}){
        this.page= page;
        this.empNametextBox = page.getByPlaceholder('Type for hints...');
    }

    async enterEmployeeName(empName: any){
        await this.empNametextBox.click();
        await this.empNametextBox.fill(empName)
        }
}