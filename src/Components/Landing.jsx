import { Link } from "react-router-dom";
import userImage from "../image/reynan.png";
import userCircularImage from "../image/reynan2.png"


const Landing = () => {
  return (
    <section className="landing-section" >
      {/* landing container */}
      <div className="landing__container  u-margin-top-x13" >
        {/* landing intro container */}
        <div className="landing__intro">
          <div className="landing__intro-message">
            <span className="heading__quarterly" >Hi, my name is</span>
            <p className="heading__primary">Reynan Delizo.</p>
            <p className="heading__primary">I`m a web developer.</p>
            <blockquote className="heading__quinary u-margin-top-x3">
              An enthusiastic person with a great passion toward Web development and possess an extensive knowledge through front-end and back-end development
            </blockquote>

            <Link to="./src/documents/Reynan_Delizo_Resume.pdf" download="Reynan_Delizo_Resume.pdf" target="_blank" className="btn__link">
              Download CV&nbsp;
              <ion-icon name="cloud-download-outline" className="u-mini-margin-right"></ion-icon>
            </Link>
          </div>

          <div className="landing__circular">
            <img src={userCircularImage} class="landing__circular-image" alt="reynan-circular-img" />
          </div>

          <div className="landing__intro-experience">
            <span className="heading__primary">3.0</span>
            <span className="heading__senary">Nomination Awards</span>
            {/* empty span to have a big span in in grid */}
            <span></span>
            <span className="heading__primary">6.0</span>
            <span className="heading__senary">web programming language</span>
          </div>
        </div>

        {/* landing image container */}
        <div className="landing__profile-img">
          <img src={userImage} className="image__developer" />

        </div>

      </div>
    </section>
  )
}

export default Landing;