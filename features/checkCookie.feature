Feature: checkCookie
  In order write BDD tests
  As a developer
  I want to be able to test the existence and/or the content of cookies

  Scenario: Check for existing cookies
    When  I open the url "http://localhost:8080/checkCookieExists.html"
    Then  I expect the cookie "existing-cookie" exist
    And   I expect the cookie "existing-cookie" value is "Cookie with a value"
    And   I expect the cookie "undefined-value-cookie" exist
    And   I expect the cookie "undefined-value-cookie" value is "undefined"
    And   I expect the cookie "second-existing-cookie" exist
    And   I expect the cookie "second-existing-cookie" value is "Cookie with a new value"
    And   I expect the cookie "not-existing-cookie" not exist

  Scenario: Check for existing cookie given along with a value
    Given the cookie "existing-cookie" value is "Cookie with a value"
    And   I expect the cookie "existing-cookie" exist
    Then  I expect the cookie "undefined-value-cookie" value is "undefined"
    And   I expect the cookie "undefined-value-cookie" exist
    And   I expect the cookie "second-existing-cookie" value is "Cookie with a new value"
    And   I expect the cookie "second-existing-cookie" exist
    And   I expect the cookie "not-existing-cookie" not exist

  Scenario: Check for existing cookie given 
    Given the cookie "existing-cookie" exist
    Then  I expect the cookie "existing-cookie" value is "Cookie with a value"
    And   I expect the cookie "undefined-value-cookie" value is "undefined"
    And   I expect the cookie "undefined-value-cookie" exist
    And   I expect the cookie "second-existing-cookie" value is "Cookie with a new value"
    And   I expect the cookie "second-existing-cookie" exist
    And   I expect the cookie "not-existing-cookie" not exist

