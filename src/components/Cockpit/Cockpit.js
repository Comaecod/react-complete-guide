import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
	const toggleBtnRef = useRef(null);

	const context = useContext(AuthContext);

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		const timer = setTimeout(() => {
			// alert('Customized useEffect() calling only once...');
			toggleBtnRef.current.click();
		}, 1000);

		console.log('[Cockpit.js] Context: ', context.authenticated);

		return () => {
			clearTimeout(timer);
			console.log('Cleanup work of useEffect');
		};
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('2nd cleanup work of useEffect');
		};
	});

	const new_class = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.personsLength <= 3) {
		new_class.push(classes.red);
	}
	if (props.personsLength <= 2) {
		new_class.push(classes.bold);
	}
	if (props.personsLength <= 1) {
		new_class.push(classes.font);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.cockpitTitle}</h1>
			<p className={new_class.join(' ')}>This is cool!</p>
			<button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
				Toggle Name
			</button>
			<button onClick={context.login}>Log In</button>
		</div>
	);
};

export default React.memo(cockpit);
