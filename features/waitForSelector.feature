Feature: waitForSelector
  In order write BDD tests
  As a developer
  I want wait for a selector to exist on the page

  Scenario: Waiting the default 30s timeout for the selector
    Given the url "http://localhost:8080/waitForSelector.html" is opened
    When  I wait for element ".delayed"
    Then  I expect the element ".delayed" is on the page

  Scenario: Waiting a custom 10s timeout for the selector
    When  I open the url "http://localhost:8080/waitForSelector.html"
    And   I wait for element ".delayed" for 10 seconds
    Then  I expect the element ".delayed" is on the page
       