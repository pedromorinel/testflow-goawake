import { goAwakeNoCaptcha } from "../pages/GoAwakeLinksPO"
import  homeObjects  from "../pages/GoAwakeHomePagePO"


describe('Trata Alerta', () => {
    it('passes', () => {
      cy.viewport(1920, 1080)  
      const filters = homeObjects.filterObjects();
      const treatment = homeObjects.treatmentObjects();
      cy.exec('node ./cypress/e2e/resources/postAlert1.js')
      goAwakeNoCaptcha();
      cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers')
      cy.wait(5000)
      cy.xpath(filters.filterCustomer).click();
      cy.xpath(filters.selectCustomer).click();
      cy.xpath(filters.switchOnline).click();
      cy.get(treatment.visualizeAlert).click()
      cy.xpath(treatment.selectMedia).click()
      cy.xpath(treatment.stepTwo).click()
      cy.xpath(treatment.stepThree).click()
      cy.xpath(treatment.filterTreatment).click()
      cy.xpath(treatment.selectTreatment).click()
      cy.xpath(treatment.textArea).click().type('Tratativa Válida')
      cy.xpath(treatment.finishTreatment).click()
      cy.wait('@customers').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);})
    })
  })

  