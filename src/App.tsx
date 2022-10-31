import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./COMPONENT/Accordion/Accordion";
import {Rating, RatingValueType} from "./COMPONENT/Rating/Rating";
import OnOff from "./COMPONENT/OnOff/OnOff";
import {Calculator} from "./calculator/Calculator";
import {UnControlledAccordion} from "./COMPONENT/UnControlledAccordion/UnControlledAccordion";
import UnControllRating from "./COMPONENT/UnControllRating/UnControllRating";
import UncontrolledOnOff from "./COMPONENT/OnOff/UncontrolledOnOff";
// function declaration


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: any) {

    return <h1>{props.title}</h1>
}

type NumberPropsType = {
    number: number
}

function Number(props: NumberPropsType) {
    return (
        <div>
            {props.number}
        </div>
    )
}


function App() {
    let [ratingValue,setRatingValue]=useState<RatingValueType>(0);
    let [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(false)
    let [switchOn,setSwitchOn]=useState<boolean>(false)

    // что то делает полезное /обязанна вернуть JSX
    console.log("App rendering")
    return (
        <div className={"App"}>
            <OnOff  on={switchOn} onClick={(on)=>{setSwitchOn(on)}}/>

<UncontrolledOnOff />

            <UnControlledAccordion titleValue={"Meny"}/>
            <Accordion onClick={()=>{setAccordionCollapsed(!accordionCollapsed )}} title={"Meny1"} collapsed={accordionCollapsed} />
            {/*<UnControlledAccordion title={"Lolотл"} callapsed={true}/>*/}
            {/*<Accordion title={"leo"} callapsed={false}/>*/}
            <UnControllRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

        </div>
    );
}



export default App;
