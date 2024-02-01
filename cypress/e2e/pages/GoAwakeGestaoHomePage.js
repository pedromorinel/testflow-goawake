class navBar {
    constructor() {
        this.selectors = {
            expandBar: '/html/body/app-root/app-dashboard-layout/div/div[2]/mat-drawer-container/mat-drawer/div/app-sidebar/div/mat-nav-list/app-menu-list-item[1]/a/div/span[1]',
            customerScreen: '/html/body/app-root/app-dashboard-layout/div/div[2]/mat-drawer-container/mat-drawer/div/app-sidebar/div/mat-nav-list/app-menu-list-item[1]/div/app-menu-list-item[3]/a/div/span',
            equipmentScreen: '/html/body/app-root/app-dashboard-layout/div/div[2]/mat-drawer-container/mat-drawer/div/app-sidebar/div/mat-nav-list/app-menu-list-item[1]/div/app-menu-list-item[2]/a/div/span',
            dealerScreen: '/html/body/app-root/app-dashboard-layout/div/div[2]/mat-drawer-container/mat-drawer/div/app-sidebar/div/mat-nav-list/app-menu-list-item[1]/div/app-menu-list-item[1]/a/div/span',
            customerChildScreen: '/html/body/app-root/app-dashboard-layout/div/div[2]/mat-drawer-container/mat-drawer/div/app-sidebar/div/mat-nav-list/app-menu-list-item[1]/div/app-menu-list-item[4]/a/div/span'
        }
    }
}

export default new navBar();