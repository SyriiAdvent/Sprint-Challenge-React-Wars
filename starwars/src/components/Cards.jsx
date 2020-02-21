import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const color = grey[900];

const useStyles = makeStyles({
  root: {
    background: color,
    minWidth: 275,
  },
  title: {
    color: 'yellow',
    fontSize: 30,
  },
  info: {
    color: 'white',
  },
  pos: {
    marginBottom: 12,
  },
});

const Cards = (props, id) => {
  const classes = useStyles();
  const [{ name, height, mass, birth_year, homeworld }] = useState(props.data);
  const [currentData, setCurrentData] = useState(props.data)
  const [world, setWorld] = useState([])

  useEffect(() => {
    axios(homeworld)
    .then(response => {
      setWorld(response.data.name)
    })
    .catch(error => console.error(error))
  }, [props.data])

  console.log(world);

  return (
    <Card className={classes.root} variant="outlined" key={id}>
      <CardContent>
      <Typography variant="h6" component="h3" className={classes.title}>
        {name}
      </Typography>
      <Typography variant="body2" component="p" className={classes.info}>
        Height: {height} <br />
        Mass: {mass} <br/>
        Birth Year: {birth_year} <br />
        Height: {height} <br />
        Home World: {world} <br />
      </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" style={{color: 'white' }}>Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

export default Cards