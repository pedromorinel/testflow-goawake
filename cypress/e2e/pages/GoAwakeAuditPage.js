class auditObjects {
    constructor () {
        this.selectors = {}
    }

    filters () {
        this.selectors = {
            riskRating: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(1)',
            alertType: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(2)',
            vehicle: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(3)',
            prefix: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(4)',
            driver: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(5)',
            auditId: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(6)',
            alarmDate: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(7)',
            availableDate: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(8)',
            treatment: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(9)',
            treatmentStarted: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(10)',
            treatedIn: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div > div.row > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(11)',
            treatmentAuthor: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > thead > tr.headerAlarmTable.ng-star-inserted > th:nth-child(12)'
        }   
        return this.selectors;
    }

    auditTable() {
        this.selectors = {
            alertComunicateWithSignature: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div:nth-child(3) > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > tbody > tr:nth-child(1) > td:nth-child(13) > span:nth-child(1) > span',
            alertComunicate: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div > div.row > div > nb-card > nb-card-body > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > tbody > tr:nth-child(1) > td:nth-child(13) > span:nth-child(1) > button',
            auditButton: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div > div.modal.fade.in.show > div > div > div.modal-body > div.row > div > div > treatment-step-four > div > div > div:nth-child(1) > div.col-md-4.step-one__list-pictures.p-0 > div.audit-actions.pt-2 > div > button.revisar-btn',
            auditComment: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div > div.modal.fade.in.show > div > div > div > div > div:nth-child(2) > div:nth-child(5) > div > textarea',
            auditApprove: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div > div.modal.fade.in.show > div > div > div > div > div:nth-child(2) > div.row.revisarBtnOpcoes > div:nth-child(1) > button',
            signatureText: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div > div.modal.fade.in.show > div > div > div.modal-body > div.row > div > div > treatment-step-four > div > div > div:nth-child(1) > div.col-md-4.step-one__list-pictures.p-0 > div.audit-actions.pt-2 > span',
            signatureDiv: 'body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > filters-outlet > ngx-audit > div > div.modal.fade.in.show > div > div > div.modal-body > div.row > div > div > treatment-step-four > div > div > div:nth-child(1) > div.col-md-4.step-one__list-pictures.p-0 > div.signature.ng-star-inserted'
        }
        return this.selectors;
    }

}

export default new auditObjects();