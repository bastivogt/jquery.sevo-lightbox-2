(function($) {
    console.log("Hello world!");
    $("[data-gallery-item]").sevoLightbox({
        closeContent: "Close", 
        showCaption: true,
        overlayBackgroundColor: "rgba(0, 0, 0, 0.8)",
        closeOnClick: true
    });



}(jQuery));