const frame = document.getElementById('your-frame-id');

describe('Library Testing', () => {
    it('Library Testing', () =>  {
        cy.visit('https://www.polinema.ac.id/')
        cy.get('#menu-item-269').click()
    })
});
