import React from 'react'
import { Icons8Github, Icons8GoogleMaps, Icons8LinkedIn } from '../../images/icons/icons8';

function LeftFooter() {
    return (
        <footer>
            <a href="https://goo.gl/maps/thnxGwxKeyf84LkRA"><img src={Icons8GoogleMaps} alt="Link to google maps" /></a>
            <div>
                <a href="https://www.linkedin.com/in/marius-franz%C3%A9n-48a073192"><img src={Icons8LinkedIn} alt="Link to LinkedIn" /></a>
                <a href="https://github.com/mariusfranzen"><img src={Icons8Github} alt="Link to GitHub" /></a>
            </div>
        </footer>
    )
}

export default LeftFooter
