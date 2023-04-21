import React from 'react';
import "/Users/aliounsane/Desktop/GoMyCode/ReactProject/react-props-checkpoint/src/Components/Profile/Bio.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

export const Bio =(myBio)=>{
    return(
        <div>
            <h1 className='bio'>{myBio.bio}</h1>
            <div className='icons'>
                <FontAwesomeIcon icon={faHouse} style={{color:"#C96487"}} />
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"#C96487"}}/>
                <FontAwesomeIcon icon={faUser} style={{color:"#C96487"}}/>
                <FontAwesomeIcon icon={faCheck} style={{color:"#C96487"}} />
                <FontAwesomeIcon icon={faDownload} style={{color:"#C96487"}} />
                <FontAwesomeIcon icon={faImage} style={{color:"#C96487"}} />
            </div>
        </div>
    )
}