describe("test initial app page", () => {
beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('input[name="searchInput"]').as('searchInput')
})
  it("should land in the page and check it is there", () => {
    cy.contains(
      "In this app you can get information from your favorite show. Use to search to get show information"
    );
  });
  it("should successfully look up a show", () => {
    cy.intercept("GET", "**/search/shows?q=girls", { fixture: "searchShowsGirls.json" }).as(
      "showResponse"
    );
    cy.intercept("GET", "**/search/shows?q=Shining%20Girls", { fixture: "searchShowsShiningGirls.json" }).as(
        "secondShowResponse"
      );
    cy.visit("http://localhost:3000");
    cy.get('@searchInput').type("girls");
    cy.get('button[type="submit"]').click();
    cy.wait("@showResponse");
    cy.get("img").should("be.visible");
    cy.contains('6.7')
    cy.get('button:contains("Shining Girls")').click()
    cy.wait('@secondShowResponse')

  });
});
