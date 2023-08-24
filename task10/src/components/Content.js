import React from 'react'

import { Link } from 'react-scroll'
import { Row, Col } from 'react-bootstrap'

const TouristPlaces = () => {  
  return (
    <div className='container mt-5'>
        <h3 className='text-center places-text'>
            Tourist Places To Tamil Nadu 
            <br />
            Here Are The Top Places To Visit In Tamil Nadu In 2023
        </h3>
               
                
           
        <ul className='container mt-5 text-primary'>
            <Row>
                <Col className="text-center">
                    <li>
                        <Link to='chennai' smooth='true' offset='100' duration='500'>Chennai</Link> 
                             
                    </li>
                </Col>
                <Col className="text-center">
                    <li>
                        <Link to='kodaikanal' smooth='true' offset='100' duration='500'>Kodaikanal</Link> 
                            
                    </li>
                </Col>
                <Col className="text-center">
                    <li>
                        <Link to='madurai' smooth='true' offset='100' duration='500'>Madurai</Link> 
                           
                    </li>
                </Col>
               <Col className="text-center">
                    <li>
                        <Link to='kumbakonam' smooth='true' offset='100' duration='500'>Kumbakonam</Link> 
                             
                    </li>
                </Col>
                <Col className="text-center">   
                    <li>
                         <Link to='theni' smooth='true' offset='100' duration='500'>Theni</Link> 
                            
                    </li>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <li>
                        <Link to='rameswaram' smooth='true' offset='100' duration='500'>Rameswaram</Link>
                          
                    </li>
                </Col>
                <Col className="text-center">
                    <li>
                        <Link to='ooty' smooth='true' offset='100' duration='500'>Ooty</Link> 
                           
                    </li>
                </Col>
                <Col className="text-center">
                    <li>
                        <Link to='kanyakumari' smooth='true' offset='100' duration='500'>Kanyakumari</Link> 
                           
                    </li>
                </Col>
                <Col className="text-center">
                    <li>
                        <Link to='yarcaud' smooth='true' offset='100' duration='500'>Yarcaud</Link> 
                    
                    </li>
                </Col>
                <Col className="text-center">
                    <li>
                        <Link to='hogenkkal' smooth='true' offset='100' duration='500'>Hogenakkal</Link> 
                           
                    </li>
                </Col>
            </Row>
        </ul>
           
    </div>
   
  )
 }

export default TouristPlaces