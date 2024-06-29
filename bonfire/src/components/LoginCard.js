import React from 'react';
import "../fonts/fonts.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';



function LoginCard() {
    const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: '#FFF1E1',
    width: '34vw',
    height: '40vh',
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

const helpStyle = {
    textAlign: 'left',
    fontFamily: 'Gaegu',
    color: '#7A5895',
    fontSize: '20px',
    marginTop: '.5em'
}

const accStyle = {
    textAlign: 'left',
    fontFamily: 'Gaegu',
    color: '#7A5895',
    fontSize: '20px',
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
            <Typography style={headerStyle}>
                Log into your account
            </Typography>
            <div style={fieldStyle}>
                email:
                <div style={padding}> </div>
                <div>
                    <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    size="small"
                    />
                </div>
            </div>
            <div style={fieldStyle}>
                password: 
                <div style={padding}> </div>
                <div>
                    <TextField
                    fullWidth
                    id="outlined-password-input"
                    type="password"
                    autoComplete="current-password"
                    size="small"
                    />
                </div>
                <Typography style={helpStyle} sx={{
                    textDecoration: 'underline', 
                    cursor: 'pointer', 
                    '&:hover': {
                        fontWeight: 'bold'
                    }
                }} >
                    forgot your password? 
                </Typography>
                <Typography style={accStyle} sx={{
                    textDecoration: 'underline', 
                    cursor: 'pointer', 
                    '&:hover': {
                        fontWeight: 'bold'
                    }
                }} onClick={handleClick}>
                    make an account
                </Typography>
            </div>

        </CardContent>

    </Card>
          

  );
}

export default LoginCard;