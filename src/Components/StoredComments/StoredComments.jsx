import React, { useState } from 'react';
import AddComment from "../AddComment/AddComment";


const StoredComments = (props) => {

    const [comments, setComments] = useState([])

    return ( 
        <ul> 
        {props.parentEntries.map((entry) => {
          return (
            <li>{entry.name}</li>
            <li>{entry.comment}</li>
          );
        })}
      </ul>
       
     );
}
 
export default StoredComments;
