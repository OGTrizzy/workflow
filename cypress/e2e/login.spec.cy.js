describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should allow the user to log in with valid credentials', () => {
    cy.get('#loginEmail').type('ogtrizzy420@stud.noroff.no', { force: true })
    cy.get('#loginPassword').type('111222333', { force: true })

    cy.get('#loginForm').submit()

    cy.url().should('include', '/?view=profile&name=Trizzy420')
  })

  it('should not allow the user to log in with invalid credentials', () => {
    cy.get('#loginEmail').type('invaliduser@stud.noroff.no', { force: true })
    cy.get('#loginPassword').type('wrongpassword', { force: true })

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(
        'Either your username was not found or your password is incorrect',
      )
    })

    cy.get('#loginForm').submit()

    cy.url().should('not.include', '/?view=profile')
  })
})
