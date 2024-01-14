import TitleText from '../../titleText/TitleText';
import DescriptionText from '../../descriptionText/DescriptionText';
import quotes from '../../../assets/quoteImg.svg';
import styles from './testimonial.module.scss';

const Testimonial = () => {

    const testimonialCard = [
        {
            id: 1,
            description: <DescriptionText />,
            author: 'UI Soup'
        },
        {
            id: 2,
            description: <DescriptionText />,
            author: 'UI Soup'
        },
    ]

    return (
        <>
            <TitleText
                primaryText='Our Testimonials '
                secondaryText='What Our Clients Are '
                underlineText='Saying'
                className={styles.titleTextStyles}
            />
            <div className={styles.testimonialWrapper}>
                {
                    testimonialCard.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <img src={quotes} alt="Testimonial quotes" className={styles.quotesStyle}/>
                            <DescriptionText className={styles.desrcText}>
                                Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                            </DescriptionText>
                            <span className={styles.authorStyles}>{item.author}</span>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Testimonial;