import React from 'react'
import "./Header.css"
import PersonRounded from '@mui/icons-material/PersonRounded';
import LocalPostOfficeIconRounded from '@mui/icons-material/LocalPostOfficeRounded';
import { requirePropFactory } from '@mui/material';
import IconButton from "@mui/material/IconButton"

const Header = () => {
  return (
    ////BEM <<< naming convention
    <div className="header">
        <IconButton>
            <PersonRounded className="header__icon" fontSize="large" /> 
        </IconButton>
        
        <img 
          className="header__loggo"
          src={require('./tinder_logo.png')} alt="tinder logo"
        />
        <IconButton>
            <LocalPostOfficeIconRounded className="header__icon" fontSize="large"/>
        </IconButton>
        
    </div>
  )
}

export default Header