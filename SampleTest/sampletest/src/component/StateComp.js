import React from 'react'

export default class StateComp extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'Bill May',
            count:0
        }
    }
    updateState(){
        this.setState({
            name: 'Bill Mary',
            count: this.state.count+1
        })
    }
    render(){
        return(
        <div>
            <h3>{this.state.count}</h3>
            <button onClick={()=>{this.updateState()}}>Count</button>
            <h3>{this.state.name}</h3>
        </div>
        )
    }
} 