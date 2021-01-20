import React from 'react';
import ProfilePicture from '../../images/IMG_1253.jpg';

function Profile() {
    return (
        <div className="profile">
            <div>
                <img className="profile-picture" src={ProfilePicture} alt="selfie" />
            </div>
            <h1>Marius Franzén</h1>
            <h2>Praktikant på <a href="https://www.cgi.com/sverige/sv">CGI</a> Östersund</h2>
            <div className="row-group profile-button-group">
                <button className="profile-button">CV som PDF</button>
                <button className="profile-button">Kontakta mig</button>
            </div>
        </div>
    )
}

export default Profile
