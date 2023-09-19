Feature('etc');
const { devices } = require('playwright');
const orderformSteps =require('../steps/of_steps');
const orderformPages = require("../pages/of_pages_names");
const { I } = inject();

xScenario('registration on new OF',  ({ I }) => {

    let firstname = `${I.getUniqueName()}`
    let email = `${I.getUniqueAlphaNumeric(7)}@test.test`
    let domain = `${I.getUniqueAlphaNumeric(7)}.com`

    orderformSteps.openPage(orderformPages.stPage)
    orderformSteps.checkOwnerDomain(domain)
    orderformSteps.registrateOF(firstname, email)
    orderformSteps.continueOF(email)

});

let accounts = new DataTable(['email', 'password']);
accounts.add([`${I.getUniqueAlphaNumeric(7)}@test.test`, '123321']);
accounts.add([`Iluag2282@gmail.com`, `123321` ]);

Data(accounts).Scenario('login on new OF', ({I, current}) => {
    let email = current.email;
    let domain = `${I.getUniqueAlphaNumeric(7)}.com`

    orderformSteps.openPage(orderformPages.stPage)
    orderformSteps.checkOwnerDomain(domain)
    orderformSteps.loginOF(current.email, current.password)
    if (orderformSteps.visiblePurchaseButton()) {
        orderformSteps.errorOF()
    }
    else {
        orderformSteps.continueOF(email) }
});
