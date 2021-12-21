const frame = document.getElementById('your-frame-id');

describe('Webmail Testing', () => {
    
    it('Halaman Webmail', () =>  {
        cy.visit('https://www.polinema.ac.id/')
        cy.get('#menu-item-266').click()
    })
});
