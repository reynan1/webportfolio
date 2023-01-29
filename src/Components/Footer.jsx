import logo from "../image/logo.png"

const Footer = () => {
  return (
    <footer className="footer u-margin-top-x10">
       <div className="footer__container u-margin-top-x1">
          <div className="footer__grid">
                <div className="footer__showcase u-margin-right-x4">
                    <figure className="footer__logoImage">
                        <img src={logo} alt="logo-image" />
                    </figure>
                    <div className="footer__icons u-margin-top-x2">
                        <a href="https://github.com/reynan1" className="anchor__icons" target="_blank">
                          <ion-icon name="logo-github" className="footer-icons"></ion-icon>
                        </a>
                        <a href="https://www.facebook.com/" className="anchor__icons" target="_blank">
                          <ion-icon name="logo-facebook" className="anchor__icons"></ion-icon>
                        </a>
                        <a href="https://www.linkedin.com/in/reynan-delizo-888943141/" className="anchor__icons" target="_blank">
                          <ion-icon name="logo-linkedin" className="footer-icons"></ion-icon>
                        </a>
                    </div>
                </div>
                <div className="footer__nav">
         
                    <div className="footer__contacts">
                      <a href="#" className="anchor__secondary">Contacts</a>
                      <div className="u-margin-top-x2">
                        <p className="span__secondary">B1 L4 Champange St. Brgy. Malamig Binan Laguna</p>
                        <p className="span__secondary">+63 999-570-5503</p>
                        <p className="span__secondary">nandelizo2@gmail.com</p>
                      </div>
                    </div>
                    <div className="footer__experience">
                      <a href="#" className="anchor__secondary">Work Experience</a>
                      <div className="u-margin-top-x2">
                        <p className="span__secondary">Zuitt</p>
                        <p className="span__secondary">Moriroku</p>
                      </div>
                    </div>
                    <div className="footer__project">
                      <a href="#" className="anchor__secondary">Projects</a>
                      <div className="u-margin-top-x2">
                        <p className="span__secondary">Natures</p>
                        <p className="span__secondary">Omnifood</p>
                        <p className="span__secondary">GogoCaffee</p>
                      </div>
                    </div>
                    <div className="footer__about-me">
                      <a href="#" className="anchor__secondary">Aboout Me</a>
                      <div className="u-margin-top-x2">
                        <p className="span__secondary">Natures</p>
                        <p className="span__secondary">Omnifood</p>
                        <p className="span__secondary">GogoCaffee</p>
                      </div>
                    </div>
                    <div className="footer__landing-pages">
                      <a href="#" className="anchor__secondary">Home</a>
                      <div className="u-margin-top-x2">
                        <p className="span__secondary">My message</p>
                        <p className="span__secondary">Years of experience</p>
                      </div>
                    </div>  
                </div>
          </div>
       </div>
       
         <p className="span__quarterly text-center u-margin-top-x5">
               Copyright &copy; 2022 by nanD studio. All rights reserved.
          </p>
    </footer>
  )
}

export default Footer
