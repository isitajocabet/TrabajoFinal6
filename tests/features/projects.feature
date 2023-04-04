@ui-tests 
#@api-tests
Feature: Todoist Projects
Background: Login into Todoist
    Given the user logged into Todoist

@test 
# @delete-project-api
Scenario: Create Project
    Given the user hovers the mouse on Projects label on the Vertical Menu
    Given the user clicks the Add Project Icon on the Vertical Menu
    Given the user sets "Maria Isabel" as Project Name on the Add Project popup
    Given the user selects the "Yellow" color on the Add Project popup
    Given the user select the "Add to favorites" Toggle on the Add Project popup
    Given the user select the "List" view option on the Add Project popup
    When the user clicks the Add Button on the Add Project popup
    Then the user should see the New Project on the Vertical Menu
