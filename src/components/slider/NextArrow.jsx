import PropTypes from 'prop-types';
import nextArrow from '../../assets/sliderArrows/nextArrow.svg';

import styles from './arrows.module.scss';

const NextArrow = ({ onClick }) => {

    return (
        <div className={styles.nextArrow} onClick={onClick}>
            <img src={nextArrow} alt="next Arrow image" />
        </div >
    );
};

NextArrow.propTypes = {
    onClick: PropTypes.func,
};

export default NextArrow;