class driverPageObjects {
    constructor() {
        this.selectors = {}
    }

    driverObjects() {
        this.selectors = {
            newDriverButton: 'body > app-root > app-dashboard-layout > div > div.dashboard--content > mat-drawer-container > mat-drawer-content > div > app-drivers-list > cr-card > div > cr-card-title > div > cr-card-actions > div > button',
            filterCustomer: '#customer > div > div.ui-dropdown-label-container > label',
            inputCustomer: '#customer > div > div.ng-trigger.ng-trigger-overlayAnimation.ng-tns-c23-23.ui-dropdown-panel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div.ui-dropdown-filter-container.ng-tns-c23-23.ng-star-inserted > input',
            selectCustomer: '#customer > div > div.ng-trigger.ng-trigger-overlayAnimation.ng-tns-c23-23.ui-dropdown-panel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div.ui-dropdown-items-wrapper > ul > p-dropdownitem > li',
            editDriver: 'body > app-root > app-dashboard-layout > div > div.dashboard--content > mat-drawer-container > mat-drawer-content > div > app-drivers-list > cr-card > div > cr-card-body > div > p-table > div > div > table > tbody > tr:nth-child(5) > td:nth-child(9) > div > button:nth-child(2)',
            nameInput: 'body > p-dynamicdialog > div.ng-trigger.ng-trigger-animation.ng-tns-c28-29.ui-dialog.ui-dynamicdialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div.ui-dialog-content.ui-widget-content > driver-edit > div > div > input',
            driverLicenceInput: 'body > p-dynamicdialog > div.ng-trigger.ng-trigger-animation.ng-tns-c28-29.ui-dialog.ui-dynamicdialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div.ui-dialog-content.ui-widget-content > driver-edit > div > div > p-inputmask > input',
            confirmEdit: 'body > p-dynamicdialog > div.ng-trigger.ng-trigger-animation.ng-tns-c28-29.ui-dialog.ui-dynamicdialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div.ui-dialog-content.ui-widget-content > driver-edit > div > div > button',
            driverId: 'body > app-root > app-dashboard-layout > div > div.dashboard--content > mat-drawer-container > mat-drawer-content > div > app-drivers-list > cr-card > div > cr-card-body > div > p-table > div > div > table > tbody > tr:nth-child(5) > td:nth-child(1) > div'
        }
        return this.selectors;
    }

}

export default new driverPageObjects()