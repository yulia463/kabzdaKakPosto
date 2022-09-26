import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    console.log("Accordion rendering")

    // const collapsed=false;
    let [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={() => {
                            setCollapsed(!collapsed)
                        }}/>

        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
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

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>--{props.title} --</h3>
    )
};


