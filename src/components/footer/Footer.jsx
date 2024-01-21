import Container from '../container/Container';
import NavbarLogo from '../navbar/navbarLogo/NavbarLogo';
import DescriptionText from '../descriptionText/DescriptionText';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import mapImage from '../../assets/footerMap.webp';

import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <Container>
                <div className={styles.footerContent}>
                    <div className={styles.footerText}>
                        <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn' delay={600}>
                            <NavbarLogo className={styles.footerLogo} />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn' delay={800}>
                            <DescriptionText className={styles.footerDesciption}>
                                Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                            </DescriptionText>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn' delay={1000}>
                            <a href='/' className={styles.footerLink}>Get In Touch</a>
                            <form action="/" className={styles.form}>
                                <input type="email" name="name" id="getName" placeholder='Enter Your Email' autoComplete="on" />
                                <button type='submit'>Send</button>
                            </form>
                        </AnimationOnScroll>
                    </div>
                    <div className={styles.footerMapContent}>
                        <img src={mapImage} alt="google street map" className={styles.mapImageStyle} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;