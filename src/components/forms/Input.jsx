import React from 'react';
import Styles from './input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
	return (
		<div className="{Styles.wrapper}">
			<label htmlFor={name} className={Styles.label}>
				{label}
			</label>
			<input className={Styles.input} id={name} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur}></input>
			{error && <p className={Styles.error}>{error}</p>}
		</div>
	);
};

export default Input;
