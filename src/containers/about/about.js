import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <section className="pd__TB35">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h1  >About  F2E</h1>
        <p  >F2Expert  specializes in technology training with the goal of "Training for Jobs" F2Expert is 
          built on the ideology of ensuring jobs to IT beginners and advancing the careers of 
          currently employed professionals by equipping them with the necessary skills required 
          by today's ever changing and challenging IT job market.
          At F2Expert, we don't just provide quality Training. We impart industry experience and 
          real world knowledge to students enabling them to find the right jobs instantly. </p>
      </div>
      <div className="col-md-6"> <img src={require('../../images/home__Map.jpg')} width="100%" alt='Map' /> </div>
    </div>
    <div className="row">
        <div className="col-md-6"><img src={require('../../images/f2expert-mission.jpg')} alt='F2expert Mission' /></div>
        <div className="col-md-6">
          <h1  >Our Mission</h1>
          <p  >We enhance student knowledge and skills with high-quality, 
accessible training and professional development opportunities to support F2Expert’s 
vision of becoming the best web development training center.</p>
          <p  >We are dedicated to supporting the students and being a 
            strategic trainer to help  meet their objectives.  
            As a result of these partnerships, our professional development opportunities 
            create a F2Expert workplace that is efficient, effective, and a good steward of resources.
          </p>
        </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h1  >Our Vision</h1>
        The F2Expert’s guiding vision is to be known as the leading education and training provider in the India. 
        The F2Expert’s collective aim is to be recognised as the best training provider in India.
        The Institute pledges to ensure that the following core commitments underpin what we do:
        
        <ul  >
          <li>Providing quality lifelong learning experiences for individuals, industry and community 
            through innovative and customised vocational training</li>
          <li>Encouraging all people to value education, learning and employment</li>
          <li>Focusing our efforts on encouraging all students to identify and achieve their aspirations</li>
        </ul>

        </div>
      <div className="col-md-6"><img src={require('../../images/f2expert-vision.jpg')} alt='F2expert Vision' /></div>
    </div>
  </div>
</section>
    )
  }
}
