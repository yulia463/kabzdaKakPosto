import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick:()=>void
}
type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle onClick={props.onClick} title={props.title}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={props.onClick}> {props.title} </h3>
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