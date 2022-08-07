import React from "react";
import Map from "../assets/map.jpg"
import "../components/css/home.css";
import web from "../images/home-slider1.png";
import web1 from "../images/home-slider2.png";
import web2 from "../images/home-banner-04.jpeg";
// import Carousel from "react-bootstrap/Carousel";
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from "react-grid-system";
import classroomsvg from "../assets/classroom.svg";
import facultysvg from "../assets/faculty.svg";
import examsvg from "../assets/exam.svg";
import helpdesksvg from "../assets/help-desk.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <>

        <div>
          <div className="container-flex">
          <Carousel autoPlay>
    <div>
      <img alt="" src={web} />
      
    </div>
    <div>
      <img alt="" src={web1} />
      
    </div>
    <div>
      <img alt="" src={web2} />
      
    </div>
    
  </Carousel>




            {/* <Carousel>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={web}
              />
              <Carousel.Caption>
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={web1}
              />
              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={web2}
              />
              <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
          </div> 



  

    
         
         <br />
          <Container style={{MozMarginStart:'5px', MozMarginEnd:'5px'}}>
          <Row>
            <a href="Classroom">
              <img
                src={classroomsvg}
                className="home-buttons"
                alt="imagem"
                title="Classroom"
              />
            </a>
            <br />
            <a href="Faculty">
              <img
                src={facultysvg}
                className="home-buttons"
                alt="imagem"
                title="Faculty"
              />
            </a>
            <a href="Exam">
              <img
                src={examsvg}
                className="home-buttons"
                alt="imagem"
                title="Exam"
              />
            </a>
            <a href="Helpdesk">
              <img
                src={helpdesksvg}
                className="home-buttons"
                alt="imagem"
                title="Help Desk"
              />
            </a>
          </Row>
        </Container>
        <br />
          
          {/* <h4 style={{marginInlineStart:'700px', marginInlineEnd:'700px'}}> VC Sir Photo</h4> */}

        <br />

        <Alert variant="secondary" style={{marginInlineEnd:"70px", marginInlineStart:'70px', borderRadius:'15px'}} >
      <Alert.Heading style={{fontSize:'22px', fontWeight:'800', fontFamily:'Inter', 
                  fontStyle:'normal', lineHeight:'20px', color:' #000000'}}>D Y Patil International University, </Alert.Heading>
      <p>
      D Y Patil International University, Akrudi, Pune is one of the finest private universities in India, 
      which is providing the highly-skilled talent to the nation and overseas. The university has recently 
      become operational as a state private university and offering the best quality higher education in the field... Read more 
      </p>
         
    </Alert>
    <br />

    {/* VC image Start */}



    {/* VC image End */}

    {/* drop bar Start */}
    <Accordion defaultActiveKey="1" style={{marginInlineEnd:"70px", marginInlineStart:'70px', borderRadius:'15px' }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header >Mission</Accordion.Header>
        <Accordion.Body>
        <li>Becoming a vibrant knowledge center and a center of excellence in research, teaching, and extension activities</li>
        <br />
        <li>Creating technologically equipped and action leaders of tomorrow in a wide range of spheres by providing the best-quality and value-based education</li>
        <br />
        <li>Educating students at undergraduate, postgraduate, doctoral, and post-doctoral levels to perform challenging roles in the industry</li>
        <br />
        <li>Providing excellent technological services to satisfy the future requirements of industry and overall academic needs of the society</li>
        <br />
        <li>Attracting international students to increase global connections and establishing collaborative programs with the reputed and international educational institutions</li>

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <br />
      <Accordion style={{marginInlineEnd:"70px", marginInlineStart:'70px', paddingBottom:'5rem', borderRadius:'15px'}}>
      <Accordion.Item eventKey="0" >
        <Accordion.Header style={{fontWeight:'bold'}}>Life of DYPIU</Accordion.Header>
        <Accordion.Body>
        <li>Becoming a vibrant knowledge center and a center of excellence in research, teaching, and extension activities</li>
        <br />
        <li>Creating technologically equipped and action leaders of tomorrow in a wide range of spheres by providing the best-quality and value-based education</li>
        <br />
        <li>Educating students at undergraduate, postgraduate, doctoral, and post-doctoral levels to perform challenging roles in the industry</li>
        <br />
        <li>Providing excellent technological services to satisfy the future requirements of industry and overall academic needs of the society</li>
        <br />
        <li>Attracting international students to increase global connections and establishing collaborative programs with the reputed and international educational institutions</li>

        </Accordion.Body>
      </Accordion.Item>


      </Accordion>
      <br />

      <div>
        <p style={{marginLeft:'4rem', fontSize:'25px', fontWeight:'600', fontFamily:'Inter', 
                  fontStyle:'normal', lineHeight:'20px', letterSpacing:'-0.28px'}}>
        D Y PATIL INTERNATONAL UNIVERSITY
        </p>
        <br />
        {/* <Container style={{maskImage:'100px'}}>
        <a href="https://www.google.com/maps/dir/18.648061,73.7595417/dypiu/
                 @18.6471867,73.758695,18z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!
                 1s0x3bc2b9f02f4b8f47:0x994b7c247d09fde!2m2!1d73.7592455!2d18.6459923"> 
                 <img src={Map} style={{width:"800px", padding: "0px" , position: "relative"}} alt='imagem' title='Map_Link' />
                 </a>
        </Container> */}
      </div>

      

    {/* drop bar End */}

    
 

    {/* blog */}

    

    {/* blog End */}
  
        


        {/* blog */}

        {/* blog End */}
      </div>
    </>
  );
};

export default Home;
