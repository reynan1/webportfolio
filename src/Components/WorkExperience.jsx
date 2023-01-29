import { useState, useEffect, useRef } from "react";

const WorkExperience = () => {

  const[list1, setList1] = useState(false)
  const [list2, setList2 ] = useState(false)

  const btn1 = () => {
     setList1(true)
     setList2(false)
  }

  const btn2 = () => {
     setList2(true)
     setList1(false)
  }
  
  useEffect (() => {
    setList1(true)
    setList2(false)
  }, [])



  return (
    <section className="workExperience-section u-margin-top-x12">
      <div className="workExperience">
        <div className="WorkExperience__container">
           <p className="heading__secondary text-center u-margin-top-x5 ">Work Experience</p>

            <div className="workExperience__table">
              <ul  className="workExperience__list-btn">
                 <input type="radio" className="workExperience__radio" name="radio-btn" onClick={btn1} id="work-btn-1" />
                            
                <input type="radio" className="workExperience__radio" name="radio-btn" onClick={btn2}  id="work-btn-2"/>

                <li className= { list1 ? "active" : undefined } id="work-btn-1">
                   <button className="workExperience__btn">
                      <label  htmlFor="work-btn-1" >
                        Zuitt
                      </label>
                    </button>
                </li>
                <li id="work-btn-2" className={list2 ? "active" : undefined }>
                    <button className="workExperience__btn">
                      <label  htmlFor="work-btn-2">
                        Moriroku
                      </label>
                    </button>
                </li>
              </ul>
              <div className="workExperience__description">
                <div className={list2 ? "workExperience__zuitt" : undefined}>
                    <div className="heading__secondary ">
                         Student 
                        <span className="span__primary">@Zuitt</span>
                    </div>

                    <p className="heading__senary u-margin-top-x1">October 3, 2022 - December 13, 2022</p>

                    {/* start of capstone 1  */} 

                    <p className="heading__quarterly u-margin-top-x3 ">Capstone 1 - Fronted Web Developer Portfolio</p>
                  
                    <ul className="workExperience__list list-unstyled">
                       <li>
                
                          <ul className="workExperience-nested__list list-unstyled">
                              <li>
                                 <span className="heading__quinary">
                                              For our Fronted we use <em> HTML5,
                                              CSS3, Bootstrap 4 and JavaScript</em>.
                                 </span>  
                              </li>
                              <li>
                                 <span className="heading__quinary ">
                                               For our version Control and hosting we used Github it`s free and easy to use.
                                 </span> 
                              </li>
                          </ul>        
                        </li>
                    </ul>           

                    {/* end of capstone 1  */}

                    {/* start of capstone 2 */}  

                    <p className="heading__quarterly u-margin-top-x3 ">Capstone 2 - Backend Web API Node.JS(Express) and Postman application</p>
                  
                    <ul className="workExperience__list list-unstyled">
                       <li>
                
                          <ul className="workExperience-nested__list list-unstyled">
                              <li>
                                 <span className="heading__quinary">
                                              For our capstone2 we used <em> Node.js, Express,
                                              Mongoose, MongoDB Atlas, Postman and Render ( web hosting )</em>.
                                 </span>  
                              </li>
                              <li>
                                 <span className="heading__quinary">
                                              We used <em> CRUD operations for products and user information, user validation, user role, user authorization and permission, we use Postman for check JSON data rusult, We use render for our web hosting of our backend</em>.
                                 </span>  
                              </li>
                              <li>
                                 <span className="heading__quinary ">
                                              My functionalities I build are <em>Registration, Login, user role ( admin, user ), admin authorization ( user profile, admin dashboar ( number of user, products, archive list ) , archive - products, user, add - update - remove products ), user authorization ( user profile,can buy products, update - delete products, can pay products ), Payment card ( this funtionalities is valid only for user to used it for buying products. )</em>.
                                 </span> 
                              </li>
                          </ul>        
                        </li>
                    </ul>           

                   {/* End of capstone 2 */}  

                   {/* start of capstone 2 */}  

                   <p className="heading__quarterly u-margin-top-x3 ">Capstone 3 - Ecommerce website application using MERN ( Mongo DB, Express, React, Node.js )</p>
                  
                  <ul className="workExperience__list list-unstyled">
                     <li>
              
                        <ul className="workExperience-nested__list list-unstyled">
                            <li>
                               <span className="heading__quinary">
                                            For our capstone3 we used <em> MERN ( Mongo DB, Express, React, Node.js ), vercel and render for web hosting</em>.
                               </span>  
                            </li>
                            <li>
                               <span className="heading__quinary">
                                            I used <em> Adobe Photoshop 2022 for my logo, pictures width and height size and image quiality</em>.
                               </span>  
                            </li>
                            <li>
                               <span className="heading__quinary">
                                            We used <em> React CRA , hooks(useState, useEffect, useRef, useContext), router-dom manipulation, react boostrap, npm package and many components in react</em>.
                               </span>  
                            </li>
                            <li>
                               <span className="heading__quinary ">
                                            Capstone 3 is our fullstack development for our frontend we use React and backend is our capstone 2 we use also gitLab ( version control ) and for our web hosting for frontend ( vercerl ) and backend ( Render ) .
                               </span> 
                            </li>
                        </ul>        
                      </li>
                  </ul>           

                 {/* End of capstone 2 */}  

                </div>
                <div className={list1 ? "workExperience__moriroku" : undefined} id="moriroku-id" >
                   <div className="heading__secondary">
                     IT Staff 
                     <span className="span__primary">@Moriroku</span>
                   </div>

                   <p className="heading__senary u-margin-top-x1">November 2017 - August 2021</p>

                   <p className="heading__quarterly u-margin-top-x3 "> Production monitoring system ( HTML5, CSS3, JavaScript, Node.js, Mongoose, MSSQL )</p> 
                   <ul className="workExperience__list list-unstyled">
                       <li>
                
                          <ul className="workExperience-nested__list list-unstyled">
                              <li>
                                 <span className="heading__quinary">
                                              Have developed a monitoring system for Moriroku IT
                                              Department using <em> HTML5/CSS3/Java script/Node.JS
                                              (Express)/MS SQL</em> that aims to record all the IP address
                                              of manufacturing "line production" in order to track the
                                              "finished output" per production line is on time and not
                                              delayed.
                                 </span>  
                              </li>
                              <li>
                                 <span className="heading__quinary ">
                                              Have managed and serve as server administrator for C
                                              panel web application by doing task such as creating
                                              employees email, securing spam are block listed and
                                              making sure that the company group organization
                                              domains are on white list.
                                 </span> 
                              </li>
                              <li>
                                 <span className="heading__quinary ">
                                              Have managed and served as Office 365 Administrator
                                              by creating new user accounts for new employees.
                                 </span> 
                              </li>
                              <li>
                                 <span className="heading__quinary ">
                                              Run maintain and backup up all networks, including
                                              hardware and software updates daily to keep system
                                              running efficiently.
                                 </span> 
                              </li>
                          </ul>        
                        </li>
                    </ul>    
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default WorkExperience;