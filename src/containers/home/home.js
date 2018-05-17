import React, {Component} from 'react' 

import Banner from '../../components/banner/banner'
import Testimonial from '../../components/testimonials/testimonial'

import Map from '../../images/home__Map.jpg'
import Team from '../../images/team.png'
import html5Icon from '../../images/html5__icon.jpg'
import javaScriptIcon from '../../images/javaScriptIcon.jpg'
import angularJS from '../../images/angularJS.jpg'
import cssIcon from '../../images/cssIcon.jpg'
import nodejsIcon from '../../images/nodejsIcon.jpg'
import gruntIcon from '../../images/gruntIcon.jpg'
import jqueryIcon from '../../images/jqueryIcon.jpg'
import backboneIcon from '../../images/backboneIcon.jpg'

class Home extends Component{
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
          <div className="row">
            <div className="col-md-3 trainingWrapper">
              <section className="text-center"> <i ><img  src={html5Icon} /></i>
                <h2 >HTML5</h2>
                <p >Learn all the tools and standards that you need to start delivering latest &amp; innovative web experiences...</p>
                <a  href="#">Read More</a> </section>
            </div>
            <div className="col-md-3 trainingWrapper">
              <section className="text-center"> <i ><img  src={javaScriptIcon} /></i>
                <h2 >Javascript</h2>
                <p >Java script  is a client-side programming language for web applications...</p>
                <a  href="#">Read More</a> </section>
            </div>
            <div className="col-md-3 trainingWrapper">
              <section className="text-center "> <i ><img  src={angularJS} /></i>
                <h2 >Angular</h2>
                <p >AngularJS is an open-source web application monitored by Google and the Angular community...</p>
                <a  href="#">Read More</a> </section>
            </div>
            <div className="col-md-3 trainingWrapper">
              <section className="text-center "> <i ><img  src={cssIcon} /></i>
                <h2 >CSS</h2>
                <p >CSS is a language used to separate the content of a page from the style specifications...</p>
                <a  href="#">Read More</a> </section>
            </div>
            <div className="col-md-3 trainingWrapper">
              <section className="text-center"> <i ><img  src={nodejsIcon} /></i>
                <h2 >Node</h2>
                <p >Node.JS use to build scalable network application using Javascript on the server-side...</p>
                <a  href="#">Read More</a> </section>
            </div>
            <div className="col-md-3 trainingWrapper">
              <section className="text-center"> <i ><img  src={gruntIcon} /></i>
                <h2 >Grunt</h2>
                <p >Automate repetitive development and management tasks using Grunt, including minification, compilation...</p>
                <a  href="#">Read More</a> </section>
            </div>
            <div className="col-md-3 trainingWrapper">
              <section className="text-center"> <i ><img  src={jqueryIcon} /></i>
                <h2 >Jquery</h2>
                <p >Learn all the tools and standards that you need to start delivering latest &amp; innovative web experiences...</p>
                <a  href="#">Read More</a> </section>
            </div>
            <div className="col-md-3 trainingWrapper">
              <section className="text-center"> <i ><img  src={backboneIcon} /></i>
                <h2 >Backbone</h2>
                <p >Learn all the tools and standards that you need to start delivering latest &amp; innovative web experiences...</p>
                <a  href="#">Read More</a> </section>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      </div>
    )
  }
}

export default Home