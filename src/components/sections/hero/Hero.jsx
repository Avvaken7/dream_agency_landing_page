import TitleText from '../../titleText/TitleText';
import DescriptionText from '../../descriptionText/DescriptionText';
import ContainerFluid from '../../container/ContainerFluid';
import Container from '../../container/Container';
import Button from '../../button/Button';

import heroImage from '../../../assets/hero-section-image.png';

import styles from './hero.module.scss';

const Hero = () => {
    return (
        <ContainerFluid className={styles.stickyBackground}>
            <Container>
                <div className={styles.heroSectionWrapper}>
                    <div className={styles.heroSectionText}>
                        <TitleText
                            primaryText='We Help you '
                            secondaryText='to grow your '
                            underlineText='Business'
                            className={styles.titleWrapper}
                        />
                        <DescriptionText>
                            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </DescriptionText>
                        <Button isLink={true} styleType={'primary'}>get started</Button>
                    </div>
                    <img src={heroImage} alt="hero" className={styles.heroImageMask} />
                </div>
            </Container>
        </ContainerFluid>
    );
};

export default Hero;