import React from 'react';

export default class Forms extends React.Component{
    constructor(){
        super()
        this.state = {
            User:"",
            Pass:"",
            nameError:"",
            passError:"" 
        }
    }
    valid(){
        if(!this.state.User.includes("@")){
            this.setState({nameError:"Invalid Name"})
        }
    }
    submit(){
        if(this.valid()){
            alert("Form Submitted")
        }
    }
    render(){
        return(
            <div>
                <h1>Login Form</h1>
                UserName:
                <input type="text" name="user" onChange={(e)=>this.setState({User:e.target.value})}/>
                <br /><br />
                <p style={{color:"red",fontsize:"12px"}}>{this.state.nameError}</p>
                Password:
                <input type="password" name='password' onChange={(e)=>this.setState({Pass:e.target.value})}/>
                <br />
                <button onClick={()=>this.submit()}>Submit</button>
            </div>
        )
    }
}