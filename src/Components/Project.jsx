import firstProjectImg from "../image/project/galaxytech.jpg";
import secondProjectImg from "../image/project/gogocaffee.png";
import thirdProjectImg from "../image/project/natures.png";

const Project = () => {


  return (
    <section className="project-section">
      <div className="project__container">
        <div className="project__showcase">
          <div className="project__showcase-message u-margin-top-x7">
            <p className="heading__secondary u-margin-top-x2">My Work</p>
            <p className="heading__quinary u-margin-top-x3">Deployed modern website design, responsive web design for big screen computer, laptop, tablet and smart phone.</p>
          </div>
          <div className="project__shocase-animation">
          </div>
        </div>

        <div className="project__list u-margin-top-x15">
          <div className="project__list-first">
            <img src={firstProjectImg} className="project__list-img" alt="first-project" />
            <h4 className="heading__customGreen u-margin-top-x2 ">&lt;Galaxy Technology/&gt;</h4>
            <div className="u-margin-top-x4">
              <a href="https://gitlab.com/batch217-delizo/capstone3-delizo/capstone3-delizo" target="_blank" className="project__list-btn1" id="project-btn1">Github</a>
              <a href="https://capstone3-ecommerce-delizo.vercel.app/" target="_blank" className="project__list-btn2" id="project-btn1">Live Demo</a>
            </div>
          </div>

          <div className="project__list-second">
            <img src={secondProjectImg} className="project__list-img" alt="first-project" />
            <h4 className="heading__customGreen u-margin-top-x2">&lt;Gogo caffee/&gt;</h4>
            <div className="u-margin-top-x4">
              <a href="https://github.com/reynan1/gogo-caffee" target="_blank" className="project__list-btn1" id="project-btn1">Github</a>
              <a href="https://gogocaffee.netlify.app/" target="_blank" className="project__list-btn2" id="project-btn1">Live Demo</a>
            </div>
          </div>

          <div className="project__list-third">
            <img src={thirdProjectImg} className="project__list-img" alt="first-project" />
            <h4 className="heading__customGreen u-margin-top-x2">&lt;Natours/&gt;</h4>
            <div className="u-margin-top-x4">
              <a href="https://github.com/reynan1/natours/tree/master" target="_blank" className="project__list-btn1" id="project-btn1">Github</a>
              <a href="https://natureturs.netlify.app/" target="_blank" className="project__list-btn2" id="project-btn1">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;