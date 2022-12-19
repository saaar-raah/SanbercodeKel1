describe('employee list', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get('.oxd-text--h5').should('have.text', 'Login');
  
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('admin123');
      cy.get('.oxd-button').click();
  
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
        .should('have.text', 'Dashboard');
      
      cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'PIM');
    })
  
    it('employee list tab', function() {
      cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click();
      cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('have.text', 'Employee List');
    });
  
  
    it('search employee positive', function() {
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').click();
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Anthony Nolan');
      cy.get(':nth-child(2) > .oxd-input').click();
      cy.get(':nth-child(2) > .oxd-input').type('0070');
      cy.get(':nth-child(2) > .oxd-input').type('{enter}')
      cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('have.text', '0070');
  
    });
  
    it('search employee negative', function() {
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').click();
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Tes');
      cy.get(':nth-child(2) > .oxd-input').click();
      cy.get(':nth-child(2) > .oxd-input').type('11111');
      cy.get(':nth-child(2) > .oxd-input').type('{enter}')
      cy.get('.orangehrm-horizontal-padding > .oxd-text').should('have.text', 'No Records Found');
    });
  
    it('add employee', function() {
      cy.get('.oxd-button > .oxd-icon').click();
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').click();
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Lima');
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').click();
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Sekawan');
      cy.get('.oxd-button--secondary').click();
      cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text', 'Lima Sekawan');
    });
  
    it('edit employee', function() {
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').click();
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Lima Sekawan');
      cy.get('button[type=submit]').click({force: true})
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
      cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('have.text', 'Personal Details');
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').click();
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('123');
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
      cy.reload()
      cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text', 'Lima Sekawan123');
  
    });
  
    it('delete employee', function() {
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').click();
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Lima Sekawan123');
      cy.get('button[type=submit]').click({force: true})
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
      cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click();
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').click();
      cy.scrollTo('bottom')
      cy.get('button[type=submit]').click({force: true})
      cy.get('.orangehrm-horizontal-padding > .oxd-text').should('have.text', 'No Records Found');
    });
  
  })
  
  