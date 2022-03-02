import React from 'react'

class Profile extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log("called life")
    }
    render(){
        return(
            <div>
                <h2>Profile Component</h2>
                <h4>{this.props.text3}</h4>
                <h4>{this.props.text4}</h4>
            </div>
        )
    }
}

export default Profile;