Feature: Edit Driver

  Scenario: Edit Driver
    Given I am on the main page of the system
    When I click on the navigation menu
    And I click to expand the navigation menu
    And I select the driver screen option
    And I click to filter customer
    And I type "Creare Sistemas" into the customer search field
    And I select the customer
    And I get the driver ID
    And I generate a random driver's license number
    And I store the driver ID
    And I click to edit the driver
    And I fill in the name field with "Example"
    And I intercept the PUT request to update the driver
    And I fill in the driver's license field with the generated random number
    And I confirm the edit
    Then I wait for the response of the driver update request
    And I expect the response status code to be 200
