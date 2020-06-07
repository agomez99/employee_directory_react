import React, {useState} from 'react';

import './App.css';
import Header from "./components/Header/Header"
import Table from "./components/Table/Table"
import Search from "./components/Search/Search"
import { EmployeeContext } from "./components/EmployeeContext"
import SearchLast from   "./components/SearchLast/SearchLast";

function App() {
  const [employees, setEmployees] = useState([]);
  const [displayedEmployees, setDisplayEmployees] = useState([])

  return (
    <div className="App">
      <EmployeeContext.Provider value={{employees, setEmployees, displayedEmployees, setDisplayEmployees}}>
        <Header />
        <Search />
        <SearchLast />
        <Table />
      </EmployeeContext.Provider>
    </div>  
  );
}

export default App;
