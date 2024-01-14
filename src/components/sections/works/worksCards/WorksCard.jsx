import PropTypes from 'prop-types';
import Button from '../../../button/Button';

import styles from './worksCard.module.scss';

const WorksCard = ({ id, title, icon, iconMobile }) => {

    return (
        <div key={id} className={styles.cardWrapper}>
            <img src={icon} alt={title} className={styles.cardImageDesktop} />
            <img src={iconMobile} alt={title} className={styles.cardImageMobile} />
            <h3 className={styles.cardTitle}>{title}</h3>
            <Button isLink={true} styleType='secondary' className={styles.button}>View Work</Button>
        </div>
    );
};

WorksCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    icon: PropTypes.string,
    iconMobile: PropTypes.string,

};

export default WorksCard;