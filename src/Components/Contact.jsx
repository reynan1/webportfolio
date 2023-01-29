const Contact = () => {
  return (
    <section className='contact-section u-margin-top-x5'>
        <div className="contact">
          <div className="contact__container ">
             <p className="heading__secondary text-center "> Contact Me </p>

             <div className="contact__details u-margin-top-x10">
                  <div className="contact__information">
                     <div className="contact__email">
                        <span className="contact__icon">
                           <ion-icon name="mail-outline" className="contact__icon"></ion-icon>
                        </span>     
                        <p className="span__primary"> Email </p>
                        <p className="span__tertiary">reystudio28@gmail.com</p> 
                        <a href="mailto:reystudio28@gmail.com" className="anchor__primary"> send a message </a>  
                      </div>

                      <div className="contact__phone">
                        <span className="contact__icon">
                          <ion-icon name="call-outline"></ion-icon>
                        </span>   
                        <p  className="span__primary"> What`s App</p>
                        <p className="span__tertiary">+63 999-570-5503</p>
                        <a href="https://api.whatsapp.com/send?phone+639995705503" className="anchor__primary" target="_blank" rel="noreferrer" > send a message </a>  
                      </div>

                      <div className="contact__chat">  
                        <span className="contact__icon">
                          <ion-icon name="chatbubbles-outline" ></ion-icon>
                        </span>   
                        <p  className="span__primary"> Messenger </p>  
                        <p className="span__tertiary">Let`s stay touch</p>
                        <a href="https://m.me/Nan.Delizo" target="_blank" rel="noreferrer" className="anchor__primary"> send a message </a>  
                      </div>
                  </div>
                  <div className="contact__form">
                      <form action="" className="contact__form-style">
                          <div className="contact__form-inputBox">
                              <input type="text" className="contact__form-inputBox--input" placeholder="Your Name" />
                          </div>

                          <div className="contact__form-inputBox">
                              <input type="email" className="contact__form-inputBox--input" placeholder="Your Email" />
                          </div>

                          <div className="contact__form-inputBox">
                              <input type="number" className="contact__form-inputBox--input" placeholder="Your What`s App Contact Number" />
                          </div>

                          <div className="contact__form-textArea">
                              <textarea name="message" className="contact__form-textArea--area" id="" cols="30" rows="10"  placeholder="Your Message"></textarea>
                          </div>
                      </form>               
                  </div>
             </div>
          </div>
        </div>
    </section>
  )
}

export default Contact
