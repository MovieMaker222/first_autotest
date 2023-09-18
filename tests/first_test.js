Feature('etc');
const { devices } = require('playwright');
const orderformSteps =require('../steps/of_steps');
const orderformPages = require("../pages/of_pages_names");
const { I } = inject();

Scenario('registration on new OF',  ({ I }) => {

    let firstname = `${I.getUniqueName()}`
    let email = `${I.getUniqueAlphaNumeric(7)}@test.test`
    let domain = `${I.getUniqueAlphaNumeric(7)}.com`

    orderformSteps.openPage(orderformPages.stPage)
    orderformSteps.checkOwnerDomain(domain)
    orderformSteps.registrateOF(firstname, email)
    I.waitForElement(orderformPages.purchaseButton, 80)
    I.see( `Ви оформляєте замовлення як ${email}` , orderformPages.completeText );

});

Scenario('login on new OF', ({I}) => {

    let password = `123321`
    let email = `Iluag2282@gmail.com`
    let domain = `${I.getUniqueAlphaNumeric(7)}.com`

    orderformSteps.openPage(orderformPages.stPage)
    orderformSteps.checkOwnerDomain(domain)

    I.click(orderformPages.loginButton);

    orderformSteps.loginOF(email, password)
    I.waitForElement(orderformPages.purchaseButton, 80)
    I.see( `Ви оформляєте замовлення як ${email}` , orderformPages.completeText );
})
