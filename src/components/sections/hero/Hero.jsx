import TitleText from '../../titleText/TitleText';
import heroImage from '../../../assets/hero-section-image.png';

import styles from './hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.heroSectionWrapper}>
            <div className={styles.heroSectionText}>
                <TitleText text='We Help you ' span='to grow your ' underlineSpan='Business' textSize='87px' />
                <p className={styles.description}>
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <img src={heroImage} alt="hero" className={styles.heroImageMask} />
        </div>
    );
};

export default Hero;