var showPaywall = true;

$("#paywall-form").submit(function(e) {
    e.preventDefault();
});

function pdfEventsController (event) {
    if(typeof event !== "undefined") {
        console.log(event)
        switch (event.type) {
            case "PAGE_VIEW":
                if(event.data.pageNumber > 2 && showPaywall == true) {
                    console.log("Add Paywall");
                    $('.paywall').removeClass('d-none');
                    console.log("Add Class");
                    $('#adobe-dc-view').addClass('adobe-dc-view-blurred');
                }
                
                break;
        }
    }
}

function paywall_submit() {
    $('.paywall').addClass('d-none');
    $('#adobe-dc-view').removeClass('adobe-dc-view-blurred');
    showPaywall = false;
}
