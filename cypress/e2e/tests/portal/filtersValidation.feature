Feature: Testing filters on GoAwake platform

  Scenario: Testing customer filter
    Given I am on the homepage of GoAwake
    When I filter by customer "Samarco"
    Then the alarms related to customer "Samarco" are displayed

  Scenario: Testing driver filter
    Given I am on the homepage of GoAwake
    When I filter by customer "Creare Sistemas" and driver "Nubia"
    Then the alarms related to driver "Nubia" from customer "Creare Sistemas" are displayed

  Scenario: Testing vehicle filter
    Given I am on the homepage of GoAwake
    When I filter by customer "Creare Sistemas" and vehicle "TESTEMKT"
    Then the alarms related to vehicle "TESTEMKT" from customer "Creare Sistemas" are displayed
