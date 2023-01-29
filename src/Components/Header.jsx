import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import WebLogo from "../image/logo.png";

const Header = () => {
  const headerRef = useRef(null)
  const [navTag, setNavTag] = useState(true)
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    })
  }

  const toggleBtn = () => {
    setNavTag(true)
  }

  const closeBtn = () => {
    setNavTag(false)
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    if(windowDimension.winWidth <= 900) {
      console.log(windowDimension.winWidth + " ito ang sukat ")
      setNavTag(false)
    } else {  
      console.log(windowDimension.winWidth + " ito ang sukat ")
      setNavTag(true)
    }

    return () => {
      window.removeEventListener('resize', detectSize)
    }

  }, [windowDimension])
  

  useEffect(() => {
    const header = headerRef.current
    let lastScroll = 0;

    window.addEventListener('scroll', () => {

      const currentScroll = window.pageYOffset;
      header.classList.remove("header__scroll-up");

      if (currentScroll <= 0) {
        header.classList.remove("header__scroll-down");
        return;
      }

      if (currentScroll > lastScroll) {
        header.classList.add("header__scroll-down");
        header.classList.remove("header__scroll-up");
        console.log(" 1: current scroll:", currentScroll + " last scroll: " + lastScroll)
      }
      else if (
        currentScroll < lastScroll
      ) {
        console.log("2: current scroll:", currentScroll + " last scroll: " + lastScroll)
        header.classList.remove("header__scroll-down");
        header.classList.add("header__scroll-up");
      }

      lastScroll = currentScroll;
    })

    


  }, [])


  return (
    <header className="header" ref={headerRef}>
      <div className="header__div-logo">
        <NavLink as={NavLink} to="/"><img src={WebLogo} className="header__logo" /></NavLink>
      </div>

      {/* nav container tag */}
      <nav className={navTag ? "header__nav" : "header__nav-close"} >
        <ul>
          <li><NavLink as={NavLink} to="#">Home</NavLink></li>
          <li><NavLink as={NavLink} to="#">About Me</NavLink></li>
          <li><NavLink as={NavLink} to="#">Projects</NavLink></li>
          <li><NavLink as={NavLink} to="#">Experience</NavLink></li>
          <li><NavLink as={NavLink} to="#">Achievements</NavLink></li>
          <li><NavLink as={NavLink} to="#">Let`s Talk</NavLink></li>
        </ul>

         <span class="header__icon-mobile--close">  
              <ion-icon class="header__icon-mobile--close" name="close-outline" onClick={closeBtn}></ion-icon>
          </span> 
      </nav>

      {/* icon list container tag */}
      <ul className="header__iconList">
        <li>
          <a href="https://github.com/reynan1" className="anchor__icons" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" className="anchor__icons" target="_blank">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/reynan-delizo-888943141/" className="anchor__icons" target="_blank">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
      </ul>

      {/* for tablet and mobile view */}

      <button className="header__btn-nav">
          <span class="header__icon-mobile--open">
               <ion-icon  name="menu-outline" onClick={toggleBtn}></ion-icon>
          </span>
      </button>
    </header>
  )
}

export default Header;

