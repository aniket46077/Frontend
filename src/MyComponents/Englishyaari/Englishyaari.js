import React from 'react'
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import EY1 from "./EY1.png";

const Englishyaari = () => {
  return (
    <div>
<div className="co1">
    <div className="cl1">
        <ul>
            <li><h4>EnglishYaari</h4></li>
            <li><p>EnglishYaari is India's Most Affordable English Learning Platform.EnglishYaari offers English conversation practice sessions over 1-on-1 Video Calls with excellent English Speakers across the globe 24/7.</p></li>
        </ul>
    </div>
    <div className="cl2">
    <img src={EY1} width="480" height="400"/>
    </div>
</div>
<div className='ap1'>
      <Card style={{ width: '18rem',backgroundColor:'#beefe1' }}>
      
      <Card.Body>
        <Card.Title>Graphic Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Apply</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',backgroundColor:'#beefe1' }}>
      
      <Card.Body>
        <Card.Title>Web Devlopment</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Apply</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',backgroundColor:'#beefe1' }}>
      
      <Card.Body>
        <Card.Title>Content Writer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Apply</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',backgroundColor:'#beefe1' }}>
      
      <Card.Body>
        <Card.Title>Wordpress</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Apply</Button>
      </Card.Body>
    </Card>
    </div>
</div>
  )
}

export default Englishyaari
