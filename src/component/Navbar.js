import React from 'react'
import {Link} from 'react-router-dom'


// import Catagories from './Catagories'

// import { ThemeProvider } from "@material-ui/styles";
import {
  CssBaseline,
  AppBar,
  Typography,
  createMuiTheme,
  Container
} from "@material-ui/core";


import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

class Navbar extends React.Component{

    constructor(){
        super()
    }




    render(){
        return(
            <div>
                    <AppBar position="fixed"  >
                        <Toolbar variant="dense">{/*console.log(this.props.url)*/}
                        <IconButton edge="start" className={useStyles.menuButton} color="inherit" >
                          {this.props.back && <Link to = "/"  style = {{color : "white"}} > <ArrowBackIcon /> </Link> } 
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                        E-Learning
                        </Typography>
                        </Toolbar>
                    </AppBar>
            </div>
        )
    }
}

export default Navbar