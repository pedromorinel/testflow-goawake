class managementObjects {
    constructor() {
        this.selectors = {}
    }

    navBar () {
        this.selectors = {
            menu: 'body > app-root > app-dashboard-layout > div > div.header > app-header > div > mat-toolbar > div.header-menu-brand > button',
            expandBar: 'body > app-root > app-dashboard-layout > div > div.dashboard--content > mat-drawer-container > mat-drawer > div > app-sidebar > div > mat-nav-list > app-menu-list-item.ng-tns-c15-3.ng-star-inserted > a > div',
            customerScreen: 'body > app-root > app-dashboard-layout > div > div.dashboard--content > mat-drawer-container > mat-drawer > div > app-sidebar > div > mat-nav-list > app-menu-list-item.ng-tns-c13-38.ng-star-inserted > div > app-menu-list-item.ng-tns-c13-43.ng-tns-c13-38.ng-star-inserted > a > div > div.mat-list-item-ripple.mat-ripple',
            equipmentScreen: 'body > app-root > app-dashboard-layout > div > div.dashboard--content > mat-drawer-container > mat-drawer > div > app-sidebar > div > mat-nav-list > app-menu-list-item.ng-tns-c13-38.ng-star-inserted > div > app-menu-list-item.ng-tns-c13-42.ng-tns-c13-38.ng-star-inserted > a > div > div.mat-list-item-ripple.mat-ripple',
            dealerScreen: '/html/body/app-root/app-dashboard-layout/div/div[2]/mat-drawer-container/mat-drawer/div/app-sidebar/div/mat-nav-list/app-menu-list-item[1]/div/app-menu-list-item[1]/a/div/span',
            customerChildScreen: '/html/body/app-root/app-dashboard-layout/div/div[2]/mat-drawer-container/mat-drawer/div/app-sidebar/div/mat-nav-list/app-menu-list-item[1]/div/app-menu-list-item[4]/a/div/span',
            driverScreen: 'body > app-root > app-dashboard-layout > div > div.dashboard--content > mat-drawer-container > mat-drawer > div > app-sidebar > div > mat-nav-list > app-menu-list-item.ng-tns-c15-3.ng-star-inserted > div > app-menu-list-item.ng-tns-c15-11.ng-tns-c15-3.ng-star-inserted > a > div'
        }
        return this.selectors;
    }
}



export default new managementObjects();