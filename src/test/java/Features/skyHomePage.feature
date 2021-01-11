Feature: homePageFeature
  This Home page feature test scenarios for the Sky news Homepage

Background:
  Given user navigates to sky news home page


  Scenario: Verification Test on Sky News Home page
  #  And User click on Accept button on the cookies popup window
    Then Verify the browser tab title should display "The Latest News from the UK and Around the World | Sky News"
    Then Verify the number of categories displayed on the home page should be "15"
    Then Verify the categories names displayed home "Home" on the home page
    Then Verify the categories names displayed UK "UK" on the home page
    Then Verify the categories names displayed World "World" on the home page
    Then Verify the categories names displayed Politics "Politics" on the home page
    Then Verify the categories names displayed US "US" on the home page
    Then Verify the categories names displayed Climate "Climate" on the home page
    Then Verify the categories names displayed Science & Tech "Science & Tech" on the home page
    Then Verify the categories names displayed Business "Business" on the home page
    Then Verify the categories names displayed Ents & Arts "Ents & Arts" on the home page
    Then Verify the categories names displayed Travel "Travel" on the home page
    Then Verify the categories names displayed Offbeat "Offbeat" on the home page
   # And user click on the More option on the sky home age
    Then Verify the categories names displayed Analysis "Analysis" on the home page
    Then Verify the categories names displayed Opinion "Opinion" on the home page
    Then Verify the categories names displayed Videos "Videos" on the home page
    Then Verify the categories names displayed Weather "Weather" on the home page
    Then User Verify that the default focus point is on the Home category
    And User Verify that if the user then clicks on ‘Climate’
    Then Climate category should becomes the focus point
    When user Select a story from the homepage
    Then user verifies that "protests" should display successfully

