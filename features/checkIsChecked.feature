Feature: checkIsChecked
  In order write BDD tests
  As a developer
  I want to check if an element is checked or unchecked

  Scenario: Check element is checked
    When  I open the url "http://localhost:8080/checkIsChecked.html"
    Then  I expect the element "#checked" is checked
    And   I expect the element "#not-checked" is not checked

  Scenario: Check element is checked given
    Given the element "#checked" is checked
    Then  the element "#not-checked" is not checked

