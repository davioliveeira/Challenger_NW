/// <reference types="cypress" />

import '../../support/commandsConta'

describe('Challenge New Working', () => {
  beforeEach('Init Test', () => {
    //Reseta a Pagina e Entra na Coleção Eco-Friendly a Cada Teste. 
    cy.resetPage()
    cy.goToEcoFriendly()
  });

  it('ENTER THE COLLECTION OF ECO PRODUCTS ', () => {
    //Valida que está na pág da Coleção Eco-Friendly.
    cy.get('.catTitle').contains('Eco-Friendly')
  });

  it('SEARCH FOR A PRODUCT IN THE ECO-FRIENDLY CATEGORY', () => {
    cy.wait(3)
    // cy.get('strong > a > .material-icons').click()
    cy.xpath('/html/body/header/nav/div/div[1]/div[4]/div/div/strong/a/i').click()
    cy.wait(3)
    //Escreve o nome do produto que deseja pesquisar
    cy.xpath('//*[@id="key"]').type('pencil').type('{enter}')
  });

  it('ADD ITEM TO CART', () => {
    //Escolhe o Produto
    cy.get('#js-item-cimage-9207049').click()
    cy.wait(5)
    cy.get('#js-item-addtocartbtn-9207049').click()
    cy.get('.right-container > .navbar-form > [href="basket.html?vid=20160512512"] > .material-icons').click()
    cy.wait(2)
    //Valida a entrada do Produto no Carrinho 
    cy.get(':nth-child(15) > .card-content > .col-xs-7 > :nth-child(1) > .aligner-item > .h4-responsive').contains('Google Recycled Gray Notebook')
  });

  it('ADD TWO OR MORE ITEMS', () => {
    //Primeiro Produto
    cy.get('#js-item-cimage-9207049').click()
    cy.wait(5)
    cy.get('#js-item-addtocartbtn-9207049').click()
    cy.get('.right-container > .navbar-form > [href="basket.html?vid=20160512512"] > .material-icons').click()
    cy.wait(2)
    cy.get('.col-md-9 > .grey > .waves-button-input').click()
    cy.goToEcoFriendly()
    //Segundo Produto
    cy.xpath('//*[@id="js-item-cimage-9206967"]').click()
    cy.wait(5)
    cy.get('#js-item-addtocartbtn-9206967').click()
    // Valida os Produtos Adicionados
    cy.get(':nth-child(15) > .card-content > .col-xs-7 > :nth-child(1) > .aligner-item > .h4-responsive').contains('Google Recycled Gray Notebook')
    cy.get(':nth-child(25) > .card-content > .col-xs-7 > :nth-child(1) > .aligner-item > .h4-responsive').contains('Google Cloud Lanyard')
  });
  
})
