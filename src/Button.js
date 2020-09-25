import React from 'react';
import PropTypes from 'prop-types';

/**
 * The only true button.
 */
export default function Button({ color, size, children, ...rest }) {
	const styles = {
		color,
		fontSize: Button.sizes[size],
	};

	return (
		<button className="button" style={styles} {...rest}>
			{children}
		</button>
	);
}
Button.propTypes = {
	/**
	 * Button label.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
};
Button.defaultProps = {
	color: '#333',
	size: 'normal',
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
