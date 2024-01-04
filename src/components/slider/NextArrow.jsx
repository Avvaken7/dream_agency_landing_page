import PropTypes from 'prop-types';
import nextArrow from '../../assets/sliderArrows/nextArrow.svg';

import styles from './arrows.module.scss';

const NextArrow = (props) => {


    return (
        <div className={styles.nextArrow} onClick={props.onClick} >
            <img src={nextArrow} alt="next Arrow image" />
        </div >
    );
};

NextArrow.propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object
};

export default NextArrow;