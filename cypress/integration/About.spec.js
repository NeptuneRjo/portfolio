
describe('About', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('renders the about component', () => {
        cy.get('.about-main').should('be.visible')
    })

    it('renders the about image', () => {
        cy.get('.about-image').should('be.visible')
    })

    it('renders the image tags', () => {
        cy.get('.about-image-tags').should('be.visible')
    })

    it('renders the header and its text', () => {
        cy.get('.about-header').should('be.visible')
            .should('have.text', 'About Me')
    })

    it('renders the about text', () => {
        cy.get('.about-content p')
            .contains('Hello!').should('be.visible')
        
        cy.get('.about-content p').contains('My name is')
            .should('be.visible')
            
        cy.get('.about-content p').contains("I'm interested in creating")
            .should('be.visible')
    })

    it('renders the about-skills header', () => {
        cy.get('.about-skills-header').should('be.visible')
            .should('have.text', 'Here are a few of my skills / technologies')
    })

    it('the button takes you to the correct section', () => {
        cy.get('.about-contact').click()
        cy.url().should('include', '/#contact')
    })

})