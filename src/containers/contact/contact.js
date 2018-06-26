import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <section className="pd__TB35">
        <div className="container">
          <div className="row">
            <h1 className="col-md-12">Contact Us!</h1>
            <div className="col-md-5">
              <div className="form-area">
                <form role="form">
                  <div className="form-group">
                    <input className="form-control" id="name" name="name" placeholder="Name" required="" type="text" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" name="email" placeholder="Email" required="" type="text" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required="" type="text" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="message" maxlength="140" placeholder="Message" rows="5" type="textarea"></textarea>
                  </div>
                  <button className="btn btn-primary pull-right" id="submit" name="submit" type="button">Submit Form</button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <h5>Address</h5>
              D1/63, Gali No2 , Ashok Nager <br /> Shahdara,  Delhi - 110093
              <h5>Mobile</h5>
              9990062545
              <h5>Email</h5>
              info@f2expert.com
            </div>
          </div>
        </div>
      </section>
    )
  }
}
