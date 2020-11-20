import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 60%;
	margin: 16px auto;
	border: 2px solid #fff;
	padding: 16px;
	text-align: center;
	box-shadow: 0 2px 2px #222;

	@media (min-width: 500px) {
		width: 450px;
	}
`;

const person = (props) => (
	<StyledDiv>
		<p onClick={props.clicked}>
			I am from {props.name} and I am {props.age} years old
		</p>
		<p>{props.children}</p>
		<input type='text' onChange={props.changed} value={props.name} />
	</StyledDiv>
);

export default person;
