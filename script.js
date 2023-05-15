const $body = $("body");
const $header = $(".page-header");
const $navCollapse = $(".navbar-collapse");
const scrollClass = "scroll";

$(window).on("scroll", () => {
  if (this.matchMedia("(min-width: 992px)").matches) {
    const scrollY = $(this).scrollTop();
    scrollY > 0 ? $body.addClass(scrollClass) : $body.removeClass(scrollClass);
  } else {
    $body.removeClass(scrollClass);
  }
});

$(".page-header .nav-link, .navbar-brand").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(href).offset().top - 71,
    },
    600
  );
});

var divElement = document.getElementById("viz1684180829227");
var vizElement = divElement.getElementsByTagName("object")[0];
vizElement.style.width = "100%";
vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
var scriptElement = document.createElement("script");
scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
vizElement.parentNode.insertBefore(scriptElement, vizElement);
{
  (" ");
}

var divElement = document.getElementById("viz1684181164593");
var vizElement = divElement.getElementsByTagName("object")[0];
vizElement.style.width = "100%";
vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
var scriptElement = document.createElement("script");
scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
vizElement.parentNode.insertBefore(scriptElement, vizElement);
{
  (" ");
}

var divElement = document.getElementById("viz1684181467283");
var vizElement = divElement.getElementsByTagName("object")[0];
vizElement.style.width = "100%";
vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
var scriptElement = document.createElement("script");
scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
vizElement.parentNode.insertBefore(scriptElement, vizElement);
{
  (" ");
}
