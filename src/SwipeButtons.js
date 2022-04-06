import React from 'react'
import ReplayRounded from '@mui/icons-material/ReplayRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import StarRounded from '@mui/icons-material/StarRounded';
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
import FlashOnRounded from '@mui/icons-material/FlashOnRounded';
import "./SwipeButtons.css"
import IconButton from "@mui/material/IconButton"







function SwipeButtons() {
  return (
    <div className="swipeButtons">
        <IconButton className="swipeButton__repeat">
            <ReplayRounded fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButton__left">
            <CloseRounded fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButton__star">
            <StarRounded fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButton__right">
            <FavoriteRounded fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButton__superlike">
            <FlashOnRounded fontSize="large"/>
        </IconButton>
        
    </div>
  )
}

export default SwipeButtons