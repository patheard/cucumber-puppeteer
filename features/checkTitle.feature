Feature: checkTitle
  In order write BDD tests
  As a developer
  I want check the page's title
  
  Scenario: Check title
    When  I open the url "http://localhost:8080/checkTitle.html"
    Then  I expect that the title is "checkTitle - Test"    
