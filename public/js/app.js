if (!window.Cypress)
  AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: "animated",
  });

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});
