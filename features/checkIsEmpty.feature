Feature: checkIsEmpty
  In order write BDD tests
  As a developer
  I want to check if an element has an child elements

  Scenario: Check element empty
    When  I open the url "http://localhost:8080/checkIsEmpty.html"
    Then  I expect the element ".empty" is empty
    And   I expect the element ".not-empty" is not empty
    And   I expect the element "h1" is empty
    And   I expect the element "a[href='#google']" is empty

  Scenario: Check element empty given
    Given the element ".empty" is empty
    And   the element "ul li:first-child" is not empty



