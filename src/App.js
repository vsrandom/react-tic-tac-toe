import React from 'react'
import Game from './containers/Game'
import InputForm from './components/InputForm/InputForm'
import {Route, Switch} from 'react-router-dom' 
import Layout from './components/Layout/Layout'
import {Aux} from './components/hoc/Aux'

const App = (props)=>{
    return (
        <Aux>
            <Layout />
            <Switch>
            <Route path = "/game" exact component = {Game} />
            <Route path = "/" exact component = {InputForm} />
            </Switch>
        </Aux>
    )
}

export default App