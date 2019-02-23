Feature: checkAttribute
  In order write BDD tests
  As a developer
  I want to check if an element's attribute has a specific value

  Scenario: Check attributes
    When  I open the url "http://localhost:8080/checkAttribute.html"
    Then  I expect the attribute "class" from element "#cssClass" is "foobar bambaz"
    And   I expect the attribute "href" from element "#href" is "/somepage"
    And   I expect the attribute "data-favorite-snack" from element "ul" is "muffins" 

  Scenario: Check attributes given
    Given the attribute "class" from element "#cssClass" is not "foobar"
    And   the attribute "charset" from element "meta" is "utf-8"
    And   the attribute "href" from element "a[id='href']" is not "/pickle-rick"



