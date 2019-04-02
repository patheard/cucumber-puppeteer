Feature: checkTitleContains
  In order write BDD tests
  As a developer
  I want to check if a title contains an expected substring

  Scenario: Check page title contains expected substring
    When  I open the url "http://localhost:8080/checkTitleContains.html"
    Then  I expect the page title contains "checkTitle"
    And   I expect the page title does not contain "notMatchingTitle - Test"

    Scenario: Check page title contains given substring
    Given the page title contains "Title"
    Then  I expect that the title is "checkTitleContains - Test"
