Feature: setUserAgent
  In order write BDD tests
  As a developer
  I want to set the user agent of the browser

  Scenario: Set the user agent string
    When  I open the url "http://localhost:8080/setUserAgent.html"
    And   I set the user agent to "IE6"
    And   I expect the element ".user-agent" is visible after "30" seconds
    Then  I expect the element ".user-agent" contains text "IE6" 