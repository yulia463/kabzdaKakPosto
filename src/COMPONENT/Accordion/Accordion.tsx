import React from "react";

export function Accordion( props:any) {
    console.log("Accordion rendering")
    if(props.callapsed===true){
        return (
            <AccordionTitle title={props.title}/>
        )
    }
    return (
        <div>
        <AccordionTitle title={ props.title}/>
    <AccordionBody/>
        </div>
)

}
type AccordionPropsType={
    titleValue:string
}
type AccordionTitlePropsType={
    title:string
}
function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3> {props.title} </h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )

}