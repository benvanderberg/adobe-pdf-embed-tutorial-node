const eventOptions = {
    //Pass the PDF analytics events to receive.
    //If no event is passed in listenOn, then all PDF analytics events will be received.
    listenOn: [ 
      AdobeDC.View.Enum.PDFAnalyticsEvents.DOCUMENT_OPEN, 
      AdobeDC.View.Enum.PDFAnalyticsEvents.PAGE_VIEW,
      AdobeDC.View.Enum.PDFAnalyticsEvents.BOOKMARK_ITEM_CLICK,
      AdobeDC.View.Enum.PDFAnalyticsEvents.DOCUMENT_PRINT, 
      AdobeDC.View.Enum.PDFAnalyticsEvents.HYPERLINK_OPEN,
      AdobeDC.View.Enum.PDFAnalyticsEvents.TEXT_COPY,
      AdobeDC.View.Enum.PDFAnalyticsEvents.TEXT_SEARCH,
      AdobeDC.View.Enum.PDFAnalyticsEvents.ZOOM_LEVEL,     
      AdobeDC.View.Enum.PDFAnalyticsEvents.DOCUMENT_DOWNLOAD,
      AdobeDC.View.Enum.Events.APP_RENDERING_START,
      
     ],
    enablePDFAnalytics: true
  }