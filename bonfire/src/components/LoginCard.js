import React from 'react';
import "../fonts/fonts.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';

function LoginButton() {
  const cardStyle = {
    backgroundColor: '#FFF1E1',
    width: '20em',
    height: '18em',
    textAlign: 'center',
}

const headerStyle = {
    textAlign: 'center',
    fontFamily: 'More Sugar',
    color: '#7A5895',
    fontSize: '22px'
}

const fieldStyle = {
    textAlign: 'left',
    fontFamily: 'More Sugar',
    color: '#7A5895',
    fontSize: '16px'
}

const helpStyle = {
    textAlign: 'left',
    fontFamily: 'Gaegu',
    color: '#7A5895',
    fontSize: '16px'
}


  return (

    <Card style={cardStyle}>
        <CardContent>
            <Typography style={headerStyle}>
                Log into your account
            </Typography>
            <div style={fieldStyle}>
                email:
                <div>
                    <TextField
                    required
                    id="outlined-required"
                    />
                </div>
            </div>
            <div style={fieldStyle}>
                password:
                <div>
                    <TextField
                    id="outlined-password-input"
                    type="password"
                    autoComplete="current-password"
                    />
                </div>
                <Typography style={helpStyle} sx={{textDecoration: 'underline'}}>
                    forgot your password?
                </Typography>
            </div>

        </CardContent>

    </Card>
          

  );
}

export default LoginButton;