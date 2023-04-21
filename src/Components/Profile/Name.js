import React from 'react';
import "/Users/aliounsane/Desktop/GoMyCode/ReactProject/react-props-checkpoint/src/Components/Profile/Name.css"

export const Name =(myName)=>{
    return(
        <div>
            <h1 className='name'>{myName.nom}</h1>
        </div>
    )
}