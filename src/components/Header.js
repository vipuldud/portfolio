import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Header.css'

function Header() {
    return (
        <div className={"mainBody"}>
            <nav className={"navbar"}>
                <a className={"brand-name"}>Sagar Dutta</a>
                <ul className={"nav"}>
                    <li className={"active"}><a href="#about"><h6>About</h6></a></li>
                    <li><a href="#skills"><h6>Skills</h6></a></li>
                    <li><a href="#pjs"><h6>Projects</h6></a></li>
                    <li><a href="#contact"><h6>Contact</h6></a></li>        
                </ul>
            </nav>
            <div className="profile">
                <img src={process.env.PUBLIC_URL + '/display-image.jpg'} alt="Profile" className="profile-img" />
                <div className="profile-text">
                    <h2 className="my-name">SAGAR DUTTA</h2>
                    <h5>Full-Stack Developer | Designer | Content Writer</h5>
                    <p><a href='https://github.com/SagarDuttaSays'><img src={process.env.PUBLIC_URL+'/icons/ghub.png'} alt="webdev" style={{borderRadius: "100%", width: "40px"}}/></a> <a href='https://instagram.com/theeliopsalms?igshid=ZDdkNTZiNTM='><img src={process.env.PUBLIC_URL+'/icons/ig.png'} alt="webdev" style={{borderRadius: "100%", width: "50px"}}/></a> <a href='https://leetcode.com/duttasagar086/'><img src={process.env.PUBLIC_URL+'/icons/ltc.png'} alt="webdev" style={{borderRadius: "100%", width: "45px"}}/></a> <a href='https://www.linkedin.com/in/duttasagar'><img src={process.env.PUBLIC_URL+'/icons/lkdin.png'} alt="webdev" style={{borderRadius: "100%", width: "50px"}}/></a></p>
                </div>
          </div>
          <div id="about" className="about">
            <h2>ABOUT</h2>
            <div className="container">
            <p>I am a fourth-year B.Tech student pursuing Computer Science and Engineering with a specialization in Health Informatics at VIT Bhopal University. My passion lies in the field of IT in the healthcare sector, where I am constantly intrigued by the potential of technology to transform the way healthcare is delivered. With a CGPA of 9.10, I have dedicated myself to excelling in my academics and gaining a strong foundation in computer science.</p>
            <p>Hailing from a Bengali background, I have been born and brought up in North India, which has given me a multicultural perspective and a rich blend of experiences. Outside of my academic pursuits, I have diverse hobbies that help me unwind and explore my interests. Cooking is one of my favorite pastimes, as it allows me to experiment with flavors and create delicious dishes. I also have a deep appreciation for Bengali music, which I enjoy listening to in my free time. Additionally, I find solace in plantation and being close to nature, as it brings me a sense of peace and tranquility.</p>
            <p>Overall, I am a driven and curious individual with a strong academic track record and a keen interest in leveraging technology for healthcare advancements. I am excited to continue my journey as a full-stack developer and contribute to the ever-evolving field of IT in healthcare, making a positive impact on people's lives.</p>
            </div>
          </div>
          <div id="skills" className="skills">
            <h2>SKILLS</h2>
            <div className="container">
                <div className="lang">
                    <h4>Programming languages</h4><br/>
                    <div className="row">
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL+'/icons/java.png'} alt="language" style={{borderRadius: "100%", width: "50px"}}/>   
                        <h6>Java</h6>
                    </div>
                    <div className="col-3">
                    <img src={process.env.PUBLIC_URL+'/icons/js.png'} alt="language" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Javascript</h6>
                    </div>
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL+'/icons/go.png'} alt="language" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Golang</h6>
                    </div>
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL+'/icons/py.png'} alt="language" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Python</h6>
                    </div>
                    </div>
                </div>
                <div className="frontend">
                    <h4>Styling and Designing Tools</h4><br/>
                    <div className="row">
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/html.png'} alt="language" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>HTML5</h6>
                    </div>
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/css.png'} alt="frontend" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>CSS3</h6>
                    </div>
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/bt.png'} alt="frontend" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Bootstrap</h6>
                    </div>
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/snapseed.png'} alt="frontend" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Snapseed</h6>
                    </div>
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/tailwind.png'} alt="frontend" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Tailwind</h6>
                    </div>
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/canva.png'} alt="frontend" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Canva</h6>
                    </div>
                    </div>
                </div>
                <div className="webdev">
                    <h4>Web Development</h4><br/>
                    <div className="row">
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL+'/icons/node.png'} alt="webdev" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>NodeJS</h6>
                    </div>
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL+'/icons/express.png'} alt="webdev" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>ExpressJS</h6>
                    </div>
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL+'/icons/next.png'} alt="webdev" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>NextJS</h6>
                    </div>
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL+'/icons/react.png'} alt="webdev" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>ReactJS</h6>
                    </div>
                    </div>
                </div>
                <div className="db">
                    <h4>Databases</h4>
                    <div className="row">
                    <div className="col-6">
                        <img src={process.env.PUBLIC_URL+'/icons/sql.png'} alt="db" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>MySQL</h6>
                    </div>
                    <div className="col-6">
                        <img src={process.env.PUBLIC_URL+'/icons/mongo.png'} alt="db" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>MongoDB</h6>
                    </div>
                    </div>
                </div>
                <div className="tools">
                    <h4>Tools and IDE</h4><br/>
                    <div className="row">
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/dck.png'} alt="tools"style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Docker</h6>
                    </div>
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/git.png'} alt="tools" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Git</h6>
                    </div>
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/vsc.png'} alt="tools" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>VS Code</h6>
                    </div>
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/subl.png'} alt="tools" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Sublime</h6>
                    </div>
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/ecp.png'} alt="tools" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Eclipse</h6>
                    </div>
                    <div className="col-2">
                        <img src={process.env.PUBLIC_URL+'/icons/postman.png'} alt="tools" style={{borderRadius: "100%", width: "50px"}}/>
                        <h6>Postman</h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div id='pjs' className="projects">
                <h2>PROJECTS</h2>
                <div className='container'>
                <div className='pj'>
                    <h4>MedPharma</h4>
                    <p>Medical Pharmacy is an ecommerce platform built using Golang.</p>
                    <button className='btn'><a href='https://github.com/SagarDuttaSays/MedPharma'>Link</a></button>
                </div>
                <br></br>
                <div className='pj'>
                    <h4>Diabetes Prediction Model</h4>
                    <p>This is an ML model which uses 6 different algorithms and 4 different evaluation methods to predict whether or not the user is having diabetes.</p>
                    <button className='btn'><a href='https://github.com/SagarDuttaSays/Diabetes-Prediction-Model'>Link</a></button>
                </div>
                <br></br>
                <div className='pj'>
                    <h4>Weather Forecast App</h4>
                    <p>Weather Forecast App is a web application designed to provide users with real-time weather information of a requested city. The application is created using HTML5, CSS3, Bootstrap, and JavaScript in the frontend, and ExpressJS and EJS at the backend. The application fetches data from the OpenWeather API to provide users with the current weather and future weather forecast of the requested city.</p>
                    <button className='btn'><a href='https://github.com/SagarDuttaSays/Weather-Forecast-App'>Link</a></button>
                </div>
                <br></br>
                <div className='pj'>
                    <h4>To-do List App</h4>
                    <p>This is a To-Do List Web Application developed using HTML5, CSS3, Bootstrap, and JavaScript for the front-end, Node.js and Express.js for the back-end, and MongoDB as the database.</p>
                    <button className='btn'><a href='https://github.com/SagarDuttaSays/To-Do-List'>Link</a></button>
                </div>
                </div>
            </div>
            <div className="gallery">
                <div className='container'>
                {/* <Carousel>
                    <img src={process.env.PUBLIC_URL+'/photobook/col1.jpg'} style={{width:"200px", height:"100px"}} />
                    <img src={process.env.PUBLIC_URL+'/photobook/col2.jpg'} />
                    <img src={process.env.PUBLIC_URL+'/photobook/col3.jpg'} />
                    <img src={process.env.PUBLIC_URL+'/photobook/col4.jpg'} />
                    <img src={process.env.PUBLIC_URL+'/photobook/col5.jpg'} />
                </Carousel> */}
                </div>
            </div>
            <div id='contact' className="footer">
                <div className=" container">
                <p>&copy; Sagar Dutta 2023</p>
                <div className="contact">
                    <h6><a href='https://goo.gl/maps/GJMbWF8r69Mcvcjc8'><img src={process.env.PUBLIC_URL+'/icons/add.png'} alt="webdev" style={{borderRadius: "100%", width: "50px"}}/></a>  <a href="tel:893-490-2760"><img src={process.env.PUBLIC_URL+'/icons/call.png'} alt="webdev" style={{borderRadius: "100%", width: "50px"}}/></a>  <a href="mailto:duttasagar086@gmail.com"><img src={process.env.PUBLIC_URL+'/icons/mail.png'} alt="webdev" style={{borderRadius: "100%", width: "50px"}}/></a></h6><br></br>
                </div>
                </div>
            </div>
          </div>
    )
}

export default Header;