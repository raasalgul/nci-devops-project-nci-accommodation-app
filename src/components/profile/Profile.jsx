import { ThemeProvider,makeStyles } from '@mui/styles';
import theme from "../themes/Theme"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const useStyles = makeStyles({
    root: {
      minWidth: 444,
      alignContent:'center'
    },
  });
  

export default function Profile(){
    let data={
        name:'Sathish',
        age:'25',
        course:'Ms in Cloud Computing',
        service:'Roomate',
        phoneNumber:'123456789',
        emailId:'sats@gmail.com',
        profilePic:'http:/url'
    }
    const [isEdit,setIsEdit]=useState(false);
    const [service, setService] = useState('');
    const classes = useStyles();
    return(<ThemeProvider theme={theme}>
          <Card className={classes.root} variant="outlined">
         <CardContent>
           
           <div style={{display: 'block',marginLeft: 'auto',width: '54%'}}>
         <Avatar style={{width:100,height:100}} src="/broken-image.jpg" />
         <Grid>
           {!isEdit?
           <IconButton onClick={()=>{setIsEdit((previous)=>!previous)}}>
             <EditIcon>
               </EditIcon>
               </IconButton>:
               <Grid>
               <Button variant="contained" color="secondary" onClick={()=>{setIsEdit((previous)=>!previous)}}>Save</Button>
               <Button variant="contained" color="secondary" onClick={()=>{setIsEdit((previous)=>!previous)}}>Cancel</Button>
               </Grid>
               }
               </Grid>
         </div>
        <br/><br/>
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Name:</Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.name}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Age:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.age}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Course:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.course}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Service:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.service}</Typography>:
          <Select
          value={service}
          onChange={(event)=>{setService(event.target.value)}}
        >
          <MenuItem value={'roommate'}>Roommate</MenuItem>
          <MenuItem value={'accommodation'}>Accommodation</MenuItem>
          <MenuItem value={'no-service'}>No Service</MenuItem>
        </Select>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Phone number:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.phoneNumber}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Email Id:
          </Typography> <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.emailId}</Typography>
      </CardContent>
    </Card>
    </ThemeProvider>)
}