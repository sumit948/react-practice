import React from 'react';

class ApiGet extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        users:null
    };
}
componentDidMount(){
    fetch('http://localhost:2000/get-all-emp').then((result)=>{
        result.json().then((result2)=>{
            this.setState({users:result2.data})
        })
    })
}
    render() {
        return <div>
            <h2>Employees Table</h2>
            <div className='apiCheck'>
                    {
                        this.state.users?
                        this.state.users.map((emp1,k)=>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>{emp1.employeeID}</td>
                                            <td>{emp1.employeeName}</td>
                                            <td>{emp1.employeeAdd}</td>
                                            <td>{emp1.employeeContact}</td>
                                            <td>{emp1.employeeDepartment}</td>
                                            <td>{emp1.onProject}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                        : null
                    }
            </div>
        </div>;
    }
}

export default ApiGet;