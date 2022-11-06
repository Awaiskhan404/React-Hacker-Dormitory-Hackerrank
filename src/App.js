import React from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import { STUDENTS } from './studentsList'
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {

  const [validResidents, setValidResidents] = React.useState([]);
  const [errors, setErrors] = React.useState(null);


  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          db={STUDENTS}
          state={validResidents}
          setState={setValidResidents}
          errors={setErrors}
        />
        {errors && <Error message={errors} />}
        <ResidentsList state={validResidents} />
      </div>
    </div>
  );
}

export default App;
