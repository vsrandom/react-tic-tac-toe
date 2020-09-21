import React from 'react'
import classes from './Box.module.css'

const box = (props)=>{
    const cs = [classes.item];
    if(props.hlt)
    {
        cs.push(classes.highlight)
    }
    return (
        <div className = {cs.join(' ')} onClick = {props.click}>
            <div>
                {props.value}
            </div>
        </div>
    )
}

export default box;