const frame = document.getElementById('your-frame-id');

describe('Searching Testing', () => {
    it('Melakukan Pencarian', () =>  {
        cy.visit('https://www.polinema.ac.id/'),
                cy.get('[id="s"]').type('polinema')
                cy.get('input[type="search"]').click()
                cy.get('[id="searchsubmit"]').click()

            })
        })
        