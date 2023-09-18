const I = actor();
const orderFormPage = require('../pages/of_pages_names');

module.exports = {

    openPage(page) {
        I.amOnPage(page)
    },
    checkOwnerDomain(domain){
        I.waitForVisible(orderFormPage.domainField, 15)
        I.click({xpath: '//*[@id="app"]/div[1]/main/div/div/div[1]/section/div[1]/div[2]/div/div/div[1]/div[1]/div/div[1]/div/div[2]/label'});
        I.click({xpath: '//*[@id="app"]/div[1]/main/div/div/div[1]/section/div[1]/div[2]/div/div/div[1]/div[2]/div/div[1]/div/div[2]/label/div'});
        I.fillField(orderFormPage.domainField, domain);
        I.click({xpath : '//*[@id="app"]/div[1]/main/div/div/div[1]/section/div[1]/div[2]/div/div/div[2]/form/button/span'})
    },
    registrateOF(firstname, email){
        I.fillField(orderFormPage.inputName, firstname);
        I.fillField(orderFormPage.inputEmail, email);
        I.waitForElement({xpath:'//*[@id="app"]/div[1]/main/div/div/div[1]/section/div[2]/div[2]/div[1]/div[2]/div[2]/button'}, 60);
        I.click({xpath:'//*[@id="app"]/div[1]/main/div/div/div[1]/section/div[2]/div[2]/div[1]/div[2]/div[2]/button'});
    },
    loginOF(email, password){
        I.waitForElement(orderFormPage.inputLoginEmail, 40);
        I.fillField(orderFormPage.inputLoginEmail, email);
        I.fillField(orderFormPage.inputPass, password);
        //I.waitForElement({xpath:'//*[@id="app"]/div[2]/main/div/div/div[1]/section/div[2]/div[2]/div[1]/form/div[2]/div[1]/button'}, 60);
        I.click({xpath:'//*[@id="app"]/div[1]/main/div/div/div[1]/section/div[2]/div[2]/div[1]/form/div[2]/div[1]/button'});

    }
}