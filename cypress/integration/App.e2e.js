beforeEach(() => {
    cy.visit('http://localhost:8080');
    cy.addAxeCode(); // overwrite of injectAxe() by using axe.min.js, which fixes axe-core which has a require.resolve error
});
describe('App E2E', () => {
    it('should assert that true is equal to true', () => {
        expect(true).to.equal(true);
        cy.checkA11y();
    });
});
