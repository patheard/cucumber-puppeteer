Feature: fileUpload
  In order write BDD tests
  As a developer
  I want to set the value of file input elements
  
  Scenario: Set a file input element value
    Given the url "http://localhost:8080/fileUpload.html" is opened
    When  I set the file element "input[type='file']" value to "./test/screenshots/ref/ccc-landing.png"
    Then  I expect the element ".file-name" is visible after "5" seconds
    And   I expect the element ".file-name" contains text "ccc-landing.png" 
    