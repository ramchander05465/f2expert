import React, { Component } from 'react'
import Traininig from '../../components/trainings/training'

export default class Training extends Component {
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
  render() {
    return (
      <div className="container">
          <div className="row">
      <div className="col-md-12">
        <h1>Training</h1>
        F2Expert's Introduction to MEAN Stack Development training teaches participants how to create full stack web applications with MongoDB, Express, Angular.js, and Node.js.
        Attendees build an application using these technologies.
        <Traininig info = {this.trainingInfo} />
      </div>
      </div>
      </div>
    )
  }
}
