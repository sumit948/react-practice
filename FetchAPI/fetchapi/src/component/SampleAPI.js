import React from 'react'


class SampleAPI extends React.Component{
    constructor(){
        super();
        this.state= {
            users:null
        }
    }
    componentDidMount(){
        fetch('https://reqres.in/api/users?page=2').then((resp)=>{
            resp.json().then((result)=>{
                //console.warn(result)
                this.setState({users:result.data})
            })
        })
    }
    render(){
        return(<>
                <div>Api Working...</div>
                <div className='apicheck'>
                    {
                        this.state.users ?
                            this.state.users.map((items,i)=>
                            <div className="container mt-3">
                                <table className="table table-striped">
                                    {/* <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                    </tr>
                                    </thead> */}
                                    <tbody>
                                    <tr>
                                        <td>{items.id}</td>
                                        <td>{items.first_name}</td>
                                        <td>{items.last_name}</td>
                                        <td>{items.email}</td>
                                    </tr>
                                    </tbody> 
                                </table>
                                <p>
                                   {/* {i} indexing */}
                                    
                                </p>
                            </div>)
                        : null
                    }
                </div>
        </>
            
        )
    }
}
export default SampleAPI