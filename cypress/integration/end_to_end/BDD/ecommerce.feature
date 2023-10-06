Feature: Katalon Cart Validation

    Validating products in a cart

    Scenario: Cart Validation Acceptance Criteria
    Given I add four random items to my cart
    When I view my cart
    Then I find total four items listed in my cart
    When I search for lowest price item from my cart
    And I am able to remove the lowest price item from my cart
    Then I am able to verify three items in my cart
    

    