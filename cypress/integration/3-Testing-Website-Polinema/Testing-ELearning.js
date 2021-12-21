const frame = document.getElementById('your-frame-id');

describe('E-Learning Testing', () => {
    it('E-Learning Testing', () =>  {
        cy.visit('https://www.polinema.ac.id/')
        cy.get('#menu-item-268').click()

    })
});
