package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class HomePage {
    public HomePage (WebDriver driver) {
        PageFactory.initElements(driver,this);
    }


    @FindBy (how = How.XPATH, using = "//button[@title='Accept']")
    public WebElement btnCookies_Accept;

    @FindBy (how = How.XPATH, using = "//*[@id='sp_message_iframe_368417']")
    public WebElement cookiesIframe;

    @FindBy (how = How.XPATH, using = "//li[@data-role='main-nav-item']")
    public List<WebElement> categories;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Home')]")
    public WebElement mainItem_home;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'UK')]")
    public WebElement mainItem_uk;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'World')]")
    public WebElement mainItem_World;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Politics')]")
    public WebElement mainItem_Politics;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'US')]")
    public WebElement mainItem_us;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Climate')]")
    public WebElement mainItem_climate;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Science & Tech')]")
    public WebElement mainItem_ScienceTech;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Business')]")
    public WebElement mainItem_Business;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Ents & Arts')]")
    public WebElement mainItem_EntsArts;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Travel')]")
    public WebElement mainItem_Travel;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Offbeat')]")
    public WebElement mainItem_Offbeat;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Analysis')]")
    public WebElement mainItem_Analysis;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Opinion')]")
    public WebElement mainItem_Opinion;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Videos')]")
    public WebElement mainItem_Videos;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='main-nav-item']//a[contains(text(), 'Weather')]")
    public WebElement mainItem_Weather;

    @FindBy (how = How.XPATH, using = "//*[@data-role ='overflow-navigation-button']")
    public WebElement optHome_more;

    @FindBy (how = How.XPATH, using = "//*[@class='sdc-site-tile__headline-link']//span[contains(text(), 'impeachment')]")
    public WebElement select_home_story_impeachment;










    public void click(WebElement locator)
    {
        locator.click();
    }

    public void assertEquals(String expectedValue, String actualValue)
    {
        Assert.assertEquals(expectedValue, actualValue);
    }

    public void assertEquals_int(Integer expectedValue, Integer actualValue)
    {
        Assert.assertEquals(expectedValue, actualValue);
    }

    public void verifyPageMessage (String expectedValue, WebElement locator)
    {
        String actualValue = locator.getText();
        Assert.assertEquals(expectedValue, actualValue);
    }






}
