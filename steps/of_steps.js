const I = actor();
const orderFormPage = require('../pages/of_pages_names');
const orderformPages = require("../pages/of_pages_names");

module.exports = {

    openPage(page) {
        I.amOnPage(page)
    },
    checkOwnerDomain(domain){
        I.waitForVisible(orderFormPage.iHaveDomainButton, 10)
        I.click(orderFormPage.iHaveDomainButton);
        I.click(orderFormPage.iRouteDomain);
        I.fillField(orderFormPage.domainField, domain);
        I.click(orderFormPage.domainNameButton)
    },
    registrateOF(firstname, email){
        I.waitForVisible(orderFormPage.inputName, 30);
        I.fillField(orderFormPage.inputName, firstname);
        I.fillField(orderFormPage.inputEmail, email);
        I.waitForElement(orderFormPage.loginContinueButton, 60);
        I.click(orderFormPage.loginContinueButton);
    },
    loginOF(email, password){
        I.waitForVisible(orderFormPage.signInButton, 30)
        I.click(orderformPages.signInButton);
        I.waitForElement(orderFormPage.inputLoginEmail, 40);
        I.fillField(orderFormPage.inputLoginEmail, email);
        I.fillField(orderFormPage.inputPass, password);
        I.click(orderFormPage.loginContinueButton);
    },
    continueOF(email){
        I.waitForElement(orderformPages.purchaseButton, 80)
        I.see( `${email}` , orderformPages.completeText );
    },
    negativeReg(firstname,email, message){
        I.waitForVisible(orderFormPage.inputName, 30);
        I.fillField(orderFormPage.inputName, firstname);
        I.fillField(orderFormPage.inputEmail, email);
        I.waitForElement(orderFormPage.loginContinueButton, 60);
        I.click(orderFormPage.loginContinueButton);
        I.waitForElement(orderFormPage.errorLoginMessage, 60);
        I.see(message, orderFormPage.errorLoginMessage)

    },
}