import React from 'react';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
  });
  

class CardDesign extends React.Component{

    constructor(){
        super()
    }
  


    handleQuestion = () => {
        this.props.history.push('/questions')
    }

    render(){
        return(
            <div>
                    <Card className={useStyles.card} style = {{backgroundColor: "white", color : "black"}} >
                        <CardActionArea>
                        <CardMedia
                            style = {{height : "150px"}}
                            image="https://analyticsindiamag.com/wp-content/uploads/2019/11/javascript.png"
                            title="Contemplative Reptile"
                            />
                            {/* <CardMedia>
                                <img src= "https://analyticsindiamag.com/wp-content/uploads/2019/11/javascript.png" ></img>
                            </CardMedia> */}
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            JavaScript Questions
                            </Typography>
                            <Typography variant="body2"  component="p">
                            VARIABLES,  DATA TYPES - STRING , NUMBER, DATA TYPE - ARRAYS,  DATA TYPES - OBJECTS, CONDITION STATEMENT,  LOOPS, FUNCTIONS
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button variant="contained" color="primary" >
                            <Link to = "/questions" style = {{textDecoration : "none", color : "white"}} >Explore</Link>
                            </Button>
                        </CardActions>
                        </Card>
            </div>
        )
    }
}

export default CardDesign