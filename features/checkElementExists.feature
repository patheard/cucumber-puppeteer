Feature: checkElementExists
  In order write BDD tests
  As a developer
  I want to check if an element's attribute has a specific value

  Scenario: Check element exists
    When  I open the url "http://localhost:8080/checkElementExists.html"
    Then  I expect the element "[role='nav']" is on the page
    And   I expect the element "footer ul li ol li > div span" is on the page
    And   I expect the element ".exists" is on the page
    And   I expect the element ".missing" is not on the page
    And   I expect the element "section" is not on the page

  Scenario: Check element exists given
    Given element "h1" is on the page
    And   element "ul" is on the page
    And   element ".foobs" is not on the page
    And   element "p:first-child" is not on the page



