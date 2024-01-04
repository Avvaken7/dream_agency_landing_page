import PropTypes from 'prop-types';
import nextArrow from '../../assets/sliderArrows/nextArrow.svg';

import styles from './arrows.module.scss';
const PrevArrow = (props) => {

    return (
        <div className={styles.prevArrow} onClick={props.onClick} >
            <img src={nextArrow} alt="prev Arrow image" />
        </div >
    );
};

PrevArrow.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func
};


export default PrevArrow;