Feature: scrollToElement
  In order write BDD tests
  As a developer
  I want scroll to a given element
  
  Scenario: Scroll to the top of an existing element
    When  I open the url "http://localhost:8080/scrollToElement.html"
    Then  I scroll to the element "#second"
    And   I expect the element "#second-clue" contains text "In View"
    And   I expect the element "#first-clue" contains text "Out of View"
    And   I expect the element "#third-clue" contains text "Out of View"
    Then  I scroll to the element "#fourth"
    And   I expect the element "#fourth-clue" contains text "In View"
    And   I expect the element "#second-clue" contains text "Out of View"

  Scenario: Scroll to the top of element
    When  I scroll to element "#third"
    Then  I expect the element "#third-clue" contains text "In View"
    And   I expect the element "#first-clue" contains text "Out of View"

