Feature: checkElementHasFocus
  In order write BDD tests
  As a developer
  I want to check if an element has focus

  Scenario: Check element has focus
    When  I open the url "http://localhost:8080/checkHasFocus.html"
    Then  I expect that the title is "checkHasFocus - Test"
    Then  I expect the element "#focus" has focus
    And   I expect the element "#no-focus" has no focus

  Scenario: Check element has focus given
    Given the element "#focus" has focus
    And   the element "#tobe-focused" has no focus
    When  I click the element "#tobe-focused"
    Then  I expect the element "#tobe-focused" has focus
    And   I expect the element "#no-focus" has no focus


