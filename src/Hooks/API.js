import { useState, useContext } from "react";
import { EmployeeContext } from "../components/EmployeeContext";
import axios from "axios";

export function useGet(url) {
  const {
    employees,
    setEmployees,
    displayedEmployees,
    setDisplayEmployees,
  } = useContext(EmployeeContext);

  useState(() => {
    async function getEmployees() {
      try {
        const response = await axios.get(url);
        setEmployees(response.data.results);
        setDisplayEmployees(response.data.results);
      } catch (error) {
        console.log("API error!!", error);
      }
    }
    getEmployees();
  }, []);

  function sortBy(sort) {
    switch (sort) {
      case "name":
        sortByName();
        break;
      case "lastName":
        sortByLastName();
        break;
      case "username":
        sortUserName();
        break;
      case "email":
        email();
        break;
      case "age":
        sortByAge();
        break;
      case "gender":
        sortByGender();
        break;
      default:
        console.log("no option for tht choice");
    }
  }

  //  first name.
  function sortByName() {
    employees.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      } else {
        return 1;
      }
    });
    setDisplayEmployees([...employees]);
  }
  // last name.
  function sortByLastName() {
    employees.sort(function (a, b) {
      if (a.name.last < b.name.last) {
        return -1;
      } else {
        return 1;
      }
    });
    setDisplayEmployees([...employees]);
  }
  //user name
  function sortUserName() {
    employees.sort(function (a, b) {
      if (a.login.username < b.login.username) {
        return -1;
      } else {
        return 1;
      }
    });
    setDisplayEmployees([...employees]);
  }
    //gender.
    function sortByGender() {
      employees.sort(function (a, b) {
        if (a.gender < b.gender) {
          return -1;
        } else {
          return 1;
        }
      });
      setDisplayEmployees([...employees]);
    }
  //email
  function email() {
    employees.sort(function (a, b) {
      if (a.email < b.email) {
        return -1;
      } else {
        return 1;
      }
    });
    setDisplayEmployees([...employees]);
  }

  // dob
  function sortByAge() {
    employees.sort(function (a, b) {
      return a.dob.age - b.dob.age;
    });
    setDisplayEmployees([...employees]);
  }


  return { displayedEmployees, sortBy };
}
