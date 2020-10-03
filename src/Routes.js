import React from 'react'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import Post from './PostComponent'


const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Post}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes