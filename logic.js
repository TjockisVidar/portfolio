document.addEventListener("DOMContentLoaded", function() {
    var fsCover = document.querySelector(".fullscreenChecker");

    document.querySelector(".fullscreenChecker").addEventListener("click", function() {
        document.documentElement.requestFullscreen();

        fsCover.classList = "hide";
    });
});