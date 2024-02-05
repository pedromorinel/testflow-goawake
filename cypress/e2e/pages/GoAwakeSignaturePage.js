class signatureObjects {
    constructor () {
        this.selectors = {};
    }

    goAwakeSignaturePage() {
        this.selectors = {
            filterDriver: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-ui-alarms > link-pdf-audit > div > nb-card:nth-child(2) > nb-card-body > div > div:nth-child(1) > focus-tree-input > div',
            selectDriver: 'body > div.ng-trigger.ng-trigger-animation.ng-tns-c19-2.ui-overlaypanel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > p-table > div > div > table > tbody > div:nth-child(4)',
            signatureButton: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-ui-alarms > link-pdf-audit > div > nb-card:nth-child(2) > nb-card-body > div > div:nth-child(2) > div > button',
            signatureArea: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-ui-alarms > link-pdf-audit > div > p-dialog.ng-tns-c18-1 > div > div.ui-dialog-content.ui-widget-content > div.signature-area > canvas',
            signatureConfirm: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-ui-alarms > link-pdf-audit > div > p-dialog.ng-tns-c18-1 > div > div.ui-dialog-content.ui-widget-content > div.btn-group > button.btn-signature'
        }
        return this.selectors;
    }
}

export default new signatureObjects();