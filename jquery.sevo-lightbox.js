(function($) {

    $.fn.sevoLightbox = function(options) {
        const settings = $.extend({
            overlayBackgroundColor: "rgba(0, 0, 0, .9)",
            overlayZIndex: "999",
            closeContent: "Close", 
            imageMaxWidth: "80%",
            imageMaxHeight: "80%",
            overlayClass: "sevo-lightbox__overlay", 
            closeOnClick: false,
            showCaption: true,
            fadeSpeed: 250,
            closeOnEscape: true
        }, options);

        return this.each(function() {
                let overlay;
                let overlayInner;
                let img;
                let closeBtn;
                let caption;
                let that = this;



                function removeOverlay() {
                    overlay.fadeOut(settings.fadeSpeed, function() {
                        overlay.remove();
                    });
                }


                $(this).on("click", function(e) {
                    e.preventDefault();
                    createOverlay();
                    overlay.fadeIn(settings.fadeSpeed);
                });

                function createOverlay() {
                    overlay = $("<div></div>")
                        .css({
                            "background-color": settings.overlayBackgroundColor,
                            "position": "absolute",
                            "top": "0px",
                            "left": "0px",
                            "bottom": "0px",
                            "width": "100%",
                            "height": "100%", 
                            //"display": "none",
                            "z-index": settings.overlayZIndex
                        })
                        .addClass(settings.overlayClass)
                        .hide();

                    overlayInner = $("<div></div>")
                        .css({
                                                "width": "100%",
                            "height": "100%",
                            "display": "flex",
                            "justify-content": "center",
                            "align-items": "center",
                            "position": "relative"
                        })
                        .addClass("sevo-lightbox__overlay-inner")
                        .on("click", function(e){
                            if(settings.closeOnClick) {
                                removeOverlay();
                            }
                        });
                    
                    const href = $(that).attr("href");
                    console.log(that);
                    img = $("<img />")
                        .attr("src", href)
                        .css({
                            "display": "block",
                            "max-width": settings.imageMaxWidth,
                            "max-height": settings.imageMaxHeight
                    });

                    closeBtn = $(`<div>${settings.closeContent}</div>`)
                        .css({
                            "color": "white",
                            "position": "absolute",
                            "top": "10px",
                            "right": "10px",
                            "cursor": "pointer"

                        })
                        .addClass("sevo-lightbox__close-btn")
                        .on("click", function(e) {
                            removeOverlay();
                        });


                    captionText = $(that).data("caption") ? $(that).data("caption") : "";
                    caption = $("<p></p>")
                        .css({
                            "color": "white",
                            "font-style": "italic",
                            "position": "absolute",
                            "bottom": "5px"

                        })
                        .addClass("sevo-lightbox__caption")
                        .text(captionText);


                    $(document).on("keydown", function(e) {
                        if(settings.closeOnEscape) {
                            if(e.key === "Escape") {
                                removeOverlay();
                            }

                        }
                    });

                    overlayInner.append(closeBtn);
                    overlayInner.append(img);
                    overlayInner.append(caption);
                    overlay.append(overlayInner);

                    $("body").append(overlay);

                }

            });
    }; 

}(jQuery));