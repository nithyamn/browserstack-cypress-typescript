// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


import { Chance } from "chance";
import {makeLogger} from "ts-loader/dist/logger";

const chance = new Chance();

declare global {
  namespace Cypress {
    interface Chainable {
    
      google(): Chainable<Window>
      navigate(pageName: string): void
    }
  }
}
/**
 * Goes to google site
 */
Cypress.Commands.add("google", () => {cy.visit("https://google.com"), console.log(chance.sentence())})

/**
 * Navigates to page with pageName
 */
Cypress.Commands.add("navigate", pageName => {
  // Find navigation menu item
  // Click on it
  cy.visit(`/${pageName}`)
})

// Convert this to a module instead of script (allows import/export)
export {}
