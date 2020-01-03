import React from 'react'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 600,
    },
    snackbar: {
      margin: theme.spacing(1),
    },
  }));

function QuaComponent(props){
    return(
        <div>
            <div className={useStyles.root}>
            <SnackbarContent className={useStyles.snackbar} message = {props.data.title} action = {<ArrowForwardIosIcon fontSize="small"  /> } />
            <br></br>
            </div>
        </div>
    )
}

export default QuaComponent