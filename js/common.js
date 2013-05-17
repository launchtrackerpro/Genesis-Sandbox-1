jQuery(document).ready(function (e) {
    e("ul.menu-mobile").before('<div id="primary-menu-toggle" class="menu-toggle primary"><a class="toggle-switch show" href="#"><span>Show Menu</span></a></div>');
    e("#primary-menu-toggle .show").click(function () {
        if (e(".menu-mobile").is(":hidden")) {
            e(".menu-mobile").slideDown(500);
            e(this).attr("class", "toggle-switch hide").attr("title", "Hide Menu");
            e("#primary-menu-toggle span").replaceWith("<span>Hide Menu</span>")
        } else {
            e(".menu-mobile").hide(500);
            e(this).attr("class", "toggle-switch show").attr("title", "Show Menu");
            e("#primary-menu-toggle span").replaceWith("<span>Show Menu</span>")
        }
    });
    e(".menu-mobile .menu-item").click(function (t) {
        t.preventDefault();
        e(this).children(".sub-menu").slideToggle()
    });
    jQuery(".scroll, .gototop a").click(function (e) {
        e.preventDefault();
        jQuery("html,body").animate({
            scrollTop: jQuery(this.hash).offset().top
        }, 500)
    })
})