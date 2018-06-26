import React, { Component } from 'react'
import teampic from '../../images/f2expert-team.png'
class Team extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
      <div className="col-md-8">
        <h1>Team!</h1>
        <p>
          Our trainers are professionals with many years of commercial IT experience.
          We have well qualified trainers with over 10 years of work experience holding many 
          technical certifications and awards recognition.
        </p>  
          <p>
            The quality and also usefulness connected with any kind of exercise program depends upon
             the actual web development Trainers.  F2Expert's trainers are professionals, that are 
             experienced and have real-world connection with the approval advancement. The actual
              interactive session carried out throughout the Course assists student for you to clear 
              the style and also find out more rapidly.
            </p>  
            <p>
              Having rich practical knowledge with technologies asking, providing alternatives
               for sophisticated and also varied difficulties for you to business, all our own software
                trainers are knowledgeable and also conversant regarding the newest scientific progress
                 within their field of expertise, that eventually enables them to share technologies beyond 
                 study course articles and also guide the actual students with entire understanding of purposes.
            </p> 
      </div>
      <div class="col-md-4"><img src={teampic} /></div>
      </div>
      </div>
    )
  }
}

export default Team