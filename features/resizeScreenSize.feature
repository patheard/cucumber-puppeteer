Feature: resizeScreenSize
  In order write BDD tests
  As a developer
  I want to resize the browser window to a specific width and height in pixels
  
  Scenario: Resize screen size
    When  I open the url "http://localhost:8080/resizeScreenSize.html"
    And   I set the browser viewport to 600px width by 400px height
    Then  I expect the element "#boxwidth" contains text "Box width : 100"

  Scenario: Verifies resized screen
    When  I set the browser viewport to 1280px width by 680px height
    Then   I expect the element "#boxwidth" contains text "Box width : 700"