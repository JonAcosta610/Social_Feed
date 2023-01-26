import React, { useState } from 'react';


const AddComment = (props) => {

    const[name, setName] = useState('');
    const[comment, setComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
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
                <input type='string' value={name} className='form-control' onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Comment</label>
                <input type='string' value={comment} className='form-control form-control-lg' onChange={(event) => setComment(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary' style={{'marginTop': '1em'}}>Submit</button>
        </form>
     );
}
 
export default AddComment;