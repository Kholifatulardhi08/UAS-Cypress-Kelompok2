const frame = document.getElementById('your-frame-id');

describe('Profile Testing', () => {
    it('Melihat Tag list menu', () =>  {
        cy.visit('https://www.polinema.ac.id/')
        cy.get('#menu').find('li')
    })
});
