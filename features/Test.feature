Feature: Cucumber Steps
  In order write BDD tests
  As a developer
  I want define and test Given, Then and When steps

  Scenario: Check for a visible element
    When  I open the url "http://localhost:8080/isVisible.html"
    Then  I expect that the title is "isVisible - Test"
    And   I expect the element ".visible" is visible

  Scenario: Check for a hidden elements
    Then  I expect the element ".hidden" is not visible
    And   I expect the element ".bueller" is not visible 

  Scenario: Check element contains text
    When  I open the url "http://localhost:8080/checkContainsText.html"
    Then  I expect the element ".wizard" contains text "Harry"    
    And   I expect the element ".wizard" contains text "You're a wizard Harry"
    And   I expect the element ".plumbus" contains text "Everyone has a Plumbus in their home. First they take the dinglebop, and they smooth it out, with a bunch of Schleem."       
    And   I expect the element ".wizard" does not contain text "foobar"
  
  Scenario: Check URL matching
    Given the page url is "http://localhost:8080/checkContainsText.html"
    When  I open the url "http://localhost:8080/checkTitle.html"
    Then  I expect the page url is "http://localhost:8080/checkTitle.html"    
    And   I expect the page url is not "http://localhost:8080/checkContainsText.html"  