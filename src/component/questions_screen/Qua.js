import React from 'react'

import axios from 'axios'
import {Link} from 'react-router-dom'

import QuaComponent from './QuaComponent'

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

//   const action = (
//     <Button color="secondary" size="small">
//       lorem ipsum dolorem
//     </Button>
//   );
  


class Qua extends React.Component{

    constructor(){
        super()
        this.state = {
            posts : []
        }
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data
                this.setState({posts})
            })
    }

    render(){
        return(
            <div>{console.log(this.state.posts)}
                <h1>Javascript Questions</h1>
                {/* <div className={useStyles.root}>
                    <SnackbarContent className={useStyles.snackbar} message="I love snacks." action={<ArrowForwardIosIcon fontSize="small"  /> } />
                </div> */}

                {
                    this.state.posts.map(data => {
                        // console.log(data)
                        return(
                            <Link to = {`/questions/answer/${data.id}`} style = {{textDecoration : "none"}} ><QuaComponent key = {data.id} data = {data} /></Link>
                        )
                    })
                }

                                {/* {
                    this.state.posts.map(title => {
                        return(
                            <div className={useStyles.root}>
                            <SnackbarContent className={useStyles.snackbar} message={title.title} action={<ArrowForwardIosIcon fontSize="small"  /> } />
                            <br></br>
                        </div>
                        )
                    })
                } */}


                {/* <br></br>

                <div className={useStyles.root}>
                    <SnackbarContent className={useStyles.snackbar} message="I love snacks." action={<ArrowForwardIosIcon fontSize="small"  /> } />
                </div>

                
                <br></br>

                <div className={useStyles.root}>
                    <SnackbarContent className={useStyles.snackbar} message="I love snacks." action={<ArrowForwardIosIcon fontSize="small"  /> } />
                </div>

                
                <br></br>

                <div className={useStyles.root}>
                    <SnackbarContent className={useStyles.snackbar} message="I love snacks." action={<ArrowForwardIosIcon fontSize="small"  /> } />
                </div>

                <br></br>

                    <div className={useStyles.root}>
                        <SnackbarContent className={useStyles.snackbar} message="I love snacks.I love snacks.I love snacks.I love snacks.I love snacks." action={<ArrowForwardIosIcon fontSize="small"  /> } />
                    </div>


                    <br></br>

                    <div className={useStyles.root}>
                        <SnackbarContent className={useStyles.snackbar} message="I love snacks." action={<ArrowForwardIosIcon fontSize="small"  /> } />
                    </div>


                    <br></br>

                    <div className={useStyles.root}>
                        <SnackbarContent className={useStyles.snackbar} message="I love snacks." action={<ArrowForwardIosIcon fontSize="small"  /> } />
                    </div> */}


            </div>
        )
    }
}


export default Qua