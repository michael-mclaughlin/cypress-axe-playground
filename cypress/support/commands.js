// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This overwrites the axe-core package to use the axe.min because the is a known issue with using the package out of the box with internal axe-core being broken so need to target axe.min --
Cypress.Commands.add('addAxeCode', () => {
    cy.window({ log: false }).then((window) => {
        const axe = require('axe-core/axe.js');
        const script = window.document.createElement('script');
        script.innerHTML = axe.source;
        window.document.head.appendChild(script);
    });
});
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
