Feature: checkElementEnabled
  In order write BDD tests
  As a developer
  I want to check if an element is enabled or disabled

  Scenario: Check for enabled element
    When  I open the url "http://localhost:8080/checkElementEnabled.html"
    Then  the element ".enabled" is enabled    
    And   the element "[type='submit']" is not enabled 

  Scenario: Check for enabled given
    Given the element "[type='button']" is not enabled
    And   the element ".enabled" is enabled
    And   the element "fieldset" is enabled



