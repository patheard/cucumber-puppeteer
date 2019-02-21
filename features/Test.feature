Feature: Cucumber Steps
  In order write BDD tests
  As a developer
  I want define and test Given, Then and When steps

  Scenario: Check for a visible element
    Given I open the url "http://localhost:8080/isVisible.html"
    Then  I expect that the title is "isVisible - Test"
    And   I expect the element ".visible" is visible

  Scenario: Check for a hidden element
    Then  I expect the element ".hidden" is not visible

  Scenario: Check for non-existent alement
    Then  I expect the element ".bueller" is not visible            
  