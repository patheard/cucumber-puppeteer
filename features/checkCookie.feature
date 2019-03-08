Feature: checkCookie
  In order write BDD tests
  As a developer
  I want to be able to test the existence and/or the content of cookies

  Scenario: Check for existing cookies
    When  I open the url "http://localhost:8080/checkCookieExists.html"
    Then  I expect that cookie "existing-cookie" exists
    And   I expect that cookie "existing-cookie" contains "Cookie with a value"
    And   I expect that cookie "undifined-value-cookie" exists
    And   I expect that cookie "undifined-value-cookie" contains "undifined"
    And   I expect that cookie "second-existing-cookie" exists
    And   I expect that cookie "second-existing-cookie" contains "Cookie with a new value"
    And   I expect that cookie "not-existing-cookie" not exists

  Scenario: Check for existing cookie given along with a value
    Given the cookie "existing-cookie" contains the value "Cookie with a value"
    And   I expect that cookie "existing-cookie" exists
    Then  I expect that cookie "undifined-value-cookie" contains "undifined"
    And   I expect that cookie "undifined-value-cookie" exists
    And   I expect that cookie "second-existing-cookie" contains "Cookie with a new value"
    And   I expect that cookie "second-existing-cookie" exists
    And   I expect that cookie "not-existing-cookie" not exists

  Scenario: Check for existing cookie given 
    Given the cookie "existing-cookie" does exists
    Then   I expect that cookie "existing-cookie" contains "Cookie with a value"
    And   I expect that cookie "undifined-value-cookie" contains "undifined"
    And   I expect that cookie "undifined-value-cookie" exists
    And   I expect that cookie "second-existing-cookie" contains "Cookie with a new value"
    And   I expect that cookie "second-existing-cookie" exists
    And   I expect that cookie "not-existing-cookie" not exists

