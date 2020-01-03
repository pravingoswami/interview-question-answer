import React from 'react'
import Navbar from './component/Navbar'
import Catagories from './component/Catagories'
import {
    Container
  } from "@material-ui/core";
  



class Home extends React.Component{

    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <div>


                        {/* <Navbar url = "/" /> */}
                        <Navbar />

                    </div>
                    <div>

                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>

                    <Container>
                    <Catagories />


                    </Container>
                        </div>
            </div>
        )
    }
}

export default Home