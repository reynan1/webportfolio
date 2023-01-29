import capstone1 from "../image/awards/capstone1.png"
import capstone2 from "../image/awards/capstone2.png"
import capstone3 from "../image/awards/capstone3.png"
import completionCert from "../image/certificates/completionCert.png"
const AwardsAndCertificates = () => {
  return (
    <section className='awwardsAndCertificates-section'>
      <div className="awardsAndCertificates ">
        <div className="awardsAndCertificates__container">
          <p className="heading__secondary text-center u-margin-top-x7"> Achievements Awards & Certificates </p>

          <div className="awardsAndCertificates__showcase u-margin-top-x10">
            <div className="awardsAndCertificates__achievements">
              {/* achievement  awards */}
              <div className="awardsAndCertificates__achievements-awards">
                <div className="d-flex justify-content-between">
                  <h3 className="heading__tertiary">&lt; Awards from Zuitt /&gt;</h3>
                  <span className="heading__icons">
                    <ion-icon name="trophy-outline"></ion-icon>
                  </span>
                </div>
                <p className="heading__quinary u-margin-top-x2">Top 1 in Batch 217 in Zuitt Learning Institute inc.</p>
                <ul className="experience__skill-list list-unstyled u-margin-top-x2">
                  <li>
                    <span className="heading__senary">
                      Best Capstone 1: Web Application Portfolio
                    </span>
                  </li>
                  <li>
                    <span className="heading__senary">
                      Best Capstone 2: Ecommerce Backend Web Application
                    </span>
                  </li>
                  <li>
                    <span className="heading__senary">
                      Best Capstone 3: Ecommer Fullstack Web Application
                    </span>
                  </li>
                </ul>
              </div>

              {/* achievement  certificates */}
              <div className="awardsAndCertificates__achievements-certificates">
                <div className="d-flex justify-content-between">
                  <h3 className="heading__tertiary">&lt; Certificates from Zuitt /&gt;</h3>
                  <span className="heading__icons">
                    <ion-icon name="star-half-outline"></ion-icon>
                  </span>
                </div>

                <p className="heading__quinary u-margin-top-x2">Certificate of Zuitt Full Stack Course</p>

                <ul className="experience__skill-list list-unstyled u-margin-top-x2">
                  <li>
                    <span className="heading__senary">
                      Certificate of Completion: MERN tech stack (MongoDB, Express.js, React.js and Node.js)
                    </span>
                  </li>
                  <li>
                    <span className="heading__senary">
                      Short Course: PHP, MySQL, and Laravel
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="awardsAndCertificates__gallery">
              <div className="d-flex justify-content-between">
                <h3 className="heading__tertiary ">&lt; Photo Library /&gt;</h3>
                <span className="heading__icons">
                  <ion-icon name="image-outline"></ion-icon>
                </span>
              </div>

              <div className="awardsAndCertificates__gallery-list">
                <figure className="awardsAndCertificates__gallery-item">
                  <img src={capstone1} className="awardsAndCertificates__gallery-image" alt="first-project" />
                </figure>

                <figure className="awardsAndCertificates__gallery-item">
                  <img src={capstone2} className="awardsAndCertificates__gallery-image" alt="first-project" />
                </figure>

                <figure className="awardsAndCertificates__gallery-item">
                  <img src={capstone3} className="awardsAndCertificates__gallery-image" alt="first-project" />
                </figure>

                <figure className="awardsAndCertificates__gallery-item">
                  <img src={completionCert} className="awardsAndCertificates__gallery-image" alt="first-project" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardsAndCertificates
