import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './button.module.scss'

const Button = ({ children, styleType, isLink, className, ...rest }) => {
    const buttonClass = classNames(
        styles.button,
        {
            [styles.primary]: styleType === 'primary',
            [styles.secondary]: styleType === 'secondary',
            [styles.link]: isLink,
        }
    );

    return isLink ? (
        <a href="/" className={`${buttonClass} ${className}`} {...rest}>
            {children}
        </a>
    ) : (
        <button className={`${buttonClass} ${className}`} {...rest}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    styleType: PropTypes.oneOf(['primary', 'secondary']),
    isLink: PropTypes.bool,
    className: PropTypes.string,
};

Button.defaultProps = {
    styleType: 'primary',
    isLink: false,
};

export default Button;