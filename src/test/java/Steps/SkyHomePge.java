package Steps;

import Base.BaseUtil;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import pages.HomePage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class SkyHomePge extends BaseUtil {

    private static BaseUtil baseUtil;

    public SkyHomePge(BaseUtil baseUtil) { SkyHomePge.baseUtil = baseUtil;
    }


    @Given("^user navigates to sky news home page$")
    public void userLunchSkyNewSite() {

        baseUtil.Driver.navigate().to("https://news.sky.com/");
    }
    @And("^User click on Accept button on the cookies popup window$")
    public void userClickOnAcceptButtonOnTheCookiesPopupWindow() {
        HomePage page = new HomePage (baseUtil.Driver);
        baseUtil.Driver.switchTo().frame(page.cookiesIframe);
        page.click(page.btnCookies_Accept);
        baseUtil.Driver.switchTo().parentFrame();

    }

    @Then("^Verify the browser tab title should display \"([^\"]*)\"$")
    public void verifyTheBrowserTabTitleShouldDisplay(String expectedTabTitle)  {
        HomePage page = new HomePage (baseUtil.Driver);
        String actualTabTitle = baseUtil.Driver.getTitle();
        page.assertEquals(expectedTabTitle.toUpperCase(),  actualTabTitle.toUpperCase());
    }

    @Then("^Verify the number of categories displayed on the home page should be \"([^\"]*)\"$")
    public void verifyTheNumberOfCategoriesDisplayedOnTheHomePageShouldBe(int expectedNumberOfCategory) {
        HomePage page = new HomePage (baseUtil.Driver);
        List<WebElement> lst = page.categories;
        int actualNumberOfCategory = lst.size();
        page.assertEquals_int(expectedNumberOfCategory, actualNumberOfCategory);
    }

    @Then("^Verify the categories names displayed home \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedOnTheHomePage(String expectedCategoryName)  {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_home);
    }

    @Then("^Verify the categories names displayed UK \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedUKOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_uk);
    }

    @Then("^Verify the categories names displayed World \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedWorldOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_World);
    }

    @Then("^Verify the categories names displayed Politics \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedPoliticsOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_Politics);
    }

    @Then("^Verify the categories names displayed US \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedUSOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_us);
    }

    @Then("^Verify the categories names displayed Climate \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedClimateOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_climate);
    }

    @Then("^Verify the categories names displayed Science & Tech \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedScienceTechOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_ScienceTech);
    }

    @Then("^Verify the categories names displayed Business \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedBusinessOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_Business);
    }

    @Then("^Verify the categories names displayed Ents & Arts \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedEntsArtsOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_EntsArts);
    }

    @Then("^Verify the categories names displayed Travel \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedTravelOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_Travel);
    }

    @Then("^Verify the categories names displayed Offbeat \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedOffbeatOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_Offbeat);
    }

    @Then("^Verify the categories names displayed Analysis \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedAnalysisOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_Analysis);
    }

    @Then("^Verify the categories names displayed Opinion \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedOpinionOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_Opinion);
    }

    @Then("^Verify the categories names displayed Videos \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedVideosOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_Videos);
    }

    @Then("^Verify the categories names displayed Weather \"([^\"]*)\" on the home page$")
    public void verifyTheCategoriesNamesDisplayedWeatherOnTheHomePage(String expectedCategoryName) {
        HomePage page = new HomePage (baseUtil.Driver);
        page.verifyPageMessage(expectedCategoryName,page.mainItem_Weather);
    }

    @Then("^User Verify that the default focus point is on the Home category$")
    public void userVerifyThatTheDefaultFocusPointIsOnTheHomeCategory() {
    }

    @And("^User Verify that if the user then clicks on ‘Climate’$")
    public void userVerifyThatIfTheUserThenClicksOnClimate() {
        HomePage page = new HomePage (baseUtil.Driver);
        page.click(page.mainItem_climate);
    }

    @Then("^Climate category should becomes the focus point$")
    public void climateCategoryShouldBecomesTheFocusPoint() {
    }

    @When("^user Select a story from the homepage$")
    public void userSelectAStoryFromTheHomepage() {
        HomePage page = new HomePage (baseUtil.Driver);
        page.click(page.select_home_story_impeachment);
    }

    @Then("^user verifies that \"([^\"]*)\" should display successfully$")
    public static boolean userVerifiesThatWORDShouldDisplaySuccessfully(String expectedTabTitle) {
        String sentence = baseUtil.Driver.getTitle();
            boolean ans = Boolean.FALSE;
            ArrayList<String> wordList = null;

            try {

                if(sentence != null && expectedTabTitle != null){
                    wordList = new ArrayList<String>(Arrays.asList(sentence.split("[^a-zA-z]+")));
                    if(wordList.contains(expectedTabTitle)){
                        ans = Boolean.TRUE;
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
                // TODO: handle exception
            }
            return ans;
        }


    @And("^user click on the More option on the sky home age$")
    public void userClickOnTheMoreOptionOnTheSkyHomeAge() {
        HomePage page = new HomePage (baseUtil.Driver);
        page.click(page.optHome_more);
    }
}
