$(document).ready(function(){
    var url = "https://www.api.flickr.com/services/feeds/photos_public.gne?" + "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

    $.getJSON(url, function(data) {
        var html = "";
        $.each(data.items, function(i, item) {
            html += "<a href=" + item.media.m + " data-lightbox=" + item.tags + " data-title=" + item.title + ">";
            html += "<img src=" + item.media.m + "></a>";
        });
        $("#new_building").html(html);
    });
});