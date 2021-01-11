package Base;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

public class ExtentReportUtil extends BaseUtil {
    String fileName = reportLocation + "extentReport.html";

    public void ExtentReport(){
        extent = new ExtentReports();

        ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter(fileName);
        htmlReporter.config().setTheme(Theme.DARK);
        htmlReporter.config().setDocumentTitle("Test Report for SkyProject Test");
        htmlReporter.config().setEncoding("utf-8");
        htmlReporter.config().setReportName("Test Report");

        extent.attachReporter((htmlReporter));

    }



    public void FlushReport(){

        extent.flush();
    }

}
