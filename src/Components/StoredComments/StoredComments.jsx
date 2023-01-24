import React, { useState } from 'react';


const StoredComments = (props) => {
    
    const [comments, setComments] = useState([])

    return (
        <div>
            {props.parentEntries.map((entry) => {
            return (
                <ul>
                    <li>{entry.name}</li>
                    <li>{entry.comment}</li>
                </ul>
          );
        })}
        </div>
     );
}
 
export default StoredComments;
