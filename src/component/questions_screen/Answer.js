import React from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom'

import Ans from './Ans'


class AnswerShow extends React.Component{

    constructor(){
        super()
        this.state = {
            data : {},
            back : true
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                const data = response.data
                console.log(data)
                this.setState({data})
            })
    }

    render(){
        return(
            <div>
                 <Navbar back = {this.state.back} /> 
                 <br></br>
                 <br></br>
                 <br></br>
                <Container>
                    <Ans data = {this.state.data} />
                </Container>
            </div>
        )
    }
}

export default AnswerShow