/// <reference types="cypress" />

describe('Main Menu Leave', () => {
  beforeEach(() => {
    // LOGIN
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test

    // We'll store our item text in a variable so we can reuse it
    const username = 'Admin'
    const password = 'admin123'

    // SAVE SESSION / LOGIN TERSIMPAN
    cy.session([username, password], () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      // Let's get the input element and use the `type` command to
      // input our new list item. After typing the content of our item,
      // we need to type the enter key as well in order to submit the input.
      // This input has a data-test attribute so we'll use that to select the
      // element in accordance with best practices:
      // https://on.cypress.io/selecting-elements
      cy.get('[name=username]').type(`${username}`)
      cy.get('[name=password]').type(`${password}{enter}`)
    })

    //ke menu leave
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
  })


  it('Menampilkan daftar riwayat leave', () => {
    cy.get('a[href*="viewLeaveModule"]').click()

    cy.url().should('include', 'viewLeaveList')
  })

  it('Mencari riwayat leave', () => {
    cy.contains("Search").click({force:true})
    
    cy.get('.oxd-table')
  })

  it('Tombol Aksi -> add comment', () => {
    //inspect elemen, klik kanan elemen, copy selector
    //inspect elemen, klik kanan elemen, copy selector
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(9) > div > li > button')
      .click({force: true})
    cy.contains('Add Comment').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered')
      .should('contain','Leave Request Comments')
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > button')
      .click()
  })

  it('Tombol Aksi -> View leave details', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(9) > div > li > button')
      .click({force: true})
    cy.contains('View Leave Details').click()
    cy.url()
      .should('satisfy', (url) => url.startsWith('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveRequest/'))
      //.and('satisfy', (url) => url.endsWith(/(\d+)/))
  })

  it('Tombol Aksi -> View PIM Info', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(9) > div > li > button')
      .click({force: true})
    cy.contains('View PIM Info').click()
    cy.url()
      .should('satisfy', (url) => url.startsWith('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/'))
      //.and('satisfy', (url) => url.endsWith(/(\d+)/))
  })

  it('Tombol Aksi -> Cancel Leave', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(9) > div > li > button')
      .click({force: true})
    cy.contains('Cancel Leave').click()
    cy.get('#oxd-toaster_1').should('contain','Success')
  })

  it('Tombol Reset Search', () => {
    cy.contains("Reset").click({force: true})
  })

  it('Tombol Approve leave', () => {
    cy.contains("Approve").click({force: true})

    cy.get('#oxd-toaster_1').should('contain','Success')
  })

  it('Tombol Reject leave', () => {
    cy.contains("Reject").click({force: true})

    cy.get('#oxd-toaster_1').should('contain','Success')
  })

})
