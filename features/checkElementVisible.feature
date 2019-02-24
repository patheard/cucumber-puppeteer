Feature: checkElementVisible
  In order write BDD tests
  As a developer
  I want to check if an element is visible or hidden

  Scenario: Check for visible element
    When  I open the url "http://localhost:8080/checkElementVisible.html"
    Then  I expect that the title is "checkElementVisible - Test"
    And   I expect the element ".visible" is visible

  Scenario: Check for hidden elements
    Then  I expect the element ".hidden" is not visible
    And   I expect the element ".bueller" is not visible 



