Feature: checkContainsText
  In order write BDD tests
  As a developer
  I want to check if an element contains text

  Scenario: Check element contains text
    When  I open the url "http://localhost:8080/checkContainsText.html"
    Then  I expect the element ".wizard" contains text "Harry"    
    And   I expect the element ".wizard" contains text "You're a wizard Harry"
    And   I expect the element ".plumbus" contains text "Everyone has a Plumbus in their home. First they take the dinglebop, and they smooth it out, with a bunch of Schleem."       
    And   I expect the element ".wizard" does not contain text "foobar"
