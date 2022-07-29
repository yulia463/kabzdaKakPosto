import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./COMPONENT/Accordion/Accordion";
import {Rating} from "./COMPONENT/Rating/Rating";

// function declaration
function App() {
    // что то делает полезное /обязанна вернуть JSX
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"Lolотл"} callapsed={true}/>
            <Accordion title={"leo"} callapsed={false}/>
            Article 2
            <Number number={5}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType ={
    title:string
}
function PageTitle(props: any) {

    return <h1>{props.title}</h1>
}
type NumberPropsType ={
    number:number
}
function Number(props:NumberPropsType){
    return(
<div>
    {props.number}
</div>
    )
}

export default App;
