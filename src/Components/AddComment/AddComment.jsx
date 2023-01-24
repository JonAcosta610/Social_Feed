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
            <div className='form-group'>
                <label>Name</label>
                <input type='string' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Comment</label>
                <input type='string' value={comment} onChange={(event) => setComment(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
     );
}
 
export default AddComment;