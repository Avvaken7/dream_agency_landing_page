import PropTypes from 'prop-types';

import styles from './servicesCard.module.scss';

const ServicesCard = ({ id, title, description, icon, iconColor }) => {

    return (
        <a href='/' key={id} className={styles.card}>
            <img
                src={icon}
                alt={title}
                className={styles.cardImage}
                style={{ backgroundColor: iconColor }}
            />
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    );
};

ServicesCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,

};

export default ServicesCard;