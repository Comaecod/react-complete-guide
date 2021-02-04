import React from 'react';

const withClass = (props) => <div className={props.ClassNamed}>{props.children}</div>;

export default withClass;
