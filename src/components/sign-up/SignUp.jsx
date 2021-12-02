import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"

export default function SignIn() {
    let error=React.useState(false);
  return (
    <ThemeProvider theme={theme}>
    <Grid container alignItems="center" justifyContent="center"
    >
    <Paper elevation={24} style={{flexWrap:"nowrap",minHeight:"70vh",width:"40vw",display:"flex",alignItems:"space-between",justifyContent:"center",paddingTop:"18px"}}>
       <Grid container direction="column">
        <Grid item container direction="column" justifyContent="center" spacing={2}>
        <Grid item>
        <TextField
          error={error[0]}
          id="userName"
          label="Username"
          //defaultValue="Hello World"
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="password"
          label="Password"
          type="password"
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="retype-password"
          label="Retype Password"
          type="password"
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="emailId"
          label="Email Id"
          //defaultValue="Hello World"
        />
        </Grid>
        <Grid item container justifyContent="center" spacing={1}>
        <Grid item>
        <TextField
          error={error[0]}
          id="mobile"
          label="Mobile No"
          //defaultValue="Hello World"
        />
        </Grid>
        <Grid item justifyContent="center" alignSelf="center">
        <Button variant="contained" color="secondary">Send Code</Button>
        </Grid>
        </Grid>
        <Grid item container justifyContent="center" spacing={1}>
        <Grid item>
        <TextField
          error={error[0]}
          id="code"
          label="Code"
          //defaultValue="Hello World"
        />
        </Grid>
        <Grid item justifyContent="center" alignSelf="center">
        <Button variant="contained" color="secondary">Verify</Button>
        </Grid>
        </Grid>
        <Grid item>
        <Button variant="contained" color="secondary">Submit</Button>
        </Grid>
   </Grid>
   </Grid>
    </Paper>
    </Grid>
    </ThemeProvider>
  );
}