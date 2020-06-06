import React, { useState, useContext } from 'react';
import { useGet } from "../Hook/API.js"
import "./Table.css"
import Button from "./Button.js"
import { EmployeeContext } from './EmployeeContext.js';

function Table() {
  
    const [url] = useState("https://randomuser.me/api/?results=30&nat=us")
    // custom hook 
    const { sortBy } = useGet(url);
    //table
    const { displayedEmployees} = useContext(EmployeeContext)
    return (
        <table id="employee">
            <thead>
                <tr>
                    <td onClick={() => sortBy("name")}><Button>First Name</Button></td>
                    <td onClick={() => sortBy("lastName")}><Button>Last Name</Button></td>
                    <td onClick={() => sortBy("username")}><Button>User Name</Button></td>
                    <td onClick={() => sortBy("gender")}><Button>Gender</Button></td>
                    <td onClick={() => sortBy("email")}><Button>Email</Button></td>
                    <td onClick={() => sortBy("age")}><Button>Date of Birth</Button></td>
                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.login.username}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.date}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;