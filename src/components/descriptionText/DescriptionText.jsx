import PropTypes from 'prop-types';

import styles from './descriptionText.module.scss'

const DescriptionText = ({ children, className }) => {

    return (
        <p className={`${styles.descriptionText} ${className}`}>
            {children}
        </p>
    );
};

DescriptionText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};


export default DescriptionText;