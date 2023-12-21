import PropTypes from 'prop-types';
import styles from './titleText.module.scss';

const TitleText = ({ text, span, textSize, underlineSpan }) => {

    return (
        <>
            <p className={styles.heroTextBlock} style={{ fontSize: textSize }}>
                <span className={styles.strongText}>{text}</span>
                <span>{span}</span>
                <span className={styles.underlineSpan}>{underlineSpan}</span>
            </p>
        </>
    )

};


TitleText.propTypes = {
    children: PropTypes.node,
    textSize: PropTypes.string,
    text: PropTypes.string,
    span: PropTypes.string,
    underlineSpan: PropTypes.string,
};

export default TitleText;