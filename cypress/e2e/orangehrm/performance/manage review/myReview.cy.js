describe('myReview', () => {
  it('Go To My Review Page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.--visited').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Reviews');
  })

  it('Go To My Evaluate Page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.--visited').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Reviews');
    cy.get('.oxd-table-cell-actions > .oxd-icon-button > .oxd-icon').click();
    cy.get('.orangehrm-background-container > :nth-child(1) > .oxd-text').should('have.text', 'Performance Review');
  })

  it('Edit Rating', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.--visited').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Reviews');
    cy.get('.oxd-table-cell-actions > .oxd-icon-button > .oxd-icon').click();
    cy.get('.orangehrm-background-container > :nth-child(1) > .oxd-text').should('have.text', 'Performance Review');
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('10');
    cy.get('.orangehrm-performance-review-actions > :nth-child(2)').click();
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', '10.00');
  })

  it('Edit Comments', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.--visited').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Reviews');
    cy.get('.oxd-table-cell-actions > .oxd-icon-button > .oxd-icon').click();
    cy.get('.orangehrm-background-container > :nth-child(1) > .oxd-text').should('have.text', 'Performance Review');
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').clear();
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Pangestu melakukan update data');
    cy.get('.orangehrm-performance-review-actions > :nth-child(2)').click();
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').should('have.value', 'Pangestu melakukan update data');
  })

  it('Cancel Edit', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.--visited').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Reviews');
    cy.get('.oxd-table-cell-actions > .oxd-icon-button > .oxd-icon').click();
    cy.get('.orangehrm-background-container > :nth-child(1) > .oxd-text').should('have.text', 'Performance Review');
    cy.get('.orangehrm-performance-review-actions > :nth-child(1)').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Reviews');
  })
})