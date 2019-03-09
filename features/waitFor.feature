Feature: waitFor
  In order write BDD tests
  As a developer
  I want wait for a given number of seconds
  
  Scenario: Element that is initially hidden is not visible
    When  I open the url "http://localhost:8080/waitFor.html"
    Then  I expect the element ".starts-hidden" is not visible

  Scenario: After waiting for 2 seconds, the element is visiable
    Given the element ".starts-hidden" is not visible    
    When  I wait for "2.5" seconds
    Then  I expect the element ".starts-hidden" is visible