package Steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Hook extends BaseUtil {

    private final BaseUtil baseUtil;

    public Hook(BaseUtil baseUtil) {
        this.baseUtil = baseUtil;
    }

    @Before
    public void InitializeTest()
    {
        System.out.println("Opening the browser : Chrome");
        // passing the WebDriver instance

        System.setProperty("webdriver.chrome.driver", "C/chromedriver");
        baseUtil.Driver = new ChromeDriver();
        baseUtil.Driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        baseUtil.Driver.manage().window().maximize();
    }


    @After
    public void TearDownTest(Scenario scenario)
    {
        System.out.println("Closing the browser : Chrome");
        if(scenario.isFailed()) {
            try {
                scenario.write("Current Page URL is " +  baseUtil.Driver.getCurrentUrl());
                byte[] screenshot = ((TakesScreenshot) baseUtil.Driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (WebDriverException somePlatformsDontSupportScreenshots) {
                System.err.println(somePlatformsDontSupportScreenshots.getMessage());
            }
        }
        baseUtil.Driver.quit();
    }
}
