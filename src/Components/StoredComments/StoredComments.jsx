import React, { useState } from 'react';

const StoredComments = (props) => {

    const[like, setLike] = useState(false)
    
    const handleLikeClick = () => {
        setLike(like => !like)
    }
    
    let likeCheck = like ? ' likeactive': null;

    const[dislike, setDislike] = useState(false)

    const handleDislikeClick = () => {
        setDislike(dislike => !dislike)
    }

    let dislikeCheck = dislike ? ' dislikeactive': null
    
    return (
        <div>
            {props.parentEntries.map((entry) => {
            return (
                <ul className='list-group'>
                    <li className='list-group-item list-group-item-action flex-column align-items-start'>{entry.name}</li>
                    <li className='list-group-item list-group-item-action flex-column align-items-start'>{entry.comment}</li>
                    <div className='thumb-btn'>
                        <div className='col-md-6'>
                            <div>
                                <button onClick={handleLikeClick} className={`content btn-group ${likeCheck}`}>👍🏽</button>
                            </div>
                            <div>
                                <button onClick={handleDislikeClick} className={`content btn-group ${dislikeCheck}`}>👎🏽</button>
                            </div>
                        </div>  
                    </div>
                    
                </ul>
          );
        })}
        </div>
     );
}
 
export default StoredComments;
