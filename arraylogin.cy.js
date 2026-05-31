const username = ["standard_user", 'problem_user']

username.forEach(usernames => {
    it ('Test case login', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get ('[data-test="username"]').type(usernames)
        cy.get ('[data-test="password"]').type("secret_sauce")
        cy.get ('[data-test="login-button"]').click()
        cy.wait(1000)
    })
})