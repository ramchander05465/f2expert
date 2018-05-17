import React from 'react'

const Testimonial = () => {
  return(
    <section className="greyStrip pd__TB35">
  <div className="container">
    <h1 >What our student says</h1>
    <p >Our trainers are professionals with many years of commercial IT experience. We have well qualified trainers with over 10 years of work experience holding many technical certifications and awards recognition.</p>
    <ul className="testimonialListing">
      <li className="col-md-4">
        <div className="testimonials__content"> 
        <div className="arrowDown">Etiam feugiat sed risus id auctor. Donec sed posuere leo. Vivamus maximus sollicitudin massa at convallis.Etiam feugiat sed risus id auctor. Donec sed posuere leo. 
        </div>
        </div>
        <div className="testimonials__userDetail">
        	<img  src="assets/img/userPic.png" />
            <h1 >
            	User Name
            </h1>
            <p >
            	Designation
            </p>
        
        </div>
      </li>
       <li className="col-md-4">
        <div className="testimonials__content"> 
        <div className="arrowDown">
        Etiam feugiat sed risus id auctor. Donec sed posuere leo. Vivamus maximus sollicitudin massa at convallis.Etiam feugiat sed risus id auctor. Donec sed posuere leo.Etiam feugiat sed risus id auctor. Donec sed posuere leo. Vivamus maximus sollicitudin massa at convallis.Etiam. </div>
        </div>
        <div className="testimonials__userDetail">
        	<img  src="assets/img/userPic.png" />
            <h1 >
            	User Name
            </h1>
            <p >
            	Designation
            </p>
        
        </div>
      </li>
       <li className="col-md-4">
        <div className="testimonials__content"> 
        	<div className="arrowDown">
            	Etiam feugiat sed risus id auctor. Donec sed posuere leo. Vivamus maximus sollicitudin massa at convallis.Etiam feugiat sed risus id auctor. Donec sed posuere leo. </div>
                </div>
        <div className="testimonials__userDetail">
        	<img  src="assets/img/userPic.png" />
            <h1 >
            	User Name
            </h1>
            <p >
            	Designation
            </p>
        
        </div>
      </li>
    </ul>
  </div>
</section>
  )
}

export default Testimonial