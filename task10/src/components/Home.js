import React from 'react'
import { Col,Row} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel"


const Home = () => {
  return (
    <Row className="justify-content-center align-items-center " style={{ marginTop:"0px" ,width:"1355px" }}>
        <Col lg={10}>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className='d-block w-100'
                        src={require("../images/banner1.jpg")}            
                         alt=""
                         height="550vh"
                         fluid />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                         className='d-block w-100'
                         src={require("../images/pic1.jpeg")}
                         alt=""
                         height="550vh"
                         fluid />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                         className='d-block w-100'
                         src={require("../images/pic2.jpeg")}
                         alt=""
                         height="550vh"
                         fluid />
                </Carousel.Item><Carousel.Item interval={2000}>
                    <img
                         className='d-block w-100'
                         src={require("../images/pic3.jpeg")}
                         alt=""
                         height="550vh"
                         fluid />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                         className='d-block w-100'
                         src={require("../images/pic4.jpeg")}
                         alt=""
                         height="550vh"
                         fluid />
                </Carousel.Item>
                
                

            </Carousel>
        </Col>
    </Row>
  )
}

export default Home