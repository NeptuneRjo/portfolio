
describe('Nav', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('renders the nav', () => {
        cy.get('.nav-main')
    })

    describe('Nav desktop', () => {
        it('only renders the desktop nav', () => {
            cy.get('.nav-desktop').should('be.visible')
            cy.get('.nav-mobile').should('not.be.visible')
        })

        it('the desktop links are rendered', () => {
            cy.get('.nav-desktop-item').should('be.visible')
                .should('have.length', 3)
        })

        it('renders the correct content for each link', () => {
            cy.get('.nav-desktop-item').contains('About')
                .should('be.visible')

            cy.get('.nav-desktop-item').contains('Projects')
                .should('be.visible')

            cy.get('.nav-desktop-item').contains('Contact')
                .should('be.visible')
        })

        it('the About link takes you to the about section', () => {
            cy.get('.nav-desktop-item').contains('About').click()
            cy.url().should('include', '/#about')
        })

        it('the Projects link takes you to the projects section', () => {
            cy.get('.nav-desktop-item').contains('Projects').click()
            cy.url().should('include', '/#projects')
        })

        it('the Contact link takes you to the contact section', () => {
            cy.get('.nav-desktop-item').contains('Contact').click()
            cy.url().should('include', '/#contact')
        })
    })

    describe('Nav mobile', () => {
        beforeEach(() => {
            cy.viewport(365, 760)
        })

        it('renders only the mobile nav', () => {
            cy.get('.nav-mobile').should('be.visible')
            cy.get('.nav-desktop').should('not.be.visible')
        })

        it('does not render the links if the toggle is not clicked', () => {
            cy.get('.nav-mobile-items').should('not.be.visible')
        })

        it('open the nav if the toggle is clicked', () => {
            cy.get('.nav-mobile svg').click();
            cy.get('.nav-mobile-item').should('be.visible');
        })

        it('closes the nav if the toggle is clicked', () => {
            cy.get('.nav-mobile svg').click();
            
            cy.get('.nav-mobile svg').click();
            cy.get('.nav-mobile-items').should('not.be.visible');
        })

        it('the About link takes you to the about section', () => {
            cy.get('.nav-mobile svg').click();

            cy.get('.nav-mobile-item').contains('About').click()
            cy.url().should('include', '/#about')
        })

        it('the Projects link takes you to the projects section', () => {
            cy.get('.nav-mobile svg').click();

            cy.get('.nav-mobile-item').contains('Projects').click()
            cy.url().should('include', '/#projects')
        })

        it('the Contact link takes you to the contact section', () => {
            cy.get('.nav-mobile svg').click();

            cy.get('.nav-mobile-item').contains('Contact').click()
            cy.url().should('include', '/#contact')
        })
    })
})