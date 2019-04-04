import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux'
import { addPassword } from '../actions'
import zxcvbn from 'zxcvbn'
import Strength from './password-strength'



class Password extends Component {
    constructor(props){
        super(props)
        this.state = { 
            password: '',
            label: ''
        };
    }

    generatePassword = () => {
        
        this.setState({ password: Math.random().toString(36).substring(2) })
    }
    


    render(){
        return( 
            <div style={{width:'50%'}}>
                <div className='wrapper'>
                    <label style={{textAlign: 'left', marginBottom:'10px', marginTop:'10px'}}>Password</label>
                    <input
                        onChange={(e) => {this.setState({ password: e.target.value })}}
                        value={this.state.password}
                    />
                    <button onClick={(e) => {
                    this.generatePassword()
                }}>Generate Password</button>
                <div style={{display:'flex', flexDirection:'row'}}>
                <h3>Password Strength: <Strength password={zxcvbn(this.state.password)} /></h3>
                </div>
                </div>
                <div className='wrapper'> 
                    <label style={{textAlign: 'left', marginBottom:'10px', marginTop:'10px'}}>Website</label>
                    <input 
                        onChange={(e) => {this.setState({ label: e.target.value})}}
                        value={this.state.label}
                    />
                    <button onClick={(e) => {
                        this.props.addPassword(this.state.label, this.state.password)
                    }}>Save to List</button>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
  
    }
  }
  
  const mapDispatchToProps = () => {
    return {
      addPassword
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps())(Password)
