import React, { useState } from 'react';




const AddComment = (props) => {
    return ( 
        <form>
            <label>Name</label>
            <input type='string' />
            <label>Comment</label>
            <input type='string' />
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default AddComment;