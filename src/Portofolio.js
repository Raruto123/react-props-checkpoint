import React from 'react';
import "/Users/aliounsane/Desktop/GoMyCode/ReactProject/react-props-checkpoint/src/Portofolio.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Name } from './Components/Profile/Name';
import { Bio } from './Components/Profile/Bio';
import { Photo } from './Components/Profile/Photo';
import Image  from "/Users/aliounsane/Desktop/GoMyCode/ReactProject/react-props-checkpoint/src/IMG_4401.jpg"
import { Edit } from './Components/Profile/Edit';



export const Portoflio =()=>{
    const cliqueSurLeProfil = () =>{
        alert("tu ne peux rien modifier sauvage");
    }
    return(
        <div className='container'>
            <Photo photo = {Image}></Photo>
            <div className='container2'>
                <Name nom="Sané Mohamed"></Name>
                <Edit cliqueSurLeProfil = {cliqueSurLeProfil}></Edit>
                <Bio bio = "Je suis passionné de technologie, de jeux vidéo et de programmation"></Bio>
            </div>
        </div>
    )
};

