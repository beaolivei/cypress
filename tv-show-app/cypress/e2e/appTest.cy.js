/* eslint-disable no-undef */
// [X] user visits our webpage 
// [X] user types show name on the input
// [X] user presses submit button
// [X] user sees image with show photo
// [X] user sees premiered date
// [X] user sees show rating 
// [X] user sees list with other show suggestions
// [X] user click on other show suggestion
// [X] user sees image with new show photo


describe('App works as expected', () => {
    it('user can search show information', () => {
        cy.intercept('GET', '**/search/shows?q=wednesday', {fixture: 'searchShowWednesday.json'}).as('wednesdayResponse')
        cy.intercept('GET', '**/search/shows?q=null', {fixture: 'searchShowWednesday.json'}).as('wednesdayResponse')
        cy.intercept('GET', '**/search/shows?q=Wednesday%20Club', {fixture: "searchShowWednesdayClub.json"}).as('wednesdayClubResponse')
        cy.visit('http://localhost:3000')
        cy.get('input[name="searchInput"]').type('Wednesday')
        cy.get('button[type="submit"]').click()
        cy.wait('@wednesdayResponse')
        cy.get('[data-test-id="showImage"]').should('be.visible')
        cy.get('div').contains('2022-11-23')
        cy.get('div').contains('8.6')
        cy.get('ul').should('be.visible')
        cy.get('button:contains("Wednesday Club")').click()
        cy.wait('@wednesdayClubResponse')
        cy.get('[data-test-id="showImage"]').should('be.visible')

    })
})