$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skyHomePage.feature");
formatter.feature({
  "line": 1,
  "name": "homePageFeature",
  "description": "This Home page feature test scenarios for the Sky news Homepage",
  "id": "homepagefeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 996522240,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user navigates to sky news home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SkyHomePge.userLunchSkyNewSite()"
});
formatter.result({
  "duration": 2752924730,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verification Test on Sky News Home page",
  "description": "",
  "id": "homepagefeature;verification-test-on-sky-news-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#  And User click on Accept button on the cookies popup window"
    }
  ],
  "line": 10,
  "name": "Verify the browser tab title should display \"The Latest News from the UK and Around the World | Sky News\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify the number of categories displayed on the home page should be \"15\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify the categories names displayed home \"Home\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify the categories names displayed UK \"UK\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify the categories names displayed World \"World\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify the categories names displayed Politics \"Politics\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify the categories names displayed US \"US\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Verify the categories names displayed Climate \"Climate\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Verify the categories names displayed Science \u0026 Tech \"Science \u0026 Tech\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify the categories names displayed Business \"Business\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify the categories names displayed Ents \u0026 Arts \"Ents \u0026 Arts\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify the categories names displayed Travel \"Travel\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify the categories names displayed Offbeat \"Offbeat\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user click on the More option on the sky home age",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the categories names displayed Analysis \"Analysis\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Verify the categories names displayed Opinion \"Opinion\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Verify the categories names displayed Videos \"Videos\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Verify the categories names displayed Weather \"Weather\" on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User Verify that the default focus point is on the Home category",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User Verify that if the user then clicks on ‘Climate’",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Climate category should becomes the focus point",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user Select a story from the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user verifies that \u0027WORD\u0027 should display successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "The Latest News from the UK and Around the World | Sky News",
      "offset": 45
    }
  ],
  "location": "SkyHomePge.verifyTheBrowserTabTitleShouldDisplay(String)"
});
formatter.result({
  "duration": 25021629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 70
    }
  ],
  "location": "SkyHomePge.verifyTheNumberOfCategoriesDisplayedOnTheHomePageShouldBe(int)"
});
formatter.result({
  "duration": 16985946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 44
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedOnTheHomePage(String)"
});
formatter.result({
  "duration": 25380055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UK",
      "offset": 42
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedUKOnTheHomePage(String)"
});
formatter.result({
  "duration": 23455759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "World",
      "offset": 45
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedWorldOnTheHomePage(String)"
});
formatter.result({
  "duration": 24471026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Politics",
      "offset": 48
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedPoliticsOnTheHomePage(String)"
});
formatter.result({
  "duration": 23883557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 42
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedUSOnTheHomePage(String)"
});
formatter.result({
  "duration": 24034967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Climate",
      "offset": 47
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedClimateOnTheHomePage(String)"
});
formatter.result({
  "duration": 24068936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Science \u0026 Tech",
      "offset": 54
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedScienceTechOnTheHomePage(String)"
});
formatter.result({
  "duration": 25689467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business",
      "offset": 48
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedBusinessOnTheHomePage(String)"
});
formatter.result({
  "duration": 23019894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ents \u0026 Arts",
      "offset": 51
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedEntsArtsOnTheHomePage(String)"
});
formatter.result({
  "duration": 23873411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Travel",
      "offset": 46
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedTravelOnTheHomePage(String)"
});
formatter.result({
  "duration": 23814083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Offbeat",
      "offset": 47
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedOffbeatOnTheHomePage(String)"
});
formatter.result({
  "duration": 23277288,
  "status": "passed"
});
formatter.match({
  "location": "SkyHomePge.userClickOnTheMoreOptionOnTheSkyHomeAge()"
});
formatter.result({
  "duration": 48896889,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"#\" class\u003d\"sdc-site-header__menu-item-link sdc-site-header__menu-item-link--overflow\" data-role\u003d\"overflow-navigation-button\" aria-controls\u003d\"sdc-site-header-overflow-nav\"\u003e...\u003c/a\u003e is not clickable at point (1381, 118). Other element would receive the click: \u003ciframe src\u003d\"https://cdn.privacy-mgmt.com/index.html?message_id\u003d368417\u0026amp;consentUUID\u003db21a4307-3a98-4a1b-a653-6f58fdda13ed\u0026amp;requestUUID\u003d62702302-1d03-4194-bcd3-3b689b74f8b1\u0026amp;preload_message\u003dtrue\" id\u003d\"sp_message_iframe_368417\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d87.0.4280.88)\n  (Driver info: chromedriver\u003d2.35.528139 (47ead77cb35ad2a9a83248b292151462a66cd881),platform\u003dLinux 5.8.0-34-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LT00889\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-34-generic\u0027, java.version: \u002711.0.9.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528139 (47ead77cb35ad2..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 87.0.4280.88, webStorageEnabled: true}\nSession ID: b7c7cb4dbb287064b40583b06aa4cab3\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\n\tat pages.HomePage.click(HomePage.java:86)\n\tat Steps.SkyHomePge.userClickOnTheMoreOptionOnTheSkyHomeAge(SkyHomePge.java:164)\n\tat ✽.And user click on the More option on the sky home age(skyHomePage.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analysis",
      "offset": 48
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedAnalysisOnTheHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Opinion",
      "offset": 47
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedOpinionOnTheHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Videos",
      "offset": 46
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedVideosOnTheHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Weather",
      "offset": 47
    }
  ],
  "location": "SkyHomePge.verifyTheCategoriesNamesDisplayedWeatherOnTheHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SkyHomePge.userVerifyThatTheDefaultFocusPointIsOnTheHomeCategory()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SkyHomePge.userVerifyThatIfTheUserThenClicksOnClimate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SkyHomePge.climateCategoryShouldBecomesTheFocusPoint()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SkyHomePge.userSelectAStoryFromTheHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SkyHomePge.userVerifiesThatWORDShouldDisplaySuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://news.sky.com/");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 459149820,
  "status": "passed"
});
});