import React from 'react'
import { Icons8Github, Icons8GoogleMaps, Icons8LinkedIn } from '../../images/icons/icons8';

function LeftFooter() {
    return (
        <footer>
            <img src={Icons8GoogleMaps} alt="Link to google maps" />
            <div>
                <img src={Icons8LinkedIn} alt="Link to LinkedIn" />
                <img src={Icons8Github} alt="Link to GitHub" />
            </div>
        </footer>
    )
}

export default LeftFooter
