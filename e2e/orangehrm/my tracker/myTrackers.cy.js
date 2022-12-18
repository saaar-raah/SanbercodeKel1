describe('myTracker', () => {
  it('Go To My Tracker Page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Performance Trackers');
  })

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
   cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
   cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
   cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Performance Trackers');
   cy.get('.oxd-button').click();
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
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Performance Trackers');
    cy.get('.oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.oxd-button').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Add Tracker Log');
    cy.get(':nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input').type('Fisrt log');
    cy.get('.oxd-textarea').clear();
    cy.get('.oxd-textarea').type('First Command');
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.orangehrm-employee-tracker-log-title > .oxd-text').should('have.text', 'Fisrt log');
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
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Performance Trackers');
    cy.get('.oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.oxd-button').click();
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
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Performance Trackers');
    cy.get('.oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.oxd-table-dropdown > .oxd-icon-button > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(1) > .oxd-text').click();
    cy.get(':nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input').type('First Log Update');
    cy.get('.oxd-textarea').clear('');
    cy.get('.oxd-textarea').type('First Command Update');
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.get('.orangehrm-employee-tracker-log-title > .oxd-text').should('have.text', 'First Log Update');
    cy.get('.orangehrm-employee-tracker-log-body > .oxd-text').should('have.text', 'First Command Update');
  })

  it('Cancel Edit Log', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Performance Trackers');
    cy.get('.oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.orangehrm-employee-tracker-log-title > .oxd-text').should('have.text', 'First Log Update');
    cy.get('.oxd-table-dropdown > .oxd-icon-button > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(1) > .oxd-text').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Edit Tracker Log');
    cy.get('.oxd-button--ghost').click();
    cy.get('.orangehrm-employee-tracker-log-title > .oxd-text').should('have.text', 'First Log Update');
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
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Performance Trackers');
    cy.get('.oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.orangehrm-employee-tracker-log-title > .oxd-text').should('have.text', 'First Log Update');
    cy.get('.oxd-table-dropdown > .oxd-icon-button > .oxd-icon').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2) > .oxd-text').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?');
    cy.get('.oxd-button--text').click();
    cy.get('.orangehrm-employee-tracker-log-title > .oxd-text').should('have.text', 'First Log Update');
  })

  it(' Delete Log', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'My Performance Trackers');
    cy.get('.oxd-button').click();
    cy.get('.orangehrm-header-container > .oxd-text').should('have.text', 'Tracker Logs');
    cy.get('.orangehrm-employee-tracker-log-title > .oxd-text').should('have.text', 'First Log Update');
    cy.get('.oxd-table-dropdown > .oxd-icon-button').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2) > .oxd-text').click();
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?');
    cy.get('.oxd-button--label-danger').click();
    cy.get('.orangehrm-employee-tracker-no-records > .oxd-text').should('have.text', 'No Records Found');
  })
})