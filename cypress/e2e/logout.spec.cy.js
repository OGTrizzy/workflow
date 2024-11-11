describe('Logout Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#loginEmail').type('ogtrizzy420@stud.noroff.no', { force: true });
    cy.get('#loginPassword').type('111222333', { force: true });
    cy.get('#loginForm').submit();
    
    cy.url().should('include', '/?view=profile');
  });

  it('should log the user out successfully', () => {
    cy.get('button[data-auth="logout"]').click();

    cy.url().should('not.include', '/?view=profile');
    cy.get('button[data-auth="login"]').should('be.visible');
  });
});
