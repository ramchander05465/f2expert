import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actionType from '../../actions'

import Banner from '../../components/banner/banner'
import Testimonial from '../../components/testimonials/testimonial'
import Traininig from '../../components/trainings/training'

import Map from '../../images/home__Map.jpg'
import Team from '../../images/team.png'
import contactMap from '../../images/home__contactMap.jpg'

class Home extends Component{
  componentWillMount = () => {
    this.props.addInfo('Rama')
  }

  trainingInfo = [
    {
      icon:'html5__icon.jpg',
      training:'HTML5',
      decs:'Learn all the tools and standards that you need to start delivering latest &amp; innovative web experiences...'    
    },
    {
      icon:'javaScriptIcon.jpg',
      training:'Java Script',
      decs:'Java script  is a client-side programming language for web applications...'    
    },
    {
      icon:'angularJS.jpg',
      training:'Angular',
      decs:'AngularJS is an open-source web application monitored by Google and the Angular community...'    
    },
    {
      icon:'cssIcon.jpg',
      training:'CSS',
      decs:'CSS is a language used to separate the content of a page from the style specifications...'    
    },
    {
      icon:'nodejsIcon.jpg',
      training:'NodeJS',
      decs:'Node.JS use to build scalable network application using Javascript on the server-side...'    
    },
    {
      icon:'gruntIcon.jpg',
      training:'Grunt',
      decs:'Automate repetitive development and management tasks using Grunt, including minification, compilation...'    
    },
    {
      icon:'jqueryIcon.jpg',
      training:'JQuery',
      decs:'Automate repetitive development and management tasks using Grunt, including minification, compilation...'    
    },
    {
      icon:'backboneIcon.jpg',
      training:'Backbone',
      decs:'Automate repetitive development and management tasks using Grunt, including minification, compilation...'    
    }
  ]

  testimonialInfo = [
    {
      userName:'User Name',
      userPic:'userPic.png',
      designation:'Designation',
      desc:'Etiam feugiat sed risus id auctor. Donec sed posuere leo. Vivamus maximus sollicitudin massa at convallis.Etiam feugiat sed risus id auctor. Donec sed posuere leo.'
    }
  ]
  
  render(){
    return(
      <div>
        <Banner />  
        <section className="pd__TB35">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>About  F2E</h1>
              <p>F2Expert  specializes in technology training with the goal of "Training for Jobs" F2Expert is 
                built on the ideology of ensuring jobs to IT beginners and advancing the careers of 
                currently employed professionals by equipping them with the necessary skills required 
                by today's ever changing and challenging IT job market.
                At F2Expert, we don't just provide quality Training. We impart industry experience and 
                real world knowledge to students enabling them to find the right jobs instantly. </p>
            </div>
            <div className="col-md-6"> <img src={Map} width="100%" /> </div>
          </div>
        </div>
      </section>
      <section className="greyStrip">
        <div className="container">
          <div className="row">
            <div className="col-md-6"><img src={Team} width="100%" /></div>
            <div className="col-md-6">
              <h1>Team</h1>
              <p>Our trainers are professionals with many years of commercial IT experience. 
                We have well qualified trainers with over 10 years of work experience holding 
                many technical certifications and awards recognition.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pd__TB35">
        <div className="container">
          <h1 className="text-center">Training</h1>
          <p className="text-center">F2Expert's Introduction to MEAN Stack Development training teaches participants how to create full stack web applications with MongoDB, Express, Angular.js, and Node.js. Attendees build an application using these technologies.</p>
          <Traininig info = {this.trainingInfo} />
        </div>
      </section>
      <section className="greyStrip pd__TB35">
        <div className="container">
          <h1 >What our student says</h1>
          <p >Our trainers are professionals with many years of commercial IT experience. We have well qualified trainers with over 10 years of work experience holding many technical certifications and awards recognition.</p>
          <ul className="testimonialListing">
            <Testimonial listInfo={this.testimonialInfo} /> 
          </ul>
        </div>
    </section>
      
      <section className="pd__TB35">
      <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <img src={contactMap} width="100%" />
              </div>
              <div className="col-sm-6">
                <h1>Contact US</h1>
                  <p>Our trainers are professionals with many years of commercial IT experience. 
      We have well qualified trainers with over 10 years of work experience holding 
      many technical certifications and awards recognition.</p>
              </div>
          </div>
      </div>
      </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    homeInfo:state.home.info
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addInfo:(info) => dispatch(actionType.getNavInfo(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)