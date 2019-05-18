Feature: setElementStyle
  In order write BDD tests
  As a developer
  I want to set the CSS style attribute of elements on the page

  Scenario: Set element "display" style
    Given the url "http://localhost:8080/setElementStyle.html" is opened
    And   the element ".hidden" is not visible
    When  I set the element ".hidden" style "display" to "block"
    Then  I expect the element ".hidden" is visible

  Scenario: Set element "visibility" style
    Given the element ".visible" is visible
    When  I set the element ".visible" style "visibility" to "hidden"
    Then  I expect the element ".visible" is not visible  

  Scenario: Set multiple element styles
    When  I set the element "li" style "fontWeight" to "bold"
    Then  I expect the attribute "style" from element "li:nth-child(1)" contain "font-weight: bold"
    And   I expect the attribute "style" from element "li:nth-child(2)" contain "font-weight: bold" 
    And   I expect the attribute "style" from element "li:nth-child(3)" contain "font-weight: bold"          