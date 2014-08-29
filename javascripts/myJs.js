(function() {
    var images = $('.slideShowImages img'),
        increment = 1,
        oldNav = $("#myNav");

    function changeNavigationBar() {
        $("#myNav").parent().load("includes/smallScreenNavigation.html nav");
    }

    function changePicture() {
        if (increment === images.length) {
            increment = 0;
        }
        var $image = $(images[increment++]);
        images.fadeOut();
        $image.fadeIn(500);
    }

    $(document).ready(function() {
        var slideShowImagesId = setInterval(changePicture, 2000);

        //for small screen devices stop the image slide show
        //change the navigation bar
        setInterval(function() {
            if ($(window).width() < 455 && slideShowImagesId) {
                clearInterval(slideShowImagesId);
                slideShowImagesId = 0;
                changeNavigationBar();

            } else if ($(window).width() > 480 && !slideShowImagesId) {
                //activate the slideShow again
                slideShowImagesId = setInterval(changePicture, 2000);
                //restore old navigation
                $("#myNav").parent().html(oldNav);
            }
        }, 750);

    });

})();