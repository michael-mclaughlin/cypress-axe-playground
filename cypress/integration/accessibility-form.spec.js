const form = '[data-cy="form"]';
const fieldset = '[data-cy="fieldset-container"]';
const legend = '[data-cy="legend"]';
const nameDiv = '[data-cy="name-div"]';
const addressDiv = '[data-cy="address-div"]';
const address2Div = '[data-cy="address2-div"]';
const cityDiv = '[data-cy="city-div"]';
const stateDiv = '[data-cy="state-div"]';
const zipDiv = '[data-cy="zip-div"]';
const phoneDiv = '[data-cy="phone-div"]';
const emailDiv = '[data-cy="email-div"]';
const buttonDiv = '[data-cy="button-div"]';
const nameInputLabel = '[data-cy="name-label-container"]';
const nameInput = '[data-cy="name-input"]';
const addressInputLabel = '[data-cy="address-label-container"]';
const addressInput = '[data-cy="address-input"]';
const address2InputLabel = '[data-cy="address2-label-container"]';
const address2Input = '[data-cy="address2-input"]';
const cityInputLabel = '[data-cy="city-label-container"]';
const cityInput = '[data-cy="city-input"]';
const stateInputLabel = '[data-cy="state-label-container"]';
const stateInput = '[data-cy="state-input"]';
const zipInputLabel = '[data-cy="zip-label-container"]';
const zipInput = '[data-cy="zip-input"]';
const phoneInputLabel = '[data-cy="phone-label-container"]';
const phoneInput = '[data-cy="phone-input"]';
const emailInputLabel = '[data-cy="email-label-container"]';
const emailInput = '[data-cy="email-input"]';
const submitButton = '[data-cy="submit-button"]';
const resetButton = '[data-cy="reset-button"]';
beforeEach(() => {
    cy.visit('http://localhost:8080');
    cy.addAxeCode(); // overwrite of injectAxe() by using axe.core, which fixes axe-cypress which has a require.resolve error
});

context('Form Acessibility (A11Y)', () => {
    it('passes "Accessiblity A11Y" tests', () => {
        cy.get(form)
            .should('be.visible')
            .find(fieldset)
            .should('be.visible')
            .within(() => {
                cy.get(legend).should('be.visible').and('have.text', 'The Form');
            });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "Name form inputs" that pass "Acessibility (A11Y)"', () => {
        cy.get(nameDiv)
            .should('be.visible')
            .within(() => {
                cy.get(nameInputLabel).should('be.visible').and('have.text', 'Name');
                cy.get(nameInput).should('be.visible');
            });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "Address form inputs" that pass "Acessibility (A11Y)"', () => {
        cy.get(addressDiv)
            .should('be.visible')
            .within(() => {
                cy.get(addressInputLabel).should('be.visible').and('have.text', 'Address');
                cy.get(addressInput).should('be.visible');
            });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "Address2 form inputs" that pass "Acessibility (A11Y)"', () => {
        cy.get(address2Div)
            .should('be.visible')
            .within(() => {
                cy.get(address2InputLabel).should('be.visible').and('have.text', 'Address 2');
                cy.get(address2Input).should('be.visible');
            });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "City form inputs" that pass "Acessibility (A11Y)"', () => {
        cy.get(cityDiv)
            .should('be.visible')
            .within(() => {
                cy.get(cityInputLabel).should('be.visible').and('have.text', 'City');
                cy.get(cityInput).should('be.visible');
            });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "State form inputs" that pass "Acessibility (A11Y)"', () => {
        cy.get(stateDiv)
            .should('be.visible')
            .within(() => {
                cy.get(stateInputLabel).should('be.visible').and('have.text', 'State');
                cy.get(stateInput).should('be.visible');
            });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "Zip form inputs" that pass "Acessibility (A11Y)"', () => {
        cy.get(zipDiv)
            .should('be.visible')
            .within(() => {
                cy.get(zipInputLabel).should('be.visible').and('have.text', 'Zip Code');
                cy.get(zipInput).should('be.visible');
            });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "Phone form inputs" that pass "Acessibility (A11Y)"', () => {
        cy.get(phoneDiv)
            .should('be.visible')
            .within(() => {
                cy.get(phoneInputLabel).should('be.visible').and('have.text', 'Phone Number');
                cy.get(phoneInput).should('be.visible');
            });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "Email form inputs" that pass "Acessibility (A11Y)"', () => {
        cy.get(emailDiv)
            .should('be.visible')
            .within(() => {
                cy.get(emailInputLabel).should('be.visible').and('have.text', 'Email');
                cy.get(emailInput).should('be.visible');
            });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });
    it('has the "Button form inputs" that pass "Acessibility (A11Y)"', () => {
        cy.get(buttonDiv)
            .should('be.visible')
            .within(() => {
                cy.get(submitButton).should('be.visible').and('have.text', 'Submit');
                cy.get(resetButton).should('be.visible').and('have.text', 'Clear');
            });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });
});
