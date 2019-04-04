import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'

class PasswordList extends Component {

  getList() {
    return this.props.passwords.map((pass, index) => {
      return (
        <div className='card' key={index}>
          <b>name:</b> {pass.label} 
          <br />
          <div className="password-container">
          <b>password:</b> 
          <div style={{display: 'inline'}} className='password'>{pass.password}</div>
          </div>
          
        </div>)
    })
  }

  render() {
    return (
      <div style={{width:'27.5%'}}>
        {this.getList()}
        <p><b>Hover to reveal password</b></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    passwords: state.passwords
  }
}

export default connect(mapStateToProps)(PasswordList)
