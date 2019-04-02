Feature: checkUrlContains
  In order write BDD tests
  As a developer
  I want to check if an url contains a substring

  Scenario: Check page url contains a substring
    When I open the url "http://localhost:8080/checkTitle.html"
    Then I expect the page url contains "checkTitle"
    And  I expect the page url does not contain "#"

    Scenario: Check page url contains given text
    Given the page url contains "che"
    Then  I expect the page url is "http://localhost:8080/checkTitle.html"
