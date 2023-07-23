import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
   <>
   <div className='card col-md-3'>
    <div className='card-body'>
        <h3 className='card-title'>{this.props.title}</h3>
        <p className='card-text'>{this.props.desc}</p>
        <a href='#' className='btn btn-primary'>Go</a>


    </div>
   </div>
   
   
   
   
   </>
    )
  }
}

export default Card