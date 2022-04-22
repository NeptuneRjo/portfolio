
describe('Menu', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/').scrollTo(0, 625)
    })

    it('renders the Menu when the correct y is reached', () => {
        cy.get('.menu-content')
    })

    describe('Menu Desktop', () => {
        it('renders only the desktop menu', () => {
            cy.get('.menu-desktop').should('be.visible')
            cy.get('.menu-mobile').should('not.be.visible')
        })

        it('renders the desktop links', () => {
            cy.get('.menu-desktop-item').should('be.visible')
            cy.get('.menu-desktop-item').should('have.length', 3)
        })

        it('renders the correct content for each link', () => {
            cy.get('.menu-desktop-item').contains('About').should('be.visible')

            cy.get('.menu-desktop-item').contains('Projects').should('be.visible')

            cy.get('.menu-desktop-item').contains('Contact').should('be.visible')
        })

        it('the About link takes you to the about section', () => {
            cy.get('.menu-desktop-item').contains('About').click()
            cy.url().should('include', '/#about')
        })

        it('the Projects link takes you to the projects section', () => {
            cy.get('.menu-desktop-item').contains('Projects').click()
            cy.url().should('include', '/#projects')
        })

        it('the Contact link takes you to the contact section', () => {
            cy.get('.menu-desktop-item').contains('Contact').click()
            cy.url().should('include', '/#contact')
        })

        it('does not render the menu if not on the correct y', () => {
            cy.scrollTo(0, 0)

            cy.get('.menu-content').should('not.exist')
        })
    })
    
    describe('Menu Mobile', () => {
        beforeEach(() => {
            cy.viewport(365, 760)
        })

        it('renders only the mobile menu', () => {
            cy.get('.menu-mobile').should('be.visible')
            cy.get('.menu-desktop').should('not.be.visible')
        })

        it('does not render the links if the toggle is not clicked', () => {
            cy.get('.menu-mobile-item').should('not.be.visible')
        })

        it('open the menu if the toggle is clicked', () => {
            cy.get('.menu-mobile svg').click();
            cy.get('.menu-mobile-item').should('be.visible');
        })

        it('closes the menu if the toggle is clicked', () => {
            cy.get('.menu-mobile svg').click();
            
            cy.get('.menu-mobile svg').click();
            cy.get('.menu-mobile-item').should('not.be.visible');
        })

        it('the About link takes you to the about section', () => {
            cy.get('.menu-mobile svg').click();

            cy.get('.menu-mobile-item').contains('About').click()
            cy.url().should('include', '/#about')
        })

        it('the Projects link takes you to the projects section', () => {
            cy.get('.menu-mobile svg').click();

            cy.get('.menu-mobile-item').contains('Projects').click()
            cy.url().should('include', '/#projects')
        })

        it('the Contact link takes you to the contact section', () => {
            cy.get('.menu-mobile svg').click();

            cy.get('.menu-mobile-item').contains('Contact').click()
            cy.url().should('include', '/#contact')
        })

        it('does not render the menu if not on the correct y', () => {
            cy.scrollTo(0, 0)

            cy.get('.menu-content').should('not.exist')
        })
    })
})
