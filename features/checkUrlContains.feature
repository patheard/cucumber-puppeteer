Feature: checkUrlContains
  In order write BDD tests
  As a developer
  I want to check if an url contains the appropriate content

  Scenario: Check page url contains appropriated text
    When  I open the url "http://localhost:8080/checkTitle.html"
    Then  I expect "ht" to be contained in page url
    And   I expect "#" not to be contained in page url

    Scenario: Check page url contains given text
    Given  "che" to be contained in page url
    Then   I expect the page url is "http://localhost:8080/checkTitle.html"
