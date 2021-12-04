import { ThemeProvider,makeStyles } from '@mui/styles';
import theme from "../themes/Theme"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, TextField } from '@mui/material';

const useStyles = makeStyles({
    root: {
      minWidth: 444,
      alignContent:'center'
    },
  });
  

export default function AccommodationUpdate(){
    let data={
      "userId":"234fjsk4543",
      "area":"Pannal street",
      "eirCode":"D2W10",
      "duration":"1 year",
      "availablity":"01-01-2022",
      "education":"Master's in Cloud",
      "work":"Student",
      "picture":"s3://test-cool/profile-picture/id-18:31:31-IMG_20210925_173906.jpg",
      "rent":"500 euros",
      "description":"Clean house"
  }
    const [isEdit,setIsEdit]=useState(true);
    const [uploadedFile,setUploadedFile]=useState([{'name':''}]);
    // const [uploadedUrl,setUploadedUrl]=useState({'name':'hi'});
    const classes = useStyles();
    return(<ThemeProvider theme={theme}>
          <Card className={classes.root} variant="outlined">
         <CardContent>
         <Grid alignSelf="center">
              <Typography variant="h4">Accomodation Update</Typography>
              </Grid>
           <div style={{display: 'block',marginLeft: 'auto',width: '54%'}}>
         <Grid>
           {isEdit?
           <IconButton onClick={()=>{setIsEdit((previous)=>!previous)}}>
             <EditIcon>
               </EditIcon>
               </IconButton>:
               <Grid spacing={2}>
               <Button variant="contained" onClick={()=>{setIsEdit((previous)=>!previous)}}
               style={{marginRight:"8px", backgroundColor:"#2EC4B6"}}
               >Save</Button>
               <Button variant="contained" color="secondary" onClick={()=>{setIsEdit((previous)=>!previous)}}
               style={{backgroundColor:"#2EC4B6"}}
               >Cancel</Button>
               </Grid>
               }
               </Grid>
         </div>
        <br/><br/>
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Area:</Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.area}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">EirCode:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.eirCode}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Duration:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.duration}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Availablity:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.availablity}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Education:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.education}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Work:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.work}</Typography>:
          <TextField></TextField>
          }
          <br/><br/>
          <Grid container justifyContent="center" spacing={0}>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Picture:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.picture}</Typography>:
          <Grid>
          <input
          accept="image/*"
          // className={classes.input}
          style={{ display: 'none' }}
          id="upload-button"
          multiple
          type="file"
          onChange={(event)=>{
            let files=[];
            for(let i=0;i<event.target.files.length;i++)
            {
              files.push(event.target.files[i])
            }
            setUploadedFile(files)
            console.log(event.target.files)
            console.log(URL.createObjectURL(event.target.files[0]))
            // setUploadedUrl(URL.createObjectURL(event.target.files[0]))
          }}
        />
        <label htmlFor="upload-button">
          <Button variant="contained" component="span" style={{backgroundColor:"#2EC4B6"}}
          onClick={(param)=>{
            console.log(param.target)
          }}
          >
            Upload
          </Button>
        </label>
        {/* <img src={uploadedUrl} alt="uploaded"></img> */}
        {uploadedFile.map((file)=>{
          return <Typography>{file.name}</Typography>
        })}
        </Grid> }
        </Grid>
          <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Rent:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.rent}</Typography>:
          <TextField></TextField>
          }
          <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Description:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.description}</Typography>:
          <TextField></TextField>
          }
      </CardContent>
    </Card>
    </ThemeProvider>)
}