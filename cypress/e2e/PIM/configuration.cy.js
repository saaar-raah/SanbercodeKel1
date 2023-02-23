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
    it('optional fields', function () {
        cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click();
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
        cy.get('.orangehrm-main-title').should('have.text', 'Optional Fields');
        cy.get(':nth-child(1) > .oxd-grid-3 > .orangehrm-optional-field-row > .oxd-switch-wrapper > label > .oxd-switch-input').click();
        cy.get(':nth-child(2) > .oxd-switch-wrapper > label > .oxd-switch-input').click();
        cy.get('.oxd-button').click();

    });

    /*diisi minimal 1 data*/
    it('new custom fields', function() {
        cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click();
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click();
        cy.get('.oxd-button').click();
        cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Add Custom Field');
        cy.get(':nth-child(2) > .oxd-input').type('Hair')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click().type('{downArrow}{downArrow}{enter}')
        cy.get(':nth-child(2) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().type('{downArrow}{downArrow}{enter}')
        cy.get(':nth-child(2) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('hitam, coklat, keriting');
        cy.get('.oxd-button--secondary').click();
        cy.get('.orangehrm-custom-field-title > .oxd-text--h6').should('have.text', 'Custom Fields');
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(2) > div').should('have.text', 'Hair');

    });

    it('edit custom fields', function () {
        cy.get('.oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click();
        cy.get(':nth-child(2) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2)').click();
        cy.get(':nth-child(2) > .oxd-input').type('2');
        cy.get('.oxd-button--secondary').click();
        cy.get('.orangehrm-custom-field-title > .oxd-text--h6').should('have.text', 'Custom Fields');
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(2) > div').should('have.text', 'Hair2');
    });

    it('delete custom fields', function() {
        cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click();
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click();
        cy.get(':nth-child(2) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
        cy.get('.oxd-button--label-danger').click();
    });

})
