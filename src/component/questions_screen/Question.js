import React from 'react'
import Navbar from '../Navbar'
import Qua from './Qua'

import {
    Container
  } from "@material-ui/core";
  

class Questions extends React.Component{

    constructor(){
        super()
        this.state = {
            back : true
        }
    }

    render(){
        return(
            <div>
                <Navbar back = {this.state.back} />   
                <Container>
                    <br></br>
                    <br></br>
                    <br></br>
                <Qua />
                </Container>
            </div>
        )
    }
}

export default Questions