import React from 'react';

const withClassAnother = (WrappedComponent, classNamed) => {
	return (props) => {
		// console.log({ ...props });
		return (
			<div className={classNamed}>
				<WrappedComponent {...props} />
			</div>
		);
	};
};

export default withClassAnother;
