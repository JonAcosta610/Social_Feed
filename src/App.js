import React, { useState } from 'react';
import StoredComments from './Components/StoredComments/StoredComments';
import AddComment from './Components/AddComment/AddComment';


function App() {

  const[entries, setEntries] = useState([{name:'Mike Jones', comment: 'Hello World'}])

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <AddComment addNewEntryProperty={addNewEntry} />
      <StoredComments parentEntries={entries} />
    </div>
  );
}

export default App;
