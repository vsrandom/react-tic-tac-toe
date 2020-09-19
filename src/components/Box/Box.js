import React from 'react'
import classes from './Box.module.css'

const box = (props)=>{
    return (
        <div className = {classes.item} onClick = {props.click}>
            <div>
                {props.value}
            </div>
        </div>
    )
}

export default box;