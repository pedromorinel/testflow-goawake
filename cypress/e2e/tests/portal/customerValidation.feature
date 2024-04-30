Feature: Switch Online functionality on GoAwake platform

  Scenario: Testing Switch Online feature
    Given I am on the homepage of GoAwake
    When I switch to online mode for customer "Creare Sistemas"
    Then the alarms related to customer "Creare Sistemas" in online mode are displayed after 30 seconds
