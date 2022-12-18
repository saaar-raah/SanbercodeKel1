describe('KIPs', () => {
  it('Go to Key Performance Indicators Page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Key Performance Indicators for Job Title');
  })

  it('Cancel Add Key Performance Indicator', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('.oxd-button').should('have.class', 'orangehrm-login-button');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click();
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Key Performance Indicators for Job Title');
    cy.get('.oxd-button > .oxd-icon').click();
    cy.get('.orangehrm-main-title').should('have.text', 'Add Key Performance Indicator');
    cy.get('.oxd-button--ghost').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Key Performance Indicators for Job Title');
  });

  it('Edit Key Performance Indicator', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('.oxd-button').should('have.class', 'orangehrm-login-button');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Employee Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click();
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Key Performance Indicators for Job Title');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({force : true});
    cy.get('.orangehrm-main-title').should('have.text', 'Edit Key Performance Indicator');
    cy.get('.oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get('.oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Assess information to develop strategies update');
    cy.get('.oxd-button--secondary').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Key Performance Indicators for Job Title');
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(2) > div').should('have.text', 'Assess information to develop strategies update');
  });

  it('fungtioCancel Add Key Performance Indicatorn', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('.oxd-button').should('have.class', 'orangehrm-login-button');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('have.text', 'Manage Reviews ');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click();
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Key Performance Indicators for Job Title');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({force : true});
    cy.get('.orangehrm-main-title').should('have.text', 'Edit Key Performance Indicator');
    cy.get('.oxd-button--ghost').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Key Performance Indicators for Job Title');
  });

  it('Cancel Delete Data Key Performance Indicator', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('.oxd-button').should('have.class', 'orangehrm-login-button');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click();
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Key Performance Indicators for Job Title');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true});
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?');
    cy.get('.oxd-button--text').click();
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(2) > div').should('have.text', 'Assess information to develop strategies update');
  });

  it('Delete Data Key Performance Indicator', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('.oxd-button').should('have.class', 'orangehrm-login-button');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    cy.get(':nth-child(7) > .oxd-main-menu-item').click();
    cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'Manage Reviews');
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click();
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click();
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', 'Key Performance Indicators for Job Title');
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true});
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?');
    cy.get('.oxd-button--label-danger').click();
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(2) > div').should('not.include.text', 'Assess information to develop strategies update');
  });
})