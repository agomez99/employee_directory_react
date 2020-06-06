import {useEffect, useContext} from 'react';
import {EmployeeContext} from "../components/EmployeeContext"
import axios from "axios"

export function useGet(url){
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(EmployeeContext)

    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
                // using employees to store a copy of all the employees that will not be manipulated
                setEmployees(response.data.results)
                // using displayed employees to be a manipulated version of the employees that will be displayed for sorting and filtering.
                setDisplayedEmployees(response.data.results)
            }
            catch (error) {
                console.log("API error!!", error)
            }   
        }
        getEmployees()
    },[]
    )

    function sortBy(sort){
        switch(sort){
            case "name":
                sortByName()
                break
            case "lastName":
                sortByLastName()
                break
            case "email":
                email()
                break
            case "age":
                sortByAge()
                break
            case "gender":
                sortByGender()
                break
            default:
                console.log("no option for tht choice")
        }
    }

    //  first name.
    function sortByName(){
         employees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })
        setDisplayedEmployees([...employees])
    }
    // last name.
    function sortByLastName(){
         employees.sort(function(a,b){
            if(a.name.last < b.name.last){
                return -1;
            }else{
                return 1;
            }
        })
        setDisplayedEmployees([...employees])
    }
    function email(){
         employees.sort(function(a,b){
            if(a.email < b.email){
                return -1;
            }else{
                return 1;
            }
        })
        setDisplayedEmployees([...employees])
    }

    // age.
    function sortByAge(){        
        employees.sort(function(a,b){
            return (a.dob.age - b.dob.age)
        })
        setDisplayedEmployees([...employees])
    }
        //gender.
        function sortByGender(){
            employees.sort(function(a,b){
               if(a.gender < b.gender){
                   return -1;
               }else{
                   return 1;
               }
           })
             setDisplayedEmployees([...employees])
       }

    return {displayedEmployees, sortBy}
}
