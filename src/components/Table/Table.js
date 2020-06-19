import React, { useState, useContext } from 'react';
import { useGet } from "../../Hooks/API.js"
import "./Table.css"
import Button from "../Button/Button.js"
import { EmployeeContext } from '../EmployeeContext.js';

function Table() {

    //30 random users from US
    const [url] = useState("https://randomuser.me/api/?results=30&nat=us")

    // custom hook 
    const { sortBy } = useGet(url);
    
    //table
    const { displayedEmployees} = useContext(EmployeeContext)

    return (
        <table id="employee">
            <thead>
                <tr >
                    <td class="headerSortDown" onClick={() => sortBy("name")}><Button>First Name</Button></td>
                    <td class="headerSortDown"onClick={() => sortBy("lastName")}><Button>Last Name</Button></td>
                    <td class="headerSortDown"onClick={() => sortBy("username")}><Button>User Name</Button></td>
                    <td class="headerSortDown"onClick={() => sortBy("gender")}><Button>Gender</Button></td>
                    <td class="headerSortDown"onClick={() => sortBy("email")}><Button>Email</Button></td>
                    <td class="headerSortDown"onClick={() => sortBy("age")}><Button>Date of Birth</Button></td>
                    <td ></td>

                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map(employee => {
                         const strDate = employee.dob.date;
                         const formatDate = strDate.substring(0,10);


                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.login.username}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{formatDate}</td>
                            <td><img src ={employee.picture.thumbnail} alt={employee.name.first+""+ employee.name.last} /></td>

                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;