import aboutImage from '../../../assets/aboutAssets/friendsImg.png';
import Button from '../../button/Button';
import DescriptionText from '../../descriptionText/DescriptionText';
import TitleText from '../../titleText/TitleText';

import { AnimationOnScroll } from 'react-animation-on-scroll';

import styles from './about.module.scss';

const About = () => {
    return (
        <>
            <div className={styles.aboutSectionWrapper}>
                <div className={styles.aboutImageWrap}>
                    <img src={aboutImage} alt="aboutImage" className={styles.img} />
                </div>
                <div className={styles.aboutTextWrap}>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <TitleText
                            primaryText='About Us '
                            secondaryText='Fake or '
                            underlineText='Real'
                            className={styles.titleTextStyles}
                        />
                    </AnimationOnScroll>
                    <DescriptionText>
                        Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </DescriptionText>
                    <DescriptionText>
                        Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </DescriptionText>
                    <div className={styles.buttonInAboutSectionStyle}>
                        <Button isLink={true} styleType='primary'>explore more</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;