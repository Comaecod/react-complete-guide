import React from 'react';

const person = props => (
    <div>
        <p>I am from {props.name} and I am {props.age} years old</p>
        {/* <p>{props.children}</p> */}
    </div>    
);

export default person;