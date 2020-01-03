import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import CardDesign from './Card'


class Catagories extends React.Component{
    render(){
        return(
            <div>
                <CardDesign />
                <br></br>
                <CardDesign />
                <br></br>
                <CardDesign />
                <br></br>
                <CardDesign />
            </div>
        )
    }
}

export default Catagories


// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
//   palette: {
//     type: "dark"
//   }
// });



// export default function MediaCard() {
//   const classes = useStyles();

//   return (

//   );
// }
