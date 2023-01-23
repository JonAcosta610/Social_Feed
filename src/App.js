import React, { useState } from 'react';
import StoredComments from './Components/StoredComments/StoredComments';
import AddComment from './Components/AddComment/AddComment';


function App() {

  const[entries, setEntries] = useState([{name:'Mike Jones', comment: 'Hello World'}])

  return (
    <div>
      <StoredComments parentEntries={entries} />
    </div>
  );
}

export default App;
