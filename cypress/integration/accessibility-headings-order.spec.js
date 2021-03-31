beforeEach(() => {
    cy.visit('http://localhost:8080');
    cy.addAxeCode(); // overwrite of injectAxe() by using axe.min.js, which fixes axe-core which has a require.resolve error
});
const headingOrderSection = '[data-cy="heading-order-section"]'; // locator GOOD for small tests like this one;
const headingOrderSectionHeader = '[data-cy="header-heading-order-section"]'; // locator GOOD for small tests like this one
const headingOrderContainerDiv = '[data-cy="heading-order-container-div"]'; // locator GOOD for small tests like this one
const headingOrderSectionHeadingH1 = '[data-cy="heading-1"]'; // locator GOOD for small tests like this one
const headingOrderSectionHeadingH2 = '[data-cy="heading-2"]'; // locator GOOD for small tests like this one
const headingOrderSectionHeadingH3 = '[data-cy="heading-3"]'; // locator GOOD for small tests like this one
const headingOrderSectionHeadingH4 = '[data-cy="heading-4"]'; // locator GOOD for small tests like this one
const headingOrderSectionHeadingH5 = '[data-cy="heading-5"]'; // locator GOOD for small tests like this one
const headingOrderSectionHeadingH6 = '[data-cy="heading-6"]'; // locator GOOD for small tests like this one
context('Headings Order Accessibility (A11Y)', () => {
    it('has the "Section with a Header that contains an H1 element" test', () => {
        cy.get(headingOrderSection)
            .should('be.visible')
            .find(headingOrderSectionHeader)
            .find(headingOrderSectionHeadingH1)
            .should('be.visible')
            .and('have.text', 'Accessibility with Heading Order Exercise');
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "Headings in the INCORRECT order" within the test', () => {
        cy.get(headingOrderSection)
            .should('be.visible').find(headingOrderContainerDiv).should('be.visible') // mounts the Headings within the container div
            .within(() => { // scopes the test to within the headingOrderContainerDiv and it's contents
                cy.get(headingOrderSectionHeadingH6)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H6')
                    .next(headingOrderSectionHeadingH4)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H4')
                    .next(headingOrderSectionHeadingH2)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H2')
                    .next(headingOrderSectionHeadingH3)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H3')
                    .next(headingOrderSectionHeadingH5)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H5')
                    .next(headingOrderSectionHeadingH1)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H1');
            });
            
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });
});
