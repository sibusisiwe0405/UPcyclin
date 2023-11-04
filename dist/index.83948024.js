var loadingSign = document.getElementById("loading-sign");
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) // Hide loading sign on scroll down
    loadingSign.classList.remove("show-loading-sign");
    else {
        // Show loading sign on scroll up
        loadingSign.classList.add("show-loading-sign");
        setTimeout(function() {
            // Navigate to next page after animation finishes
            window.location.href = "/page2";
        }, 1000);
    }
    lastScrollTop = st;
});

//# sourceMappingURL=index.83948024.js.map
