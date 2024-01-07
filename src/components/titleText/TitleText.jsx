import PropTypes from 'prop-types';
import styles from './titleText.module.scss';

const TitleText = ({ primaryText, secondaryText, underlineText, className }) => {

    return (
        <div className={className}>
            <p className={styles.strongText}>{primaryText}</p>
            <span>
                {secondaryText}
                <span className={styles.underlineText}>
                    {underlineText}
                </span>
            </span>

        </div>
    )

};


TitleText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    textSize: PropTypes.string,
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
    underlineText: PropTypes.string,
};

export default TitleText;