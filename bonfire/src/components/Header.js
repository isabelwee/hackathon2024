import * as React from "react";
// import { Link } from 'react-router-dom';
import "../fonts/fonts.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
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
                <Typography
                    variant="h2"
                    // to="/"
                    sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'More Sugar', color: '#F1B150' }}
                >
                    bonfire
                </Typography>
                <AccountCircleIcon 
                 sx={{ fontSize: 50, color: '#FFF1E1', alignItems: 'center', marginTop: -1 }} />
            </Toolbar>
        </AppBar>
    );
}
