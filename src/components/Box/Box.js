import React from 'react'
import classes from './Box.module.css'

const box = (props)=>{
    return (
        <div className = {classes.item}>
            <div>
                {props.value}
            </div>
        </div>
    )
}

export default box;