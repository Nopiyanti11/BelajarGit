describe('login with case handling', () => {
    const users = [
        { username: 'standard_user', password: 'secret_sauce' }, //sukses
        { username: 'locked_out_user', password: 'secret_sauce' }, //Terkunci
        { username: 'invalid_user', password: 'wrong' } //salah
    ];
    users.forEach(({ username, password }) => {
    it(`login test for ${username}`, () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
        
        cy.location('pathname', { timeout: 3000 }).then((path) => {
            switch (path) {
                case '/inventory.html':
                    cy.log('login berhasil');
                    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
                    cy.wait(2000)
                    break;
                 case'/':
                 //jika tetap dihalaman login, berarti gagal login
                 cy.get('[data-test="error"]').invoke('text').then((msg) => {
                    switch (true) {
                        case msg.includes('locket_out'):
                            cy.log('Akun Terkunci');
                            break;
                        case msg.includes('username and password do not match'):
                            cy.log('username/password salah');
                            break;
                        default:
                            cy.log('Pesan erorr tidak dikenali: ' + msg);
                    }
                });
                break;

            }
        });
    });
});
});


