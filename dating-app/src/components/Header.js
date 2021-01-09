import React from 'react';
import "../styles/Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


export default function Header() {
  return (
    <div className="header">

     {/* clickable person icon */}
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon'/>
      </IconButton>

      <img
        className="header__logo"
        src="https://i.imgur.com/xL6gAqg.png"
        alt=""
      />

      <IconButton>
        <ForumIcon fontSize='large' className='header__icon'/>
      </IconButton>

    </div>
  )

}