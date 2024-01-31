class homeObjects {
    constructor() {
        this.selectors = {};
    }

    filterObjects() {
            this.selectors = {
                filterCustomer: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/nb-card/focus-filter-v2/div/div[1]/focus-tree-input/div',
                filterDriver: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/nb-card/focus-filter-v2/div/div[2]/focus-tree-input/div/span',
                filterVehicle: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/nb-card/focus-filter-v2/div/div[3]/focus-tree-input/div/span',
                selectCustomer: '/html/body/div[2]/div/p-scrollpanel/div/div[1]/div/span/tree-root/tree-viewport/div/div/tree-node-collection/div/tree-node[8]/div/div/label',
                switchOnline: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[2]/div[1]/nb-card/nb-card-header/div/div[2]/div/div[4]/nb-action/label/div/span'
            };
        return this.selectors
    }
    treatmentObjects() {
            this.selectors = {
                visualizeAlert: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-ui-alarms > ngx-fatigue-v2 > div > div:nth-child(3) > div.col-md-10.pr-0 > nb-card > nb-card-body > p-table > div > div > table > tbody > tr:nth-child(1) > td:nth-child(9) > span > button > img',
                selectMedia: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-one/div/div/div[2]/div[1]/p-scrollpanel/div/div[1]/div/div/ul/li[1]/div[1]/img',
                stepTwo: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-one/div/div/div[3]/div[3]/button',
                stepThree: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-two/div/div/div[2]/div[3]/button',
                filterTreatment: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-three/div/div/div[1]/div[2]/span[1]/p-dropdown/div/label',
                selectTreatment: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-three/div/div/div[1]/div[2]/span[1]/p-dropdown/div/div[4]/div[2]/ul/li[2]/span',
                textArea: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-three/div/div/div[1]/div[2]/span[2]/textarea',
                finishTreatment: '/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-three/div/div/div[2]/div[3]/button'
            };
        return this.selectors
    }
}

export default new homeObjects();


