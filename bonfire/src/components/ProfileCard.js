import React from 'react';
import "../fonts/fonts.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function ProfileCard() {
    const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: '#FFF1E1',
    width: '34vw',
    height: '54vh',
    textAlign: 'center',
    padding: '1em'
}

const headerStyle = {
    textAlign: 'center',
    fontFamily: 'More Sugar',
    color: '#7A5895',
    fontSize: '33px'
}

const fieldStyle = {
    textAlign: 'left',
    fontFamily: 'More Sugar',
    color: '#7A5895',
    fontSize: '26px',
    marginTop: '.7em'
}

const padding = {
    marginBottom: '.4em'
}

const handleClick = () => {
    /* change this!!! */
    navigate('/signup')
  }

  return (

    <Card style={cardStyle} sx={{ borderRadius: 4, padding: 2 }}>
        <CardContent>
            <AccountCircleIcon 
            sx={{ fontSize: 160, color: '#394B6E', alignItems: 'center', marginTop: -.5 }} 
            />
            <div style={fieldStyle}>
                name:
                <div>
                    <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    size="small"
                    defaultValue="bob"
                    />
                </div>
            </div>
            <div style={fieldStyle}>
                email:
                <div>
                    <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    size="small"
                    defaultValue="bob@mail.com"
                    />
                </div>
            </div>
            <div style={fieldStyle}>
                password: 
                <div>
                    <TextField
                    fullWidth
                    id="outlined-password-input"
                    type="password"
                    autoComplete="current-password"
                    size="small"
                    defaultValue="bobspassword"
                    />
                </div>
                <div style={padding}> </div>
            </div>

        </CardContent>

    </Card>
          

  );
}

export default ProfileCard;