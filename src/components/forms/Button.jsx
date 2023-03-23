import React from 'react';
import Styles from './button.module.css';

const Button = ({ children, ...props }) => {
	return (
		<button {...props} className={Styles.button}>
			{children}
		</button>
	);
};

export default Button;
