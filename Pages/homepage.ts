import { expect } from "@playwright/test";

export class Homepage{
    private usernameTextbox : any;
    private passwordTextbox : any;
    private loginButton : any;
    private page: any;
    private url : any

    constructor({page}:{page:any}){
        this.page =page;
        this.usernameTextbox= page.getByPlaceholder('Username');
        this.passwordTextbox= page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async gotoHomePage(){
        this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async enterUsername(username: any){
        await this.usernameTextbox.fill(username);
    }
    async enterPassword(password: any){
        await this.passwordTextbox.fill(password);
    }
    async clickOnLoginButton(){
        await this.loginButton.click();
    }
    async isLoginButtonVisible(){
        await expect(this.loginButton).toBeVisible();
    }

}