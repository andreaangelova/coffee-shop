describe('test home page', () => {
  const baseUrl = 'http://localhost:3000/';

  beforeEach(() => {
    cy.visit(baseUrl);
  })

  it('displays all coffee types', () => {
    const listCoffees = cy.get('[data-cy="list-coffees"]');
    listCoffees.children().should('have.length', 6);
  })

  it('display new coffee', () => {
    const newCoffee = cy.get('[data-cy="list-coffees"] :nth-child(1) .coffee-name');
    newCoffee.should('have.text', 'Create your own');
  })

  it('select coffee', () => {
    const selectCoffee =  cy.get('[data-cy="list-coffees"] :nth-child(1) .btn-primary');
    selectCoffee.click();
    cy.location('href').should('eq', baseUrl + 'product/0');
  })
})
