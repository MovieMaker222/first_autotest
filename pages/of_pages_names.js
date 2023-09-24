
module.exports={

    stPage : 'https://hostiq.ua/order/?pid=405',
    domPage : 'https://hostiq.ua/order/?domain=test.com&domainoption=transfer',
    testPage : 'https://hostiq.hq-dev.net/order/?pid=408&promo=HQ10FREETRIAL',
    sslPage : 'https://hostiq.ua/order/?pid=217',
    domainField : '//*[@id="input-87"]',
    inputName : '//*[@data-attr="reg-name"]//input',
    inputEmail : '//*[@data-attr="reg-email"]//input',
    inputLoginEmail : '//*[@data-attr="login-email"]//input',
    inputPass : '//*[@data-attr="password"]//input',
    completeText : '//div[@class="col-sm-9 col-12"]',
    purchaseButton : '//button[@type="button" and @class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default secondary"]',
    iHaveDomainButton : '//input[@data-attr="domain-no-register"]/parent::div/following-sibling::label',
    iWantTransferButton : '//input[@data-attr="transfer-to-iq"]/following-sibling::div[1]',
    iRouteDomain : '//*[@data-attr="transfer-to-user"]/parent::div/following-sibling::label',
    domainNameButton : '//button[@type="button" and @class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default primary"]',
    loginContinueButton : '//button[@type="button" and @class="v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default primary"]',
    signInButton : '//*[@data-attr="sign-in"]',
    errorLoginMessage : '//div[@class="info-message invalid py-0 px-3"]',
    errorFailedMessage: 'Перевірте формат email, повинно бути щось типу: user@domain.com' || 'Проверьте формат email, должно быть что-то типа: user@domain.com' || 'Check the email format, it should be something like: user@domain.com',
    errorRussianMessage: 'У нас заборонені російські поштові сервіси, тому що їх використання загрожує безпеці даних клієнтів. Будь ласка, введіть іншу електронну пошту для реєстрації' || 'У нас запрещены российские почтовые сервисы, потому что их использование угрожает безопасности данных клиентов. Пожалуйста, введите другую электронную почту для регистрации' || 'We have blocked Russian email services because they threaten the security of customer data. Please enter a different email address to sign up',

}