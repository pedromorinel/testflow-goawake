describe('Driver Filter Validation', () => {
    it('passes', () => {
      cy.viewport(1920, 1080)
      cy.exec('node ./cypress/e2e/webTests/postAlert1.js')
      cy.exec('node ./cypress/e2e/webTests/updateDriver.js')
      cy.visit('https://qa.goawakecloud.com.br/#/auth/external?t=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwLm1vcmluZWwiLCJpc3MiOiJnb2F3YWtlLXBvcnRhbCIsImV4cCI6MTY5Njg5MjgwODY1MiwidXNlciI6eyJpZCI6MzE1MSwiZnVsbE5hbWUiOiJQZWRybyBNb3JpbmVsIn19.Pqif2cXA3Iy4nBzeYzEGqsnqXQhow1xneOfWiB28HX8')
      cy.wait(5000)
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/nb-layout-header/nav/ngx-header/nb-actions/nb-action[3]/div/span').click()
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/nb-card/focus-filter-v2/div/div[1]/focus-tree-input/div').click()
      cy.wait(2000)
      cy.xpath('/html/body/div[2]/div/p-scrollpanel/div/div[1]/div/span/tree-root/tree-viewport/div/div/tree-node-collection/div/tree-node[7]/div/div/label/span').click()
      cy.wait(3000)
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/nb-card/focus-filter-v2/div/div[2]/focus-tree-input/div').click()
      cy.xpath('/html/body/div[2]/div/p-scrollpanel/div/div[1]/div/p-table/div/div/table/tbody/div[8]/label/span').click()
      cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers');
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/nb-card/focus-filter-v2/div/div[5]/button').click()
      cy.wait('@customers').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body).to.be.an('array');
        expect(interception.response.body.length).to.be.greaterThan(0);
      })  
    })
 });