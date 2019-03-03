Feature: checkElementValue
  In order write BDD tests
  As a developer
  I want to check if an input, textarea or select has a specific value

  Scenario: Check element value
    When  I open the url "http://localhost:8080/checkElementValue.html"
    Then  I expect the element "#input-value" value is "input with a value"
    And   I expect the element "#input-no-value" value is ""
    And   I expect the element "#textarea-value" value is "textarea with a value"
    And   I expect the element "#textarea-no-value" value is ""
    And   I expect the element "#select-value" value is "two"
    And   I expect the element "#select-no-value" value is "three"
    And   I expect the element "input[type='submit']" value is "Submit"

  Scenario: Check element value given
    Given the element "#input-value" value is not "never"
    And   the element "#input-no-value" value is not "gonna"
    And   the element "#textarea-value" value is not "give"
    And   the element "#textarea-no-value" value is not "you"
    And   the element "#select-value" value is not "up"
    And   the element "#select-no-value" value is not "never"
    And   the element "input[type='submit']" value is not "gonna let you go"    
