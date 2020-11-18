import React from 'react'
import { useEffect, useState } from 'react'

export const Main = () => {
    // const [initalState, setInitalState] = useState({})

    // useEffect(() => {
    //     fetch('/api/').then((res) => {
    //         if (res.ok) {
    //             return res.json()
    //         }
    //     }).then((jsonResponse => setInitalState(jsonResponse)))
    // }, [])


    // console.log(initalState)
    // if(initalState.main){
    //     return(
    //         <div>
    //             {initalState.main.map((e, i) => <li key={i}>{e}</li>) }
    //         </div>
    //     )
    // } else{
    //     return(
    //         <div></div>
    //     )
    // }

    return(
        <div>
            <h1>Hello Social Justice Warrior!</h1>
        </div>
    )
}