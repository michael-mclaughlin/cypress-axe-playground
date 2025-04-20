beforeEach(() => {
    cy.visit('http://localhost:8080');
    cy.addAxeCode(); // overwrite of injectAxe() by using axe-core, which fixes cypress-axe which has a require.resolve error
});
const colorContrastSection = '[data-cy="color-contrast-font-size-section"]';
const colorContrastSectionHeader = '[data-cy="header-color-contrast-font-size-section"]';
const whyHeaderButton = '[data-cy="color-contrast-font-exercise-learn-button-button-icon-button-dropdown"]'
const whyHeaderButtonDropdown = '[data-cy="color-contrast-font-exercise-learn-button-button-dropdown-container"]';

context('Font Size with Color Contrast Accessibility (A11Y)', () => {
    it('has the "correct section heading" on page load', () => {
        cy.get(colorContrastSection).should('be.visible').find('[data-cy="header-color-contrast-font-size-section"]').should('be.visible');
        /** Solution 1 (not ideal for this use case): using .within() to scope the mounting of the component to within the header.  .within() creates a function that you can alias the object with that will scope tests within */
        /** .within() is NOT the most correct use case for this test here...this is just an example... */
        cy.get(colorContrastSectionHeader).within(() => { // mounts the component and scopes for functional testing
            cy.get('[data-cy="heading-1"]')
                .should('be.visible')
                .and('have.text', 'Accessibility with Contrast Ratio and Font Size Exercise');
        });

        // /** Solution 2 (preferred for this use case): using .find() to use method chaining to find the heading.  No scoping to the parent component because we don't need to scope for this use case */
        cy.get(colorContrastSectionHeader)
            .find('[data-cy="heading-1"]') // mounts the component for static testing
            .should('be.visible')
            .and('have.text', 'Accessibility with Contrast Ratio and Font Size Exercise');
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "Why button dropdown"', () => {
        /** Solution (preferred for this use case): using .get() to target element */
        cy.get(whyHeaderButton).should('be.visible').and('have.text', 'Why?'); // checks for text value of button
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('shows the "Why button dropdown" content on click', () => {
        /** Solution (preferred for this use case): using .get() to target element */
        cy.get(whyHeaderButton).should('be.visible').click(); // clicks on button to show dropdown
        cy.get(whyHeaderButtonDropdown).should('be.visible'); // dropdown to show after button click
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });
});
