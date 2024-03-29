import React, { Component } from 'react'

export default class Result extends Component {
    constructor(){
        super()
    }
    
  render() {
    const {formData} = this.props;
    return (
      <div>
        <p>{formData.firstName}</p>
      </div>
    )
  }
}
