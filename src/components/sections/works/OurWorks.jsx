import Container from "../../container/Container";
import DescriptionText from "../../descriptionText/DescriptionText";
import TitleText from "../../titleText/TitleText";

import styles from './ourWork.module.scss';
const OurWorks = () => {
    return (
        <div className={styles.ourWorksWrapper}>
            <Container>
                <div className={styles.titleWrapper}>
                    <TitleText
                        primaryText='Our Recent Work '
                        secondaryText='By Our '
                        underlineText='Experts'
                        className={styles.ourWorkText}
                    />
                    <DescriptionText className={styles.descriptionText}>
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </DescriptionText>
                </div>
            </Container>
        </div>

    );
};

export default OurWorks;