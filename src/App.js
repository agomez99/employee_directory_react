import React, {useState} from 'react';

import './App.css';
import Header from "./components/Header"
import Table from "./components/Table"
import Search from "./components/Search.js"

// where I learned about context https://www.youtube.com/watch?v=lhMKvyLRWo0
import { EmployeeContext } from "./components/EmployeeContext"
import SearchLast from './components/SearchLast';

function App() {
  const [employees, setEmployees] = useState([]);
  const [displayedEmployees, setDisplayedEmployees] = useState([])

  return (
    <div className="App">
      <EmployeeContext.Provider value={{employees, setEmployees, displayedEmployees, setDisplayedEmployees}}>
        <Header />
        <Search />
        
        <SearchLast />
        <Table />
      </EmployeeContext.Provider>
    </div>  
  );
}

export default App;
