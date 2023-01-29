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
                <li> JavaScript</li>
                <li> SCSS, Bootstrap</li>
                <li> React JS (Vite, CRA)</li>
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
                <li>MySQL</li>
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
              Reynan Delizo is an IT Staff who gained extensive knowledged about web development using HTML5, CSS3, SCSS, JS, Node JS And PHP Whenever I looked back, it was like only yesterday that I challenged myself at work to create my own web project. Since that moment on, I find myself having this desire to work in web development. It is now leading me to this desire to make this passion as my profession. I love to learn new things. I don't want to give up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience;