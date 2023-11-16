describe("Hospitals", () => {
  it("Should work", () => {
    cy.visit("/");
    cy.get("video").should("exist");
    cy.get("video").should("have.prop", "paused", false);
    cy.wait(5000);
    cy.get("button").contains("Pause").click();
    cy.get("video").should("have.prop", "paused", true);
    cy.get("button").contains("Hospital").click();
    cy.wait(6000);
    cy.get("img").should("have.length.above", 2);
  });
});
