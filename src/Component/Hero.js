import Navbar from '../Component/Navbar'
import Carousel from 'react-bootstrap/Carousel'
import Brand from './Brand'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <Brand />
      <Navbar />
      <br />
      <div className='container'>
        <div className='row'>
          <div className='box'>
            <div className='col-lg-12 text-center'>
              <h2 className='brand-before'>
                {/* <small>I enjoy creating products that tell a story, delight users and build brand awareness </small>  */}
              </h2>

              <h1 className='brand-name'>
                I enjoy creating products that tell a story, delight users and
                build brand awareness.
              </h1>
              <hr className='tagline-divider' />
              <h2>
                <small>
                  <strong>
                    <Link to='/work' className='text-link'>
                      Below are some of my project samples : 
                    </Link>
                  </strong>
                </small>
              </h2>
              {/* Carousel */}
              <Carousel>
                <Carousel.Item interval={2000}>
                  <img
                    className='d-block w-100'
                    src='img/amazon.png'
                    alt='First slide'
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className='d-block w-100'
                    src='img/jazpay.png'
                    alt='Second slide'
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className='d-block w-100'
                    src='img/jazweather.png'
                    alt='Third slide'
                  />

                  {/* <Carousel.Caption></Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='box'>
            <div className='col-lg-12'>
              <hr className='heading-markup' />
              <h2 className='intro-text text-center'>
                <strong>Design Is Thinking Made Visual</strong>
              </h2>
              <hr className='heading-markup' />

              <p>
                I've developed expertise in all phases of the design process and I
                love collaborating with brilliant people across various disciplines to
                create unique, immersive, visual and shareable interactive
                experiences for mobile, desktop and tablet. Additionally, I love to collaborate with
                clients and peers to nurture and transform ideas into well-thought design as per the customer's specifications. After all, that's where the
                majority of amazing user experiences begin! What's more, I'm a minimalist who
                truly believes that less is more.
                <br />
                <br />
                I have spent the last three years working as a Full Stack Web Developer
                in Venus Mind Media, where I acquired project and time management
                skills. I am now adept at communicating with team members
                and clients whilst effectively meeting tight deadlines.
                Moreover, I have worked on a multitude of web based
                projects for a range of clients providing Web Development, E-Commerce
                and Corporate Branding services . My eye for
                detail, creative view on the world, and meticulous nature have
                left me with many highly satisfied customers and team members.
                <br />
                <br />
                To add on, my work is always fully responsive and tested in a wide range of
                devices. I take great care to ensure each project is
                well-documented and easily scalable. 
                Moreover, I have also been appreciated for great design, knowledge of
                integrating and developing server-side, and
                efficiently working with clients and
                colleagues successfully by my past Supervisor. 
                <br />
                <br />
                Kindly, have a look at some of my sample portfolio {' '}
                <Link to='/work' className='text-link'>
                  projects
                </Link>
                {' '} that I have created. Also, you will be amazed to learn a bit more{' '}
                <Link to='/about' className='text-link'>
                  about me
                </Link>
                . Please feel free to{' '}
                <Link to='/contact' className='text-link'>
                  contact
                </Link>{' '}
                me for any further questions you might have. I look forward to speaking with you
                soon.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /.container  */}
    </>
  )
}

export default Hero
