Feature: checkUrl
  In order write BDD tests
  As a developer
  I want check the page's URL
  
  Scenario: Check URL
    When  I open the url "http://localhost:8080/checkTitle.html"
    Then  I expect the page url is "http://localhost:8080/checkTitle.html"    
    And   I expect the page url is not "http://localhost:8080/checkContainsText.html"

  Scenario: Check URL given
    Given the page url is "http://localhost:8080/checkTitle.html"





