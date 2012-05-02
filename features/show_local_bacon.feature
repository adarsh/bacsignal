Feature: Show a list of the nearest places with bacon
  In order to find the nearest restaurant serving bacon
  As a user
  I should be able to see restaurants closeby who serve bacon

  Scenario: Show a list of nearest restaurants serving bacon
    Given I have enabled location on my browser
    Then I should see a list of nearby restaurants
    And the dishes with bacon which they serve
