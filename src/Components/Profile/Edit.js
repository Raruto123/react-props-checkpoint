import React from 'react';
import "/Users/aliounsane/Desktop/GoMyCode/ReactProject/react-props-checkpoint/src/Components/Profile/Edit.css"

export const Edit =({cliqueSurLeProfil})=>{
    return(
        <div>
            <button onClick={e =>cliqueSurLeProfil(e)}>
                <a href='/'>Modifier le profil</a> 
            </button>
        </div>
    )
}