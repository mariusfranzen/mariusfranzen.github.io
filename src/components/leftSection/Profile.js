import React from 'react';
import ProfilePicture from '../../images/IMG_1253.jpg';

function Profile() {
    return (
        <div className="profile">
            <div>
                <img className="profile-picture" src={ProfilePicture} alt="selfie" />
            </div>
            <h1>Marius Franzén</h1>
            <h2>Full Stack utvecklare - Jobbsökande</h2>
            <div className="row-group profile-button-group">
                <button className="profile-button">CV som PDF</button>
                <button className="profile-button">Kontakta mig</button>
            </div>
        </div>
    )
}

export default Profile
