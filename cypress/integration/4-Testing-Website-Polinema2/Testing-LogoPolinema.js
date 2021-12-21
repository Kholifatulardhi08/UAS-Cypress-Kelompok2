const frame = document.getElementById('your-frame-id');

describe('Logo Testing', () => {
    it('Logo Testing', () =>  {
        cy.visit('https://www.polinema.ac.id/')
        cy.get('#menu-item-268').click()
        cy.get('#logo').click()

    })
});
