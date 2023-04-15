import React from "react";

function Name(props){
    return <h2>I'm a {props.name}</h2>;
}

function Student(){
    return (
        <>
            <Name name="Gachon" />
        </>
    );
}

export default Student;