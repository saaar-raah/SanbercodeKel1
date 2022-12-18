describe('employeeTrackers', () => {
  it('Vew Empoyee Trackers', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Employee Performance Trackers');
  })

  it('Vew Empoyee Tracker Detail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Employee Performance Trackers');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(5) > .oxd-table-cell-actions > .oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
  })

  it('Add Log', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Employee Performance Trackers');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(5) > .oxd-table-cell-actions > .oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.oxd-button').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Add Tracker Log');
    cy.get(':nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input').type('First Log');
    cy.get('.oxd-textarea').clear();
    cy.get('.oxd-textarea').type('First Command');
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.get('.orangehrm-employee-tracker-log-title > .oxd-text').should('have.text', 'First Log');
    cy.get('.orangehrm-employee-tracker-log-body > .oxd-text').should('have.text', 'First Command');
  })

  it('Cancel Add Log', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Employee Performance Trackers');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(5) > .oxd-table-cell-actions > .oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.oxd-button > .oxd-icon').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Add Tracker Log');
    cy.get('.oxd-button--ghost').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
  })

  it('Edit Log', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Employee Performance Trackers');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(5) > .oxd-table-cell-actions > .oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.oxd-table-dropdown > .oxd-icon-button > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(1) > .oxd-text').click();
    cy.get(':nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input').type('First Log update');
    cy.get('.oxd-textarea').clear();
    cy.get('.oxd-textarea').type('First Command update');
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.get('.orangehrm-employee-tracker-log-title > .oxd-text').should('have.text', 'First Log update');
    cy.get('.orangehrm-employee-tracker-log-body > .oxd-text').should('have.text', 'First Command update');
  })

  it('cancel Edit Log', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Employee Performance Trackers');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(5) > .oxd-table-cell-actions > .oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.oxd-table-dropdown > .oxd-icon-button > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(1) > .oxd-text').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Edit Tracker Log');
    cy.get('.oxd-button--ghost').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
  })

  it('Cancel Delete Log', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Employee Performance Trackers');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(5) > .oxd-table-cell-actions > .oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.oxd-table-dropdown > .oxd-icon-button > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2) > .oxd-text').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?');
    cy.get('.oxd-button--text').click();
    cy.get('.orangehrm-employee-tracker-log-title > .oxd-text').should('have.text', 'First Log update');
  })

  it('Delete Log', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Employee Performance Trackers');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(5) > .oxd-table-cell-actions > .oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.oxd-table-dropdown > .oxd-icon-button > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2) > .oxd-text').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?');
    cy.get('.oxd-button--label-danger').click();
    cy.get('.orangehrm-employee-tracker-no-records > .oxd-text').should('have.text', 'No Records Found');
  })
})