# adobe-pdf-embed-api-tutorial

## Purpose

## Exercise 0: Prepare

### Get Client ID
1. Go to https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html
2. Click on Get Started (https://www.adobe.io/apis/documentcloud/dcsdk/gettingstarted.html)
3. Click on Get Started
4. Under Choose a service, select PDF Embed API.
5. Under Credentials Name, provide a unique name.
6. Under Application Domain, set the domain of where PDF Embed API will be used.
7. Click on Create Credentials.
8. Note down the Client ID. This will be used later.

### Copy Client ID into dc-config.js
1. In the exercise code, navigate to resources/js/dc-config.js. This is loaded in the head of the exercise/index.html head.
2. Set the clientId variable the Client ID you created earlier.


### Get Documentation
You can access documentation (https://www.adobe.com/go/docsvcs_doc_pdfembed#://) for PDF Embed API.
 
## Exercise 1: Adding PDF Embed API to a Webpage

### Copy Client ID into dc-config.js
1. In the exercise code, navigate to resources/js/dc-config.js. This is loaded in the head of the exercise/index.html head.
2. Set the clientId variable the Client ID you created earlier.

### Navigate PDF Embed API Demo
1. Navigate to https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html
2. Click Try the Demo.
3. Click the different Embed Modes on the left side bar.
4. Switch back Full Window.
5. Click on annotation tools in top right corner to explore annotations.
6. Click on search button to search in the document.
7. Click the ... menu to show the Download PDF and Print PDF options.
8. Click on Customize button on left sidebar.
9. Toggle different viewer components.
10. Click Generate Code.
11. Copy the this part of the script: `<script src="https://documentcloud.adobe.com/view-sdk/main.js"></script>` code
12. In the files, open the file exercise/index.html.
13. Find the part of the code `<!-- TODO: EXERCISE 1: INSERT EMBED API SCRIPT TAG -->`.
14. After this line, paste the script.
15. Go back to the Embed API Demo and copy `<div id="adobe-dc-view"></div>` code.
16. In index.html, search for `<!-- TODO: EXERCISE 1: INSERT PDF EMBED API CODE  -->`.
17. Paste the `<div id="adobe-dc-view"></div>` code.
18. Go back to the Embed API Demo and copy the following code and paste it into index.html: 
```
<script type="text/javascript">
	document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
		var adobeDCView = new AdobeDC.View({clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view"});
		adobeDCView.previewFile({
			content:{location: {url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
			metaData:{fileName: "Bodea Brochure.pdf"}
		}, {});
	});
</script>
```
19. Paste into index.html.
20. Find the part of the code that says `<YOUR_CLIENT_ID>` and replace it with clientId.
21. In browser, load the web page from your web server to confirm that it loads correctly.
22. Search in index.html for `https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf` and replace it with `../resources/pdfs/whitepaper.pdf`.
23. Go back to the web page in the web browser and refresh the page to confirm the new PDF is being loaded.
24. Change the Viewer Components in the Embed API Demo.
25. Click on Generate Code to see where the parameters get added to the embed code.

## Exercise 2: Accessing Analytics APIs
1. Go to Default analytics in documentation (https://www.adobe.com/devnet-docs/dcsdk_io/viewSDK/howtodata.html#default-analytics)
2. Review the different types of events available as part of the API.
3. Copy the default analytics sample code from teh documentation.

```
 const eventOptions = {
   //Pass the PDF analytics events to receive.
   //If no event is passed in listenOn, then all PDF analytics events will be received.
   listenOn: [ AdobeDC.View.Enum.PDFAnalyticsEvents.PAGE_VIEW, AdobeDC.View.Enum.PDFAnalyticsEvents.DOCUMENT_DOWNLOAD],
   enablePDFAnalytics: true
 }

 adobeDCView.registerCallback(
   AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
   function(event) {
     console.log("Type " + event.type);
     console.log("Data " + event.data);
   }, eventOptions
 );
```
4. In index.html, find the code section that you added earlier that looks like below and append the code above after this code:

```
var adobeDCView = new AdobeDC.View({clientId: clientId, divId: "adobe-dc-view"});
              adobeDCView.previewFile({
                content:{location: {url: "../resources/pdfs/whitepaper.pdf"}},
                metaData:{fileName: "Bodea Brochure.pdf"}
              }, {showDownloadPDF: true});
```
5. In your web browser, load the page and open the Console to view the console outputs from the different events as you interact with the PDF viewer.

### Add Switch for capturing events
1. In the exercise code, navigate to snippets/eventsSwitch.js and copy the contents of the file.
2. In the event listener function, paste the code in.
3. In the web browser, see the console outputs correctly outputting in the console when page is loaded and the PDF Viewer is interacted with.

### Adobe Analytics
1. In documentation, navigate to Adobe Analytics session https://www.adobe.com/devnet-docs/dcsdk_io/viewSDK/howtodata.html#adobe-analytics to review if you have Adobe Analytics enabled on your webpage and follow instructions to set up a reportSuite.
2. Navigate to https://documentcloud.adobe.com/view-sdk-demo/analyticsDashboard.html in web browser to see the Analytics sample dashboard.

### Google Analytics
1. To see how you can integrate with Google Analytics, navigate to snippets/eventsSwitchGA.js.
2. Review and use this code as an example if your webpage is tracked using Adobe Analytics and it is already embedded on the webpage.


## Exercise 3: Add Interactivity Based on Events

### Example of Paywall
Navigate to https://www3.technologyevaluation.com/research/white-paper/the-forrester-wave-digital-decisioning-platforms-q4-2020.html to see an example of a PDF behind a paywall. In this exercise we will review how you can add interactivity on top of a PDF viewing experience.

### Add Paywall Code
1. Go to snippets/paywallCode.html and copy the contents.
2. In exercise/index.html and search for `<!-- TODO: EXERCISE 3: INSERT PAYWALL CODE -->`.
3. Paste the copied code after the comment.
4. Go to snippets/paywallEventCode.js and copy the contents.
5. In exercise/index.html and search for `/** TODO: EXERCISE 3: ADD PAYWALL CODE */`
6. Paste the code into that location.

### Try Demo with Paywall
1. Load page in web browser.
2. Scroll down to a page > 2.
3. Show the dialog come up to challenge user after the second page.

## Additional Resources