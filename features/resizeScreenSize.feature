Feature: resizeScreenSize
  In order write BDD tests
  As a developer
  I want to resize the browser window to a specific width and height in pixels
  
  Scenario: Resize screen size
    When  I open the url "http://localhost:8080/resizeScreenSize.html"
    Then  I resize the browser to 600 pixels width and 400 pixels height
    And   I expect the element "#boxwidth" contains text "Box width : 100"

  Scenario: Verifies resized screen
    When  I set the browser size to 1280 pixels width and 680 pixels height
    And   I expect the element "#boxwidth" contains text "Box width : 700"