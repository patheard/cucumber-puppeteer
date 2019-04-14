Feature: setElementValue
  In order write BDD tests
  As a developer
  I want to set the value of input, select and textarea elements

  Scenario: Set element value
    When  I open the url "http://localhost:8080/setElementValue.html"
    And   I set the element ".enabled" value to "rick"
    And   I set the element "select[name='cartoon-characters']" value to "morty"
    And   I set the element "textarea" value to "Meeseeks and Destroys"
    And   I set the element "[type='password']" value to "$TEST_PASSWORD"
    Then  the element ".enabled" value is "rick"
    And   the element "select[name='cartoon-characters']" value is "morty"
    And   the element "textarea" value is "Meeseeks and Destroys"
    And   the element "[type='password']" value is "pass"