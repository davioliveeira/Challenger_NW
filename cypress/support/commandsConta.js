Cypress.Commands.add ("goToEcoFriendly", () =>   { 
    cy.visit('https://shop.googlemerchandisestore.com')
    cy.wait(5)
    cy.get('.navbar-row-1 > .container-navbar-menu-button > .navbar-brand > .material-icons').click()
    cy.get(':nth-child(5) > .collapsible-header > .material-icons').click()
    cy.xpath('//*[@id="slide-out"]/ul[1]/li[5]/div/ul/li[4]/a').click()
})

Cypress.Commands.add ("resetPage", () =>   { 
    cy.visit('https://shop.googlemerchandisestore.com')
})