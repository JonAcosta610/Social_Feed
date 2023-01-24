import React, { useState } from 'react';
import StoredComments from './Components/StoredComments/StoredComments';
import AddComment from './Components/AddComment/AddComment';
import './App.css';


function App() {

  const[entries, setEntries] = useState([{name:'Mike Jones', comment: 'Hello World'}])

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-box'>
            <AddComment addNewEntryProperty={addNewEntry} />
          </div>
          <div className='border-box'>
            <StoredComments parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
