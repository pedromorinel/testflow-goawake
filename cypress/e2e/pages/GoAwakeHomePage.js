class homeObjects {
    constructor() {
        this.selectors = {};
    }

    filterObjects() {
            this.selectors = {
                filterCustomer: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > nb-card > focus-filter-v2 > div > div:nth-child(1) > focus-tree-input > div',
                searchCustomer: 'body > div.ng-trigger.ng-trigger-animation.ng-tns-c18-0.ui-overlaypanel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > span > div > input',
                filterDriver: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > nb-card > focus-filter-v2 > div > div:nth-child(2) > focus-tree-input',
                filterVehicle: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > nb-card > focus-filter-v2 > div > div:nth-child(3) > focus-tree-input > div',
                selectCustomer: '#tree2 > tree-viewport > div > div > tree-node-collection > div > tree-node > div > div > label > span',
                switchOnline: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-fatigue-v2 > div > div > div:nth-child(2) > div.col-md-10.pr-0 > nb-card > nb-card-header > div > div.col-md-5 > div > div:nth-child(4) > nb-action > label > div > span',
                searchDriver: 'body > div.ng-trigger.ng-trigger-animation.ng-tns-c18-1.ui-overlaypanel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > p-table > div > div > table > thead > div',
                searchVehicle: 'body > div.ng-trigger.ng-trigger-animation.ng-tns-c18-2.ui-overlaypanel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > p-table > div > div > table > thead > div > input',
                selectVehicle: 'body > div.ng-trigger.ng-trigger-animation.ng-tns-c18-2.ui-overlaypanel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > p-table > div > div > table > tbody > div > label > span',
                selectDriver: 'body > div.ng-trigger.ng-trigger-animation.ng-tns-c18-1.ui-overlaypanel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > p-table > div > div > table > tbody > div > label',
                searchAlerts: '#filter'
            };
        return this.selectors;
    }
    treatmentObjects() {
            this.selectors = {
                visualizeAlert: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-fatigue-v2 > div > div > div:nth-child(2) > div.col-md-10.pr-0 > nb-card > nb-card-body > p-table > div > div > table > tbody > tr:nth-child(1) > td:nth-child(9) > span > button > img',
                invalidateAlert: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-fatigue-v2 > div > div > div.modal.fade.in.show > div > div > treatment-flow > div > div > div.treat__content > div.ng-star-inserted > treatment-step-one > div > div > div.row.mt-3.step__footer > div:nth-child(1) > button',
                confirmInvalidation: 'body > div.alertify.ajs-movable.ajs-closable.ajs-pinnable.ajs-pulse > div.ajs-modal > div > div.ajs-footer > div.ajs-primary.ajs-buttons > button.ajs-button.ajs-ok',
                selectMedia: '#itemToHistory > div.picture > div > img',
                stepTwo: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-fatigue-v2 > div > div > div.modal.fade.in.show > div > div > treatment-flow > div > div > div.treat__content > div.ng-star-inserted > treatment-step-one > div > div > div.row.mt-3.step__footer > div:nth-child(3) > button',
                stepThree: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-fatigue-v2 > div > div > div.modal.fade.in.show > div > div > treatment-flow > div > div > div.treat__content > div.ng-star-inserted > treatment-step-two > div > div > div.row.mt-3.step__footer > div:nth-child(3) > button',
                filterTreatment: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-fatigue-v2 > div > div > div.modal.fade.in.show > div > div > treatment-flow > div > div > div.treat__content > div.ng-star-inserted > treatment-step-three > div > div > div:nth-child(1) > div.col-md-5 > span:nth-child(2) > p-dropdown > div > label',
                selectTreatment: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-fatigue-v2 > div > div > div.modal.fade.in.show > div > div > treatment-flow > div > div > div.treat__content > div.ng-star-inserted > treatment-step-three > div > div > div:nth-child(1) > div.col-md-5 > span:nth-child(2) > p-dropdown > div > div.ng-trigger.ng-trigger-overlayAnimation.ng-tns-c31-13.ui-dropdown-panel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div.ui-dropdown-items-wrapper > ul > li:nth-child(1)',
                textArea: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-fatigue-v2 > div > div > div.modal.fade.in.show > div > div > treatment-flow > div > div > div.treat__content > div.ng-star-inserted > treatment-step-three > div > div > div:nth-child(1) > div.col-md-5 > span:nth-child(3) > textarea',
                finishTreatment: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-fatigue-v2 > div > div > div.modal.fade.in.show > div > div > treatment-flow > div > div > div.treat__content > div.ng-star-inserted > treatment-step-three > div > div > div.row.mt-3.step__footer > div.col-md-4 > button'
            };
        return this.selectors;
    }

    navBar() {
        this.selectors = {
            auditPage: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > nb-sidebar.menu-sidebar.left.expanded > div > div > nb-menu > ul > li:nth-child(3) > a > span'
        }
        return this.selectors;
    }
}

export default new homeObjects();


