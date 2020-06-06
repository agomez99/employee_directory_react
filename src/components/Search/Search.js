import React, {useState, useContext} from 'react';
import { EmployeeContext } from '../EmployeeContext.js';
import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");
  const { employees, setDisplayEmployees } = useContext(EmployeeContext);

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
    setDisplayEmployees([...filterResult]);
  }
  return (
    <div>
      <h4>Search By First Name:</h4>
      <input type="text" onChange={updateSearch} value={search}></input>
    </div>
  );
}
export default Search;