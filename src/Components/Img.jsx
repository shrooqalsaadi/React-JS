import React, { Component } from 'react'

export class Img extends Component {
  render() {
    return (
        <>
         <div className="person">
        <img src= {this.props.img} />
        <div className="person-social">Hi My Name is Joly</div>
        <div className="person-info">This is My Profile</div>
        </div>
       

        </>
    )
  }
}

export default Img