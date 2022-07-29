import React from "react";

export function Star(props: any)
// пропс говорит чем ты являешься что эни ничем конкретным
{
    console.log("Star rendered")

if(props.selected){
    return <span><b>star </b></span>
} else{
    return <span>star </span>
}

}