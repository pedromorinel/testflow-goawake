import {goAwakeGestao} from "../pages/GoAwakeLinksPO";
import navBar from "../pages/GoAwakeGestaoPO";

describe('Edit Customer', () => {
    it('passes', () => {
        goAwakeGestao();
        cy.xpath(navBar.selectors.expandBar).click();
    })
})