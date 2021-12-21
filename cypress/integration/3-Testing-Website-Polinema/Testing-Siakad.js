const frame = document.getElementById('your-frame-id');

describe('Siakad Testing', () => {
    it('Membuka Web Siakad Melalui Web Polinema', () =>  {
        cy.visit('https://www.polinema.ac.id/')
        cy.get('#menu-item-267').click()
    })
});
