
describe('Menu', () => {
    beforeEach(() => {
        cy.visit('https://neptunerjo.github.io/portfolio').scrollTo(0, 625)
    })

    it('should render the Menu when the correct y is reached', () => {
        cy.get('.menu-content')
    })

    describe('Menu Desktop', () => {
        it('should render only the desktop menu', () => {
            cy.get('.menu-desktop').should('be.visible')
            cy.get('.menu-mobile').should('not.be.visible')
        })

        it('should render the desktop links', () => {
            cy.get('.menu-desktop-item').should('be.visible')

            cy.get('.menu-desktop-item').contains('About').should('be.visible')
            cy.get('.menu-desktop-item').contains('Projects').should('be.visible')
            cy.get('.menu-desktop-item').contains('Contact').should('be.visible')
        })
    })
})
