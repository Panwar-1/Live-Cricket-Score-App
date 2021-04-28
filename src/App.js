import React, {useEffect, useState} from 'react';
import Navbar from './component/Navbar';
import { getMatches } from './api/Api';
import { Grid, Container, Typography } from '@material-ui/core';
import MYCard from './component/MYCard';

const App = ()=>{
    const [matches, setMatches] = useState([]);

   useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data.matches);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);
    
    //   console.log(matches);

    return (
        <div className="App">
          <Navbar>
          </Navbar>
          <Typography style={{textAlign:"center", margin:10}} variant="h4">Welcome TO Cricket Live Score APP</Typography>
          <Container>
            <Grid container>
              <Grid item xs={12}>
                {matches.map((match) => (
                  <MYCard key={match.unique_id} match={match}></MYCard>
                ))}
              </Grid>
            </Grid>
          </Container>
        </div>
      );
}


export default App;