const scrollBar = () => {
  let webScrollBar = 0;
  let header1 = document.querySelector("#my-header1-id");
  let header2 = document.querySelector("#my-header2-id");
  let logoImg = document.getElementById('logo-img-id');
  let toggle = document.querySelector('.toggle-btn');
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
     
      logoImg.classname = 'navigation__logo1';
      console.log("header2")
    }
  });

  console.log("it`s working now");
};

scrollBar();

document.querySelector('.toggle-btn').addEventListener('click', () => {
    let navigation = document.querySelector(".navigation");
    let closeIcon = document.querySelector('.navigation__close-togle');
    let closeBtn = document.querySelector('.close-btn-id');
    let toggleBtn = document.querySelector('.toggle-btn');
    let navigationList = document.querySelector('.navigation-id');
    navigationList.style.setProperty('display', 'block', 'important');
    navigationList.style.setProperty('height', '100%', 'important');
    navigationList.style.setProperty('background-color', 'rgba(7, 0, 0, 0.9)', 'important');
    navigation.style.setProperty('background-color', 'rgba(7, 0, 0, 0.9)', 'important');
    navigation.style.setProperty('height', '100vh', 'important');
    toggleBtn.style.display = "none";
    closeBtn.style.display = "block";
    closeIcon.style.display = "block";
})

 document.querySelector('.close-btn-id').addEventListener('click', () => {
  let navigation = document.querySelector(".navigation");
  let toggleBtn = document.querySelector('.toggle-btn');
  let navigationList = document.querySelector('.navigation-id');
  navigation.style.setProperty('background-color', '#2a2b2c', 'important');
  navigation.style.setProperty('height', '5vh', 'important');
  navigationList.style.display = "none";
  toggleBtn.style.display = "block";
  document.querySelector('.close-btn-id').style.display = "none";
});

document.querySelector('.toggle-btn1').addEventListener('click', () => {
  let navigation = document.querySelector(".navigation1");
  let closeIcon = document.querySelector('.navigation__close-togle1');
  let closeBtn = document.querySelector('.close-btn-id1');
  let toggleBtn = document.querySelector('.toggle-btn1');
  let navigationList = document.querySelector('.navigation-id1');
  navigationList.style.setProperty('display', 'block', 'important');
  navigationList.style.setProperty('height', '100%', 'important');
  navigationList.style.setProperty('width', '100%', 'important');
  navigationList.style.setProperty('background-color', 'rgba(7, 0, 0, 0.9)', 'important');
  navigation.style.setProperty('background-color', 'rgba(7, 0, 0, 0.9)', 'important');
  navigation.style.setProperty('height', '100vh', 'important');
  toggleBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeIcon.style.display = "block";
})


document.querySelector('.close-btn-id1').addEventListener('click', () => {
  let navigation = document.querySelector(".navigation1");
  let toggleBtn = document.querySelector('.toggle-btn1');
  let navigationList = document.querySelector('.navigation-id1');
  navigation.style.setProperty('background-color', 'rgba(7, 0, 0, 0.9)', 'important');
  navigation.style.setProperty('height', '5vh', 'important');
  navigationList.style.display = "none";
  toggleBtn.style.display = "block";
  document.querySelector('.close-btn-id1').style.display = "none";
});

