import React from 'react'

import classes from './Draw.module.css'
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(cs)
//     },1000)
// })

// async function fun(){
//     cs = await promise;
//     cs.push(classes.showDraw) 
// }

// const fun = (cb)=>{
//     setTimeout(()=>{
//         cb(classes.showDraw)
//     },1000)
// }


const draw = (props)=>{
    let cs = [classes.draw]
    // console.log(props.winner, props.clicks)
    if(props.winner === "None" && props.clicks === 9) 
    {
        cs.push(classes.showDraw)
    }
    return (
        <div className = {cs.join(' ')}>
            <div>
                DRAW :/
            </div>
        </div>
    )

}

export default draw