import React, {useState} from "react";



export function UnControllRating() {
    let[value,setValue]=useState<0|1|2|3|4|5>(0)
    console.log("Rating rendering")
    return (<div>
        <Star onClick={()=>{setValue(1)}} selected={value > 0}/>
        <Star onClick={()=>{setValue(2)}} selected={value > 1}/>
        <Star onClick={()=>{setValue(3)}} selected={value > 2}/>
        <Star onClick={()=>{setValue(4)}} selected={value > 3}/>
        <Star onClick={()=>{setValue(5)}} selected={value > 4}/>
    </div>)

}

type StarPropsType = {
    selected: boolean
    onClick:()=> void
}

function Star(props: StarPropsType) {
    console.log(`Star rendering`)

    if (props.selected === true) {
        return <span onClick={props.onClick}><b>star</b></span>
    } else {
        return <span onClick={props.onClick}>star</span>
    }
}
//     return <span>{props.selected ? <b>star</b> : 'star'}</span>
// }

export default UnControllRating;