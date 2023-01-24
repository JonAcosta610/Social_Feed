import React, { useState } from 'react';


const AddComment = (props) => {

    const[name, setName] = useState('');
    const[comment, setComment] = useState('');

    function handleSubmit(event) {
        event.prevent.default();
        let newComment = {
            name: name,
            comment: comment
        };
        props.addNewEntryProperty(newComment)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='string' value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Comment</label>
            <input type='string' value={comment} onChange={(event) => setComment(event.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default AddComment;