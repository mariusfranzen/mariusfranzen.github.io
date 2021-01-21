import { React } from 'react';
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
                <a className="profile-button" href="https://docs.google.com/document/d/1-3GkOMaMEPQoB-SBxvXDJ3l0Bh21wMsR7XPlqaGZ6Dc/edit?usp=sharing">Mitt CV på google docs</a>
                <a className="profile-button" href="mailto:marius.franzen1@gmail.com">Kontakta mig</a>
            </div>
        </div>
    )
}

export default Profile
