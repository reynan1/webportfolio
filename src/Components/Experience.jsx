import userPic from "../image/profile.jpg";

const experience = () => {
  return (
    <section className="experience-section">
      <div className="experience">

        {/* experience container */}

        <div className="experience__container">

          {/* experience skill */}

          <div className="experience__skill">

            {/* experience skill design */}

            <div className="experience__skill-design">
              <div className="d-flex justify-content-between">
                <h3 className="heading__tertiary">&lt; Design and Tools /&gt;</h3>
                <span className="heading__icons">
                  <ion-icon name="pencil-outline"></ion-icon>
                </span>
              </div>
              <p className="heading__quinary u-margin-top-x2">Application for design and tools for web development</p>

              <ul className="experience__skill-list list-unstyled">
                <li>Adobe Photoshop CC 2022</li>
                <li>Adobe Illustrator CC 2020</li>
                <li>GitHub</li>
                <li>Postman</li>
                <li>Docker</li>
                <li>AWS S3 Bucket</li>
              </ul>
            </div>

            {/* experience skill frontEnd */}

            <div className="experience__skill-frontEnd">
              <div className="d-flex justify-content-between">
                <h3 className="heading__tertiary">&lt; Front-End Development /&gt;</h3>
                <span className="heading__icons">
                  <ion-icon name="code-slash-outline"></ion-icon>
                </span>
              </div>
              <p className="heading__quinary u-margin-top-x2">Languages use for Front-End Development</p>

              <ul className="experience__skill-list list-unstyled">
                <li> HTML 5, CSS 3</li>
                <li> JavaScript, TypeScript</li>
                <li> SCSS, Bootstrap, Tailwind</li>
                <li> React JS (Vite, CRA)</li>
                <li> Angular v13 & 19</li>
              </ul>
            </div>

            {/* experience skill backEnd */}

            <div className="experience__skill-backEnd">
              <div className="d-flex justify-content-between">
                <h3 className="heading__tertiary">&lt; Back-End Development /&gt;</h3>
                <span className="heading__icons">
                  <ion-icon name="cog-outline"></ion-icon>
                </span>
              </div>
              <p className="heading__quinary u-margin-top-x2">Languages use for Back-End Development</p>

              <ul className="experience__skill-list list-unstyled">
                <li>Node.JS (Express)</li>
                <li>PHP</li>
                <li>MongoDB, Mongoose</li>
                <li>NoSQL,MySQL</li>
              </ul>
            </div>
          </div>
          {/* experience about me */}
          <div className="experience__aboutMe">
            <h4 className="heading__small-intro">About me</h4>
            <img src={userPic} className="profile-pic" alt="profile-picture" />

            <p className="heading__primary">Hello! I`m Reynan Delizo</p>

            <p className="heading__italic font-italic u-margin-top-x3 ">
              Every great design begin with positive mindset and hardwork.
            </p>

            <p className="heading__paragraph font-italic u-margin-top-x3">
                A passionate Full Stack Developer with 2+ years of experience in developing and maintaining scalable web applications. 
              Skilled in Angular, Node.js, and TypeScript, with a focus on writing clean, maintainable code and improving performance. 
              A self-taught developer recognized with Outstanding Awards in Zuitt Capstone Projects 1, 2, and 3.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience;