import Container from '../container/Container';
import NavbarLogo from '../navbar/navbarLogo/NavbarLogo';
import DescriptionText from '../descriptionText/DescriptionText';

import mapImage from '../../assets/footerMap.png';

import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerWrapper}>
                <Container>
                    <div className={styles.footerContent}>
                        <div className={styles.footerText}>
                            <NavbarLogo className={styles.footerLogo} />
                            <DescriptionText className={styles.footerDesciption}>
                                Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                            </DescriptionText>
                            <a href='/' className={styles.footerLink}>Get In Touch</a>
                            <form action="/" className={styles.form}>
                                <input type="email" name="name" id="getName" placeholder='Enter Your Email' />
                                <button type='submit'>Send</button>
                            </form>
                        </div>
                        <div className={styles.footerMapContent}>
                            <img src={mapImage} alt="google street map" />
                        </div>
                    </div>
                </Container>
            </div>

        </footer>
    );
};

export default Footer;