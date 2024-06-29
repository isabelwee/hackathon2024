import * as React from "react";
// import { Link } from 'react-router-dom';
import "../fonts/fonts.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    
    const handleProfileClick = () => {
        /* change this!!! */
        navigate('/profile')
      }

      const handleHomeClick = () => {
        /* change this!!! */
        navigate('/')
      }

    return (
        <AppBar 
            position="fixed"
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                zIndex: 1000,
                marginTop: 2
            }}
        >
            <Toolbar>
                <HomeIcon 
                sx={{ fontSize: 50, color: '#FFF1E1', alignItems: 'center', marginTop: -1 }} 
                onClick={handleHomeClick} />
                <Typography
                    variant="h2"
                    // to="/"
                    sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'More Sugar', color: '#F1B150' }}
                    onClick={handleHomeClick}
                >
                    bonfire
                </Typography>
                <AccountCircleIcon 
                 sx={{ fontSize: 50, color: '#FFF1E1', alignItems: 'center', marginTop: -1 }} 
                 onClick={handleProfileClick} />
            </Toolbar>
        </AppBar>
    );
}
