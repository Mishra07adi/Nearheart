import React from 'react'
import "./Header.css";
import headerlogo from './images/logo.png'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header_container">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img className="header_logo"
                src={headerlogo}
                alt="headerlogo"
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>

        </div >
    )
}

export default Header
