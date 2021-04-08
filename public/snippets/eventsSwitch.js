switch (event.type) {
    case "PAGE_VIEW":
        /** INSERT CODE FOR PAGE VIEW */
        console.log("Page changed to "+event.data.pageNumber+" in document '"+event.data.fileName+"'");
    break;

    case "DOCUMENT_OPEN":
        /** INSERT CODE FOR DOCUMENT OPEN */
        console.log("Opened file "+event.data.fileName);
    break;

    case "BOOKMARK_ITEM_CLICK":
        /** INSERT CODE FOR DOCUMENT OPEN */
        console.log("Clicked bookmark called "+ event.data.title + " in the file called '" + event.data.fileName + "'");
    break;

    case "DOCUMENT_PRINT":
        /** INSERT CODE FOR PRINTING */
        console.log("Printing file "+event.data.fileName);
    break;

    case "HYPERLINK_OPEN":
        /** INSERT CODE HYPERLINK */
        console.log("Opening "+event.data.type +" hyperlink on page "+event.data.pageNumber+" located at X: "+event.data.x+" Y: "+event.data.y+" to URL: "+event.data.url);
    break;

    case "TEXT_COPY":
        /** INSERT CODE TEXT COPY */
        console.log("Copied the text "+event.data.copiedText+"'");
    break;

    case "TEXT_SEARCH":
        /** INSERT CODE SEARCHED TEXT */
        console.log("Copied the text "+event.data.searchedText+"'");
    break;

    case "ZOOM_LEVEL":
        /** INSERT CODE ZOOM LEVEL */
        console.log("Zoomed to level "+event.data.zoomLevel+"'");
    break;

    case "DOCUMENT_DOWNLOAD":
        /** INSERT CODE DOWNLOAD */
        console.log("Downloaded file "+event.data.fileName+"'");
    break;
}