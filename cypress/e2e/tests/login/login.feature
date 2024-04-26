Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given I navigate to the GoAwake login page
    When I log in with valid credentials
    Then I should be logged in successfully