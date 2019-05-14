Feature: checkAttribute
  In order write BDD tests
  As a developer
  I want to check if a page has accessibility errors

  Scenario: Check a page without accessibility errors
    When  I open the url "http://localhost:8080/checkAccessibilityPass.html"
    Then  I expect the page has no accessibility errors

  Scenario: Check a page with accessibility errors given
    Given  the page has no accessibility errors           
