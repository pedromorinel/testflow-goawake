import { goAwakeNoCaptcha } from "../pages/GoAwakeLinks"
import homeObjects  from "../pages/GoAwakeHomePage"


describe('Trata Alerta', () => {
    it('passes @3', () => {
      cy.viewport(1920, 1080)  
      const filters = homeObjects.filterObjects();
      const treatment = homeObjects.treatmentObjects();
      cy.exec('node ./cypress/e2e/resources/postAlert1.js')
      cy.exec('node ./cypress/e2e/resources/updateDriver.js')
      goAwakeNoCaptcha();
      cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers')
      cy.wait(5000)
      cy.get(filters.filterCustomer).click();
      cy.get(filters.selectCustomer).click();
      cy.wait(4000);
      cy.get(filters.filterDriver).click();
      cy.get(filters.searchDriver).click().type('Exemplo Motorista');
      cy.wait(3000);
      cy.get(filters.selectDriver).click();
      cy.get(filters.switchOnline).click();
      cy.get(treatment.visualizeAlert).click()
      cy.get(treatment.selectMedia).click()
      cy.get(treatment.stepTwo).click()
      cy.get(treatment.stepThree).click()
      cy.get(treatment.filterTreatment).click()
      cy.get(treatment.selectTreatment).click()
      cy.get(treatment.textArea).click().type('Tratativa Válida')
      cy.get(treatment.finishTreatment).click()
      cy.wait('@customers').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);})
    })
  })

  