context('Color Contrast Accessibility (A11Y)', () => {
    const colorContrastAuroraTextPickerChildContainer = '[data-cy="color-contrast-aurora-text-picker-child-container"]';
    const colorContrastDynamicBackgroundPickerChildContainer = '[data-cy="color-contrast-dynamic-background-picker-child-container"]';
    const colorPickerDynamicPopover = '[data-cy="color-picker-dynamic-popover"]';
    const colorContrastDynamicBackgroundPickerBackgroundOpenButton = '[data-cy="color-contrast-dynamic-background-picker-background-open-button"]'
    const colorContrastDynamicBackgroundPickerBackgroundCloseButton = '[data-cy="color-contrast-dynamic-background-picker-background-close-button"]'
    const auroraTextPickerFontOpenButton = '[data-cy="color-contrast-aurora-text-picker-font-open-button"]'
    const auroraTextPickerFontCloseButton = '[data-cy="color-contrast-aurora-text-picker-font-close-button"]';

    beforeEach(() => {
        cy.visit('http://localhost:8080');
        cy.addAxeCode(); // overwrite of injectAxe() by using axe-core, which fixes cypress-axe which has a require.resolve error
    });

    it('has the "conditional rendering of buttons" for the background color picker', () => {
        cy.get(colorContrastDynamicBackgroundPickerBackgroundOpenButton).should('be.visible').and('have.text', 'Change Background Color').click();
        cy.get(colorContrastDynamicBackgroundPickerBackgroundCloseButton).should('be.visible').and('have.text', 'Close Background Color').click();
        cy.get(colorContrastDynamicBackgroundPickerBackgroundOpenButton).should('be.visible').and('have.text', 'Change Background Color');
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });
    it('shows the "Background Color Picker" on button click', () => {
        cy.get(colorContrastDynamicBackgroundPickerBackgroundOpenButton).should('be.visible').and('have.text', 'Change Background Color').click();
        cy.get(colorPickerDynamicPopover).should('be.visible');
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "conditional rendering of buttons" for the font color picker', () => {
        cy.get(auroraTextPickerFontOpenButton).should('be.visible').and('have.text', 'Change Font Color').click();
        cy.get(auroraTextPickerFontCloseButton).should('be.visible').and('have.text', 'Close Font Color').click();
        cy.get(auroraTextPickerFontOpenButton).should('be.visible').and('have.text', 'Change Font Color');
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('shows the "Font Color Picker" on button click', () => {
        cy.get(auroraTextPickerFontOpenButton).should('be.visible').and('have.text', 'Change Font Color').click();
        cy.get(colorContrastAuroraTextPickerChildContainer).should('be.visible'); // close button appears after color picker shows in the UI
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('shows a "Background-color" on page load', () => {
        const expectBackgroundColor = 'rgb(230, 230, 230)';
        /** Method 1 of testing background color - using: .should() + .and() */ 
        cy.get(colorContrastDynamicBackgroundPickerChildContainer).should('be.visible').and('have.css', 'backgroundColor', 'rgb(230, 230, 230)');
        
        /** Method 2 of testing background color - using: getComputedStyle with aliasing and using and internal expect to test to compare 'string' value of backgroundColor - more robust implementation */ 
        cy.get(colorContrastDynamicBackgroundPickerChildContainer).should($colorContrastDynamicBackgroundPickerChildContainer => {
            const style = window.getComputedStyle($colorContrastDynamicBackgroundPickerChildContainer[0]);
            expect(style.backgroundColor).to.equal(expectBackgroundColor);
        });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    /** The next tests below can be duplicated with different color values added (from the color-picker-dropdowns)...
        * to compare and test different colors (background color <> font color) 
    */
    /** Just copy and paste the test, change the `it` to something different than where you copied it from...
        * append it to the end then of the tests, change the hex values within the .type() method and re-run the tests 
     */
    /** The axe-core accessiblity erros will show up with the changed values and check for contrast ratio on the new values */
    it('has a different "Background-color" when typing into input', () => {
        cy.get(colorContrastDynamicBackgroundPickerBackgroundOpenButton).should('be.visible').and('have.text', 'Change Background Color').click();
        cy.get(colorPickerDynamicPopover).should('be.visible');
        cy.get('#rc-editable-input-1').clear();
        cy.get('#rc-editable-input-1').type('#000').trigger('change');
        cy.get(colorContrastDynamicBackgroundPickerChildContainer).should('be.visible').and('have.css', 'background-color', 'rgb(0, 0, 0)');
        
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('shows a "Font color" on page load', () => {
        const expectFontColor = 'rgb(255, 90, 31)';
        /** Method 1 of testing font color - using: .should() + .and() */ 
        cy.get(colorContrastAuroraTextPickerChildContainer).should('be.visible').and('have.css', 'color', 'rgb(255, 90, 31)');
        
        /** Method 2 of testing font color - using: getComputedStyle with aliasing and using and internal expect to test to compare 'string' value of backgroundColor - more robust implementation */ 
        cy.get(colorContrastAuroraTextPickerChildContainer).should($colorContrastAuroraTextPickerChildContainer => {
            const style = window.getComputedStyle($colorContrastAuroraTextPickerChildContainer[0]);
            expect(style.color).to.equal(expectFontColor);
        });
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

     it('has a different "font-color" when typing into input', () => {
        cy.get(auroraTextPickerFontOpenButton).should('be.visible').and('have.text', 'Change Font Color').click();
        cy.get(colorContrastAuroraTextPickerChildContainer).should('be.visible'); // close button appears after color picker shows in the UI
        cy.get('#rc-editable-input-1').clear();
        cy.get('#rc-editable-input-1').type('#999').trigger('change');
        cy.get(colorContrastAuroraTextPickerChildContainer).should('be.visible').and('have.css', 'color', 'rgb(153, 153, 153)');
        
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });
});
