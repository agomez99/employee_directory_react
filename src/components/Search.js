import React, {useState, useContext} from 'react';
import { EmployeeContext } from './EmployeeContext.js';
import "./Search.css";
import Button from "./Button";

function Search() {
  const [search, setSearch] = useState("");
  const { employees, setDisplayedEmployees } = useContext(EmployeeContext);

  function updateSearch({ target }) {
    const searchTerm = target.value;
    setSearch(searchTerm);
    const filterResult = employees.filter(function (employee) {
      return employee.name.first
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) !== -1
        ? true
        : false;
    });
    setDisplayedEmployees([...filterResult]);
  }
  return (
    <div>
      <h4>Search By First Name:</h4>
      <input type="text" onChange={updateSearch} value={search}></input>
      <Button />
    </div>
  );
}
export default Search;