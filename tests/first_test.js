Feature('etc');
const { devices } = require('playwright');
const orderformSteps =require('../steps/of_steps');
const orderformPages = require("../pages/of_pages_names");
const orderFormPage = require("../pages/of_pages_names");
const { I } = inject();

Scenario('registration on new OF',  ({ I }) => {

    let firstname = `${I.getUniqueName()}`
    let email = `${I.getUniqueAlphaNumeric(7)}@test.test`
    let domain = `${I.getUniqueAlphaNumeric(7)}.com`

    orderformSteps.openPage(orderformPages.stPage)
    orderformSteps.checkOwnerDomain(domain)
    orderformSteps.registrateOF(firstname, email)
    orderformSteps.continueOF(email)

});
Scenario('Positive login on new OF', ({I}) => {
    let email = 'Iluag2282@gmail.com';
    let domain = `${I.getUniqueAlphaNumeric(7)}.com`;
    let password = '123321'

    orderformSteps.openPage(orderformPages.stPage)
    orderformSteps.checkOwnerDomain(domain)
    orderformSteps.loginOF(email, password)
    orderformSteps.continueOF(email)
});

let accounts = new DataTable(['firstname', 'email']);
accounts.add([ `${I.getUniqueName()}`, `${I.getUniqueAlphaNumeric(7)}@.ail.ru`]);
accounts.add([ `${I.getUniqueName()}`, `${I.getUniqueAlphaNumeric(7)}@mail.ru` ]);

Data(accounts).Scenario('Negative register on new OF', ({I , current}) => {
    let domain = `${I.getUniqueAlphaNumeric(7)}.com`;
    let message = ' ';
    let email = current.email;

    orderformSteps.openPage((orderformPages.stPage))
    orderformSteps.checkOwnerDomain(domain)
    if(email.includes('@mail.ru')){
        message = orderFormPage.errorRussianMessage;
    }
    else {
        message = orderFormPage.errorFailedMessage;
    }
    orderformSteps.negativeReg(current.firstname, current.email, message)

});
