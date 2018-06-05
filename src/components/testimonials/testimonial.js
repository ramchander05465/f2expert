import React from 'react'

const Testimonial = (props) => {
  const renderTestimonialList = () => {
    return props.listInfo.map((item, index) => {
      return(
        <li className="col-md-4" key={index}>
          <div className="testimonials__content"> 
          <div className="arrowDown">{item.desc} </div>
          </div>
          <div className="testimonials__userDetail">
            <img  src={require(`../../images/${item.userPic}`)} alt='F2expert' />
              <h1 >{item.userName}</h1>
              <p >{item.designation}</p>          
          </div>
        </li>
      )
    })
  }
  return(
   <ul className="testimonialListing">
      {renderTestimonialList()}      
    </ul>
  )
}

export default Testimonial