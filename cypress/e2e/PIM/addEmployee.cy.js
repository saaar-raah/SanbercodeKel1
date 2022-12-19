describe('add employee', () => {
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
})