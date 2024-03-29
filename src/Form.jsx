import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:"",
            phoneNumber:"",
            email:"",
            topic:"",
            dob:""
        }
    }
   
    handleFirstnameChange = (event)=>{
        this.setState({
            firstName : event.target.value
        })
    }
    handleLastnameChange = (event)=>{
        this.setState({
            lastName : event.target.value
        })
    }
    handlePhonenumberChange = (event)=>{
        this.setState({
            phoneNumber : event.target.value
        })
    }
    handleEmailChange = (event)=>{
        this.setState({
            email : event.target.value
        })
    }
    handleTopicChange =(event)=>{
        this.setState({
            topic:event.target.value        })
    }
    handleDobChange =(event)=>{
        this.setState({
            dob: event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.validateForm();
       alert(`${this.state.firstName} ${this.state.lastName} ${this.state.phoneNumber} ${this.state.email} ${this.state.dob} ${this.state.topic}`)
    //    if(this.validateForm()){
        // this.props.onSubmit(this.state);
    // }
    }
    validateForm=()=>{
        if(this.firstName!== ""){
            alert("enter")
        }
    }
  render() {
    return (
      <div>
        <form action=""  onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="">First Name :</label>
                <input type="text" name='firstname' placeholder='Enter your first name' value={this.state.firstName} onChange={this.handleFirstnameChange} />
            </div>
            <div>
                <label htmlFor="">Last Name :</label>
                <input type="text" name='lastname' placeholder='Enter your last name' value={this.state.lastName} onChange={this.handleLastnameChange}  />
            </div>
            <div>
                <label htmlFor="">Phone Number :</label>
                <input type="number" name='phonenumber' placeholder='Enter your number' value={this.state.phonenumber} onChange={this.handlePhonenumberChange}/>
            </div>
            <div>
                <label htmlFor="">Email :</label>
                <input type="email" name='email' placeholder='Enter your mail' value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div>
                <label htmlFor="">DOB :</label>
                <input type="date" name='dob' placeholder='Enter your dob' value={this.state.dob} onChange={this.handleDobChange} />
            </div>
            <div>
                <label htmlFor="">Topic :</label>
               <select name="" id="" value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
               </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
