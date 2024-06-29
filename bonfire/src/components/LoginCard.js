import React from 'react';
import "../fonts/fonts.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';

function LoginCard() {
  const cardStyle = {
    backgroundColor: '#FFF1E1',
    width: '23em',
    height: '20em',
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
    marginTop: '.75em'
}

const helpStyle = {
    textAlign: 'left',
    fontFamily: 'Gaegu',
    color: '#7A5895',
    fontSize: '20px',
    marginTop: '.5em',
    marginBottom: '2em'
}

const padding = {
    marginBottom: '.4em'
}

// if we have time, round teh corners of the card
//  sx={{
//     "--Card-radius": "22px"
// }}
// doesnt work :( ^


  return (

    <Card style={cardStyle}>
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
                <Typography style={helpStyle} sx={{textDecoration: 'underline'}}>
                    forgot your password?
                </Typography>
            </div>

        </CardContent>

    </Card>
          

  );
}

export default LoginCard;