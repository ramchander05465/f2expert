import React from 'react'

const Training = (props) => {
  const renderTainingItem = () => {
    return props.info.map((item, index) => {
      return (
        <div className="col-md-3 trainingWrapper" key={index}>
          <section className="text-center"> 
            <i ><img  src={require(`../../images/${item.icon}`)} /></i>
            <h2 >{item.training}</h2>
            <p >{item.decs}</p>
            <a  href="#">Read More</a> 
          </section>
        </div>
      )
    })
  }
  return (
    <div className="row">
      {renderTainingItem()}
    </div>  
  )
}

export default Training
