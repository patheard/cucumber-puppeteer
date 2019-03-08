Feature: checkCookieValue
  In order write BDD tests
  As a developer
  I want to be able to test the value of cookies

  Scenario: Check for cookie value
    When  I open the url "http://localhost:8080/checkCookieExists.html"
    Then  I expect the cookie "undefined-value-cookie" value is "undefined"
    And   I expect the cookie "second-existing-cookie" value is "Cookie with a new value"
    And   I expect the cookie "existing-cookie" value is "Cookie with a value"
    And   I expect the cookie "existing-cookie" value is not "Cookie with a new value"        

  Scenario: Check for cookie value given 
    Given the cookie "undefined-value-cookie" value is not "foobar"
    And   the cookie "second-existing-cookie" value is not "42"
    And   the cookie "existing-cookie" value is "Cookie with a value"
    And   the cookie "second-existing-cookie" value is "Cookie with a new value" 

