
const btnNavEl = document.querySelector(".header__btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});



function changeBgColor2() {
    const btn = document.getElementById('project-btn1');
    btn.style.backgroundColor = '#40c057';
    btn.style.color = '#000';
    btn.style.transition = 'all .5s ease-in';
}

function normalBgColor2() {
  const btn = document.getElementById('project-btn1');
  btn.style.backgroundColor = 'transparent';
  btn.style.color = '#40c057';
  btn.style.transition = 'all .5s ease-in';
}

function changeBgColor4() {
  const btn = document.getElementById('project-btn3');
  btn.style.backgroundColor = '#40c057';
  btn.style.color = '#000';
  btn.style.transition = 'all .5s ease-in';
}

function normalBgColor4() {
const btn = document.getElementById('project-btn3');
btn.style.backgroundColor = 'transparent';
btn.style.color = '#40c057';
btn.style.transition = 'all .5s ease-in';
}

function changeBgColor6() {
  const btn = document.getElementById('project-btn5');
  btn.style.backgroundColor = '#40c057';
  btn.style.color = '#000';
  btn.style.transition = 'all .5s ease-in';
}

function normalBgColor6() {
  const btn = document.getElementById('project-btn5');
    btn.style.backgroundColor = 'transparent';
    btn.style.color = '#40c057';
    btn.style.transition = 'all .3s all';
}


function zuitBtnColor() {;
  const zuitt = document.getElementById('zuitt-id');
  const moriroku = document.getElementById('moriroku-id'); 
    zuitt.style.opacity = '1';
    zuitt.style.visibility = 'visible';
    zuitt.style.transition = 'all .3s all';
    moriroku.style.opacity = '0';
    moriroku.style.visibility = 'hidden';
    moriroku.style.transition = 'all .3s all';
}




function morirokuBtnColor() {
  const moriroku = document.getElementById('moriroku-id'); 
  const zuitt = document.getElementById('zuitt-id');
    moriroku.style.opacity = '1';
    moriroku.style.visibility = 'visible';
    zuitt.style.opacity = '0';
    zuitt.style.visibility = 'hidden';
}



