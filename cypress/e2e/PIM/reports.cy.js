require('cypress-plugin-tab')
describe('reports', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('.oxd-text--h5').should('have.text', 'Login')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type('admin123')
    cy.get('.oxd-button').click()

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
      .should('have.text', 'Dashboard')
    
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'PIM')
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Employee Reports')
  })

//   pastikan jumlah report minimal 4 karena ini hanya berdasarkan urutan (gabisa di select) //

  it('add reports', function() {
    cy.get('.oxd-button > .oxd-icon').click();
    cy.get('.orangehrm-main-title').should('have.text', 'Add Report');
    cy.reload()
    cy.get(':nth-child(2) > .oxd-input').click();
    cy.get(':nth-child(2) > .oxd-input').type('Salary').tab()
        .type('{downArrow}{downArrow}{enter}').tab()
        .type('{downArrow}{enter}').tab()
        .type('{downArrow}{downArrow}{enter}').tab().tab()
        .type('{downArrow}{downArrow}{downArrow}{enter}')
        .type('{downArrow}{downArrow}{enter}').tab()
        .type('{downArrow}{downArrow}{enter}').tab()
        .type('{downArrow}{downArrow}{enter}').tab()
        .type('{enter}')
    cy.get('.orangehrm-card-container > .oxd-text',{ timeout: 30000 }).should('have.text', 'Salary');
  });
  it('edit report', function() {
      
      cy.get('.oxd-autocomplete-text-input > input').type('Salary')
      cy.scrollTo('bottom')
      cy.get(':nth-child(5) > .oxd-table-row > [style="flex: 1 1 15%;"] > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
      cy.get('.orangehrm-main-title').should('have.text', 'Edit Report')
      cy.get(':nth-child(2) > .oxd-input').type('123');
      cy.get('.oxd-button--secondary').click();
    cy.get('.orangehrm-card-container > .oxd-text').should('have.text', 'Salary123');
    });

  it('delete report', function() {
    cy.scrollTo('bottom')
    cy.get(':nth-child(5) > .oxd-table-row > [style="flex: 1 1 15%;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
    cy.get('.oxd-button--label-danger').click();
  });

  it('show report', function() {
    cy.scrollTo('bottom')
    cy.get(':nth-child(5) > .oxd-table-row > [style="flex: 1 1 15%;"] > .oxd-table-cell-actions > :nth-child(3) > .oxd-icon').click();
    cy.get('.orangehrm-card-container > .oxd-text',{ timeout: 30000 }).should('have.text', 'Salary');
  });
})

