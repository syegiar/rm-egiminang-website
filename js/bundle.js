var slideShow = document.getElementsByClassName(
    "slideshow"
  );

    for (let s = 0; s < slideShow.length; s++) {
    var cycle = slideShow[s].dataset.cycle;
    var slides = slideShow[s].querySelectorAll(".slides");
    var slideIndex = 0;
    showSlides(slides, slideIndex, cycle);
  }

  function showSlides(slides, slideIndex, cycle) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function () {
      showSlides(slides, slideIndex, cycle);
    }, cycle);
  }
  var icon = document.querySelector(".icon");
      icon.addEventListener("click", function () {
        this.classList.toggle("change");
      });
      function myNavbar() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }