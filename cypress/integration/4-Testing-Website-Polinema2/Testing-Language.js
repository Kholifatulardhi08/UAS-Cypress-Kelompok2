const frame = document.getElementById('your-frame-id');

describe('Language Testing', () => {
    it('Languange Testing', () =>  {
        cy.visit('https://www.polinema.ac.id/')
        cy.get('#qtranslate-chooser').click()
    })
});
