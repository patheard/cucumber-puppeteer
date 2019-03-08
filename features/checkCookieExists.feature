Feature: checkCookieExists
  In order write BDD tests
  As a developer
  I want to be able to test the existence of cookies

  Scenario: Check for existing cookies
    When  I open the url "http://localhost:8080/checkCookieExists.html"
    Then  I expect the cookie "existing-cookie" exist
    And   I expect the cookie "undefined-value-cookie" exist
    And   I expect the cookie "second-existing-cookie" exist
    And   I expect the cookie "not-existing-cookie" not exist

  Scenario: Check for existing cookie given 
    Given the cookie "existing-cookie" exist
    And   the cookie "undefined-value-cookie" exist
    And   the cookie "second-existing-cookie" exist
    And   the cookie "a random cookie" not exist

