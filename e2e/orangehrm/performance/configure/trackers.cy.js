describe('Trackers', () => {
  it('Go to Performance Trackers Page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Performance Trackers');
  })

  it('Go To Add Tracker Page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Performance Trackers');
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Add Performance Tracker');
  })

  it('Cancel Add Tracker ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Performance Trackers');
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Add Performance Tracker');
    cy.get('.oxd-button--ghost').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Performance Trackers');
  })

  it('Edit  Performance Trackers', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Performance Trackers');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Edit Performance Tracker');
    cy.get(':nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input').type('Tracker for kevin update');
    cy.get('.oxd-button--secondary').click();
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div').should('have.text', 'Tracker for kevin update');
  })

  it('Cancel Edit  Performance Trackers', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Performance Trackers');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Edit Performance Tracker');
    cy.get('.oxd-button--ghost').click();
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div').should('have.text', 'Tracker for kevin update');
  })

  it('Cancel Delete Tracker', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Performance Trackers');
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div').should('have.text', 'Tracker for kevin update');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?');
    cy.get('.oxd-button--text').click();
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div').should('have.text', 'Tracker for kevin update');
  })

  it(' Delete Tracker', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Performance Trackers');
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div').should('have.text', 'Tracker for kevin update');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?');
    cy.get('.oxd-button--label-danger').click();
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div').should('not.include.text', 'Tracker for kevin update');
  })
})