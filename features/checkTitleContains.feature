Feature: checkTitleContains
  In order write BDD tests
  As a developer
  I want to check if a title contains the appropriate content

  Scenario: Check page title contains appropriate title
    When  I open the url "http://localhost:8080/checkTitleContains.html"
    Then   I expect "checkTitle" to be contained in page title
    And    I expect "notMatchingTitle - Test" not to be contained in page title

    Scenario: Check page title contains given title
    Given  "Title" to be contained in page title
    Then   I expect that the title is "checkTitleContains - Test"
