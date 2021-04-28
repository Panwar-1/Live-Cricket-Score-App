import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { Button, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import logo from '../img/vs.png'
import { shadows } from '@material-ui/system';
import { getMatchDetails } from '../api/Api';
import { Fragment } from 'react';


const MYCard = ({match})=>{
   
    const [detail, setDetail] = useState({});
    const [open, setOpen] = useState(false);

     function handleClick(id){
         getMatchDetails(id)
         .then((data)=>{console.log("Match Data", data)
            setDetail(data)
            handleOpen();
         })
         .catch((error)=>{console.log(error)});
     }

    const getCard=()=>{
     return (
         <Card style={{marginTop : 20, borderRadius : 70}} >
             <CardContent >
                 <Grid container justify="center" alignItems="center" spacing={4}>
                  <Grid item>
                      <Typography variant="h4">{match['team-1']}</Typography>
                  </Grid>
                  <Grid item>
                  <Typography> <img style={{width:85}} src={logo} alt=""/> </Typography>
                  </Grid>
                  <Grid item>
                  <Typography variant="h4">{match['team-2']}</Typography>
                  </Grid>
                 </Grid>
             </CardContent>

             <CardActions>
                 <Grid container justify="center" alignItems="center" spacing={3}>
                     <Grid item>
                     <Button onClick = {()=>{
                         handleClick(match.unique_id);
                     }}variant="contained" color="primary">Show Details</Button>
                      </Grid>
                     <Grid item>
                     <Button variant="contained" color="primary">Start Time : {new Date(match.dateTimeGMT).toString()}</Button> 
                    </Grid>
                 </Grid>

             </CardActions>
         </Card>
     ) 
  };

const handleClose = ()=>{
  setOpen(false);
}

const handleOpen = ()=>{
    setOpen(true);
}



  const getDilog = ()=>(
      <Dialog open={open} onClose={handleClose}>
         <DialogTitle id="alert-dialog-title">{"Match Details ....."}</DialogTitle>
         <DialogContent>
             <DialogContentText id="alert-dialog-description">
                 <Typography>{detail.stat}</Typography>
                 <Typography>Match <span style={{fontStyle:"italic", fontWeight:"bold"}}>
                     {detail.matchStarted?"Started" : "Still Not Started"} 
                 </span>
                 </Typography>
                 <Typography>Score <span style={{fontStyle:"italic", fontWeight:"bold"}}>
                     {detail.score} 
                 </span></Typography>
             </DialogContentText>

         </DialogContent>
      <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>Close</Button>
      </DialogActions>

      </Dialog>
  );

 return (
        <Fragment>
            {getCard()}
            {getDilog()}
        </Fragment>
     );
}

export default MYCard;