import React, { useState } from 'react';
import AddComment from './Components/AddComment/AddComment';
import StoredComments from './Components/StoredComments/StoredComments';


function App() {
  const[entries, setEntries] = useState([{name:'Mike Jones', message: 'Hello World'}])
  return (
    <div>
      <AddComment />
      <StoredComments />
    </div>
  );
}

export default App;
