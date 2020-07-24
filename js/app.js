const btnmenu = document.getElementById("btnmenu");
const menu = document.getElementById("melements");
const btnmenumobile = document.getElementById("btnmenumobile");
var linksnav = document.querySelectorAll(".link-nav");
let width = window.screen.width;

// console.log(linksnav);

// window.addEventListener('resize', reportWindowSize);
// console.log(width);

//  function reportWindowSize () {
//     if (width < 460) {
//       menu.style.display = "none";
//     } else {
//       menu.style.display = "block";
//     }

//   };

// document.addEventListener("DOMContentLoaded", function () {});

document.addEventListener("DOMContentLoaded", function () {
  if (width < 460) {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

  console.log(navigator.language);

  var navlang = navigator.language;
  var navlangdet = navlang.substring(0, 2);

  if (navlangdet === "en") {
    navlang = "en";
  } else if (navlangdet === "es") {
    navlang = "es";
  }

  console.log(navlang);
  $(function () {
    $(".lang").each(function (index, element) {
      $(this).text(arrLang[navlang][$(this).attr("key")]);
    });
  });
});

document.addEventListener("resize", function () {
  if (width < 460) {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

linksnav.forEach(function (link) {
  link.addEventListener("click", function () {
    if (width < 460) {
      menu.style.display = "none";
      btnmenumobile.style.transform = "rotate(0deg)";
      btnmenumobile.style.transitionDuration = "1s";
    }
  });
});

btnmenu.addEventListener("click", function () {
  // console.log(btnmenu);

  if (menu.style.display === "none") {
    menu.style.display = "block";
    btnmenumobile.style.transform = "rotate(180deg)";
    btnmenumobile.style.transitionDuration = "1s";
  } else {
    menu.style.display = "none";
    btnmenumobile.style.transform = "rotate(0deg)";
    btnmenumobile.style.transitionDuration = "1s";
  }
});
