Feature: Test
  In order to see how this test setup runs
  As a developer
  I want to visit a website and see what happens when the code runs

  Scenario: Visit a website
    Given I open the url "https://e-qa.gcdocs.gc.ca/otcs/llisapi.dll?func=llworkspace"
    Then  I expect that the title is "Sign in - GCdocs - E QA"
    And   the element ".button.button-lg" is visible

  Scenario: Check for element existence
    Then  the element ".button.button-lg" is visible    
  