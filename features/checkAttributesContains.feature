Feature: checkAttributeConains
  In order write BDD tests
  As a developer
  I want to check if an element's attribute contains a specific substring

  Scenario: Check attribute contains
    When  I open the url "http://localhost:8080/checkAttribute.html"
    Then  I expect the attribute "class" from element "#cssClass" contain "foobar"
    And   I expect the attribute "href" from element "#href" contain "page"
    And   I expect the attribute "data-favorite-snack" from element "ul" contain "ins" 

  Scenario: Check attribute contains given
    Given the attribute "class" from element "#cssClass" not contain "weasel"
    And   the attribute "charset" from element "meta" contain "utf"
    And   the attribute "href" from element "a[id='href']" not contain "/pickle-rick"



