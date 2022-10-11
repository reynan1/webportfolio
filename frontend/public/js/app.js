const scrollBar = () => {
  let webScrollBar = 0;
  let header1 = document.querySelector("#my-header1-id");
  let header2 = document.querySelector("#my-header2-id");
  let logoImg = document.getElementById('logo-img-id');
  let toggle = document.getElementById('logo-togle-id');
  window.addEventListener("scroll", () => {
    let scrollBarMovement =
      window.pageYOffset || document.documentElement.scrollBarMovement;
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
      toggle.style.setProperty('background-color', 'rgba(7, 0, 0, 0.9)', 'important');
      logoImg.classname = 'navigation__logo1';
      console.log("header2")
    }
  });

  console.log("it`s working now");
};

scrollBar();

document.getElementById('toggle-btn').addEventListener('click', () => {
    let navigationList = document.getElementById('navigation-id')
    navigationList.style.setProperty('display', 'block', 'important');
    navigationList.style.setProperty('width', '100%', 'important');
    navigationList.style.setProperty('border', '2px solid red', 'important');
})