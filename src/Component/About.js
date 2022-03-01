import React from 'react'
import Brand from './Brand'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Pdf from '../Jasleen-Resume.pdf'

const About = () => {
  return (
    <>
      <Brand />
      <Navbar />
      <br />

      <div className='container'>
        <div className='row'>
          <div className='box'>
            <div className='col-lg-12'>
              <hr className='heading-markup' />
              <h2 className='intro-text text-center'>
                About
                <strong>Me</strong>
              </h2>
              <hr className='heading-markup' />
              <br />
            </div>
            {/* <!-- <div className="col-md-6">
                    <img className="img-responsive img-border-left" src="img/slide-2.jpg" alt=""/>
                </div> --> */}
            <div>
              <p>
                • 3+ years of experience designing dynamic and beautiful
                cross-browser complaint web applications, landing pages, user
                interfaces and corporate websites 
                <br />
                • Well-versed with all stages of Software Development Life Cycle
                (SDLC) and Software Testing Life Cycle (STLC) for dynamic web
                projects 
                <br />
                • Diligent, innovative, mechanically inclined and inquisitive to
                learn new technologies
                <br />
                • Exceptional skilled planner with time management and accountability skills acquired by working
                with teams, which consistently met project deadlines
                <br />• Highly skilled in identifying problem areas, recognizing the
                impact on the business and users, and prioritizing the
                implementation of appropriate solutions
              </p>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>

        <div className='row'>
          <div className='box'>
            <div className='col-lg-12'>
              <hr className='heading-markup' />
              <h2 className='intro-text text-center'>
                My
                <strong>Skills</strong>
              </h2>
              <hr className='heading-markup' />
              <br />
            </div>
            <div className='row'>
              <div className='col-sm-4'>
                <h3>
                  Front-End Stack
                  <small></small>
                </h3>
                <p>

                  HTML5 
                  <br /> CSS3
                  <br /> Bootstrap
                  <br /> SCSS
                  <br /> JavaScript
                  <br /> React JS

                </p>
              </div>

              <div className='col-sm-4'>
                <h3>
                Back-End Stack 
                <small></small>
                </h3>
                <p>
            
                  Node JS
                  <br /> Express JS
                  <br /> MongoDB
                  <br /> Mongoose
                  <br /> Postman
                  
                </p>
              </div>

              <div className='col-sm-4'>
                <h3>
                Tools
                <small></small>
                </h3>
                <p>
                  MS Visual Studio
                  <br /> Sublime Text
                  <br /> Git, Github
                  <br /> Heroku
                  <br /> Firebase
                </p>
              </div>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>

        <div className='row'>
          <div className='box'>
            <div className='col-lg-12 text-center'>
              <hr className='heading-markup' />
              <h2 className='intro-text text-center'>
                <strong>Work Experience</strong>
              </h2>
              <hr className='heading-markup' />
              <br />
            </div>

            <div>
              <h4>Full Stack Web Developer</h4>
              <h5>Venus Mind Media, Windsor, ON </h5>
              <p>
                • Create and maintain websites for small businesses such as
                restaurants, educational institutions, gyms etc.
                <br />
                • Produce dynamic user-interfaces through comprehensive research and prototype development
                <br />
                • Manage and execute multiple projects concurrently to meet tight deadlines <br />
                • Administer full lifecycle of software development for various projects with on-time delivery while staying 7%
under budget
                <br />
                • Implement processes for cleanup and performance improvement that minimized downtime for the customer’s website by 13%
                <br />
                • Use search engine optimization (SEO) best practices to optimize the website for organic search
                <br />
              </p>
              <h4>Teaching and Learning Project Assistant </h4>
              <h5>University of Windsor, Windsor, ON</h5>
              <p>
                • Assisted the Learning Management System Team in testing several upgrades of Blackboard following a
team testing procedure
                <br />
                • Provided support in developing a Curriculum Mapping tool to help cross-check data for learning outcomes of
each course taught in the University
                <br />
                • Acquired hands on experience in HTML5/CSS3 , JavaScript and responsive design development
                <br />
                • Utilized several types of CMS systems , including Drupal
                <br />
              </p>
              <br />
            
              <div className='text-center'>
                <Button
                  href={Pdf}
                  target='_blank'
                  rel='noreferrer'
                  variant='outline-secondary'
                  size='lg'
                >
                  My Resume
                </Button>
              </div>
              <hr className='heading-markup' />
              <br />
            </div>
            <div className='clearfix'></div>
          </div>
        </div>

        <div className='row'>
          <div className='box'>
            <div className='col-lg-12'>
              <hr className='heading-markup' />
              <h2 className='intro-text text-center'>
                <strong>Education</strong>
              </h2>
              <hr className='heading-markup' />
              <br />
            </div>
            <div>
              <h4>Master of Engineering (Co-op) </h4>
              <h5>University of Windsor </h5>
            </div>
            <br />
            <div>
              <h4>Become a Full-Stack Web Developer </h4>
              <h5>LinkedIn Learning</h5>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
