const scrollBar = () => {
  let webScrollBar = 0;
  let header1 = document.querySelector("#my-header1-id");
  let header2 = document.querySelector("#my-header2-id");
  let logoImg = document.getElementById('logo-img-id');
  window.addEventListener("scroll", () => {
    let scrollBarMovement =
      window.pageYOffset || document.documentElement.scrollBarMovement;
    console.log(scrollBarMovement);
    if (scrollBarMovement > webScrollBar) {
      header2.style.setProperty('display', 'block', 'important');
      header2.style.setProperty('display', 'block', 'important');
      logoImg.classname = 'navigation__logo1';
      header1.style.transition = "all 0.2s";
      header1.style.setProperty('display', 'none', 'important');
    } else {
      header1.style.setProperty('display', 'block', 'important');
      header2.style.opacity = "100";
      header2.style.setProperty('display', 'none', 'important');
      logoImg.classname = 'navigation__logo1';
      console.log("header2")
    }
  });

  console.log("it`s working now");
};

scrollBar();