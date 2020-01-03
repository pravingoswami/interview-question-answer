import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom'

import { ThemeProvider } from "@material-ui/styles";
import {
    CssBaseline,
    AppBar,
    Typography,
    createMuiTheme,
    Container
  } from "@material-ui/core";

import Home from './Home'
import Questions from './component/questions_screen/Question'
import AnswerShow from './component/questions_screen/Answer'
  

const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });



class App extends React.Component{

  constructor(){
    super()
  }


  render(){
    return(
      <div>
         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <ThemeProvider theme={theme}>
          <CssBaseline />

      <BrowserRouter>
        <div>
        <Link to = "/" ></Link>
        <Link to = "/questions" ></Link>
        
        </div>


        <Route path = '/' component = {Home} exact = {true} />
        <Route path = '/questions' component = {Questions} exact = {true} />
        <Route path = '/questions/answer/:id' component = {AnswerShow} exact = {true} />
        </BrowserRouter>

        </ThemeProvider>

      </div>
    )
  }
}

export default App;
