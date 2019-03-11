Feature: deleteCookie
  In order write BDD tests
  As a developer
  I want to delete a cookie present in a web page

  Scenario: Delete Cookie
    When  I open the url "http://localhost:8080/deleteCookie.html"
    Then  I expect the cookie "existing-cookie" exist
    And   I delete the cookie "existing-cookie"
    And   I expect the cookie "existing-cookie" not exist

  Scenario: Delete Cookie when
    When  I delete the cookie "second-existing-cookie"
    Then  I expect the cookie "second-existing-cookie" not exist
