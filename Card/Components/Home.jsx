import React, { Component } from 'react'
import Card from './Card'

export class Home extends Component {
    constructor(){
        super()
        this.state={
            card:[
                {title:"shrooq",desc:"software Enginnering"},
                {title:"Arwa",desc:"software Enginnering"},
                {title:"Alaina",desc:"software Enginnering"},

            ]
        }
    }
  render() {
    return (
      <>
      <div className='container'>
        <div className='row'>
                 {this.state.card.map((card)=> <Card title={card.title} desc={card.desc}/>)}

        </div>
      </div>
      
      
      
      
      </>
    )
  }
}

export default Home