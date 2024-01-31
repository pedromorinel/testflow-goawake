const { main } = require ('./geraAlerta.js');

main();


describe('Trata Alerta', () => {
    it('passes', () => {
      cy.viewport(1920, 1080)
      cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api//v2/audit/').as('post')
      cy.visit('https://qa.goawakecloud.com.br/#/auth/external?t=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aGlhZ28uZ2FiYmkiLCJpc3MiOiJnb2F3YWtlLXBvcnRhbCIsImV4cCI6MTY4OTM5OTI0MTA5OSwidXNlciI6eyJpZCI6MTYwOSwiZnVsbE5hbWUiOiJUaGlhZ28gR2FiYmkgW1NVUF0ifX0.hFf2VKcQ5uq6r8-tm-nCYjaalupYtPoHZmZ1V3z9H4A')
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[2]/div[1]/nb-card/nb-card-header/div/div[2]/div/div[4]/nb-action/label/div/span').click()
      cy.wait(10000)
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/nb-layout-header/nav/ngx-header/nb-actions/nb-action[3]/div/span').click()
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[2]/div[1]/nb-card/nb-card-body/p-table/div/div/table/tbody/tr[1]/td[9]/span/button/img').click()
      cy.wait(2000)
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-one/div/div/div[2]/div[1]/table/tbody/tr/td[1]').click({multiple:  true})
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-one/div/div/div[3]/div[3]/button').click()
      cy.wait(2000)
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-three/div/div/div[1]/div[2]/span[1]/p-dropdown/div/label').click()
      cy.wait(2000)
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-three/div/div/div[1]/div[2]/span[1]/p-dropdown/div/div[4]/div[2]/ul/li[2]/span').click()
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-three/div/div/div[1]/div[2]/span[2]/textarea').click().type('Teste Tratativa')
      cy.xpath('/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-ui-alarms/ngx-fatigue-v2/div/div[3]/div/div/treatment-flow/div/div/div[3]/div[2]/treatment-step-three/div/div/div[2]/div[3]/button').click()
      cy.wait('@post').then((interception) => {
        expect(interception.response.statusCode).to.eq(201);
    });
    })
  })