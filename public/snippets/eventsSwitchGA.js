/** 
 * This snippet shows how you can connect PDF Embed API to Google Analytics. This assumes you already have Google Analytics loaded on your webpage.
 * 
*/
let debugPdfEvents = true;

switch (event.type) {
    case "PAGE_VIEW":
        /** INSERT CODE FOR PAGE VIEW */
        if(debugPdfEvents) {
            console.log("Page changed to "+event.data.pageNumber+" in document '"+event.data.fileName+"'");
        }
        
        ga('send', 'event', event.type, 'Page information on change in page(s) in view', data);
    break;

    case "DOCUMENT_OPEN":
        /** INSERT CODE FOR DOCUMENT OPEN */
        if(debugPdfEvents) {
            console.log("Opened file "+event.data.fileName);
        }
        ga('send', 'event', event.type, 'Information when a document opens', data);
    break;

    case "BOOKMARK_ITEM_CLICK":
        /** INSERT CODE FOR DOCUMENT OPEN */
        if(debugPdfEvents) {
            console.log("Clicked bookmark called "+ event.data.title + " in the file called '" + event.data.fileName + "'");
        }
        ga('send', 'event', event.type, 'When a bookmark is clicked', data);
    break;

    case "DOCUMENT_PRINT":
        /** INSERT CODE FOR PRINTING */
        if(debugPdfEvents) {
            console.log("Printing file "+event.data.fileName);
        }

        ga('send', 'event', event.type, 'When a document is printed.', data);
        
    break;

    case "HYPERLINK_OPEN":
        /** INSERT CODE HYPERLINK */
        if(debugPdfEvents) {
            console.log("Opening "+event.data.type +" hyperlink on page "+event.data.pageNumber+" located at X: "+event.data.x+" Y: "+event.data.y+" to URL: "+event.data.url);
        }
        ga('send', 'event', event.type, 'When a hyperlink is clicked', data);
    break;

    case "TEXT_COPY":
        /** INSERT CODE TEXT COPY */
        if(debugPdfEvents) {
            console.log("Copied the text "+event.data.copiedText+"'");
        }
        ga('send', 'event', event.type, 'When text is copied', data);
    break;

    case "TEXT_SEARCH":
        /** INSERT CODE SEARCHED TEXT */
        if(debugPdfEvents) {
            console.log("Copied the text "+event.data.searchedText+"'");
        }
        ga('send', 'event', event.type, 'When a text is searched', data);
    break;

    case "ZOOM_LEVEL":
        /** INSERT CODE ZOOM LEVEL */
        if(debugPdfEvents) {
            console.log("Zoomed to level "+event.data.zoomLevel+"'");
        }
        ga('send', 'event', event.type, 'When zoomed', data);
    break;

    case "DOCUMENT_DOWNLOAD":
        /** INSERT CODE DOWNLOAD */
        if(debugPdfEvents) {
            console.log("Downloaded file "+event.data.fileName+"'");
        }
        ga('send', 'event', event.type, 'When a document is downloaded', data);
    break;
}