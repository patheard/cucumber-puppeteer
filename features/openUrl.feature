Feature: openUrl
  In order write BDD tests
  As a developer
  I want to open web pages using their URL
  
  Scenario: Open a URL in a given step
    Given the url "http://localhost:8080/checkTitle.html" is opened
    Then  I expect the page url is "http://localhost:8080/checkTitle.html"

  Scenario: Open a URL in a when step
    When  I open the url "http://localhost:8080/waitFor.html"
    Then  I expect the page url is "http://localhost:8080/waitFor.html"