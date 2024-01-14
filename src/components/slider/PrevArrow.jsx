import PropTypes from 'prop-types';
import nextArrow from '../../assets/sliderArrows/nextArrow.svg';

import styles from './arrows.module.scss';
const PrevArrow = ({ onClick }) => {

    return (
        <div className={styles.prevArrow} onClick={onClick}>
            <img src={nextArrow} alt="prev Arrow image" />
        </div >
    );
};

PrevArrow.propTypes = {
    onClick: PropTypes.func
};


export default PrevArrow;