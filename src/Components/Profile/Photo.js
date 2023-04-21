import React from 'react';
import "/Users/aliounsane/Desktop/GoMyCode/ReactProject/react-props-checkpoint/src/Components/Profile/Photo.css";

export const Photo = (myPhoto)=>{
    return(
        <div className='photo'>
            <img src = {myPhoto.photo} alt="ma tête" width={300} height={300}></img>
        </div>
    )
}