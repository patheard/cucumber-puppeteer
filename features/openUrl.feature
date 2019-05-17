Feature: openUrl
  In order write BDD tests
  As a developer
  I want to open web pages using their URL
  
  Scenario: Open a URL in a given step
    Given the url "http://localhost:8080/checkTitle.html" is opened
    Then  I expect the page url is "http://localhost:8080/checkTitle.html"

  Scenario: Open a URL in a when step using a root URL environment variable
    When  I open the url "/waitFor.html"
    Then  I expect the page url is "http://localhost:8080/waitFor.html"

  Scenario: Set the user agent string
    When  I open the url "http://localhost:8080/setUserAgent.html" with user agent "IE6"
    And   I wait for element ".user-agent"
    Then  I expect the element ".user-agent" contains text "IE6"     