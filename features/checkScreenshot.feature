Feature: checkScreenshot
  In order write BDD tests
  As a developer
  I want to check if a page's screenshot matches a reference screenshot

  Scenario: Check screenshot matches
    Given I open the url "http://localhost:8080/checkScreenshot.html"
    And   the screenshot of "ccc-landing" matches the web page

  Scenario: Check screenshot matches then
    Then  I expect the screenshot of "ccc-landing" matches the web page



