import React from 'react'
import classes from './Layout.module.css'
import logo from '../../assets/GitHub-Mark.png'
import {NavLink} from 'react-router-dom'

const layout = (props)=>{
    return(
        <div className = {classes.layout}>
            <div>
            <NavLink className = {classes.nlink} to="/" exact activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}> HOME </NavLink>
            </div>
            <div>
                <div>
                    <a href = "https://www.github.com/vsrandom" ><img src = {logo}/> </a>
                </div>
            </div>
        </div>
    )
}

export default layout