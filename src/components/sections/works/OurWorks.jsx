import Slider from 'react-slick';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Container from "../../container/Container";
import DescriptionText from "../../descriptionText/DescriptionText";
import TitleText from "../../titleText/TitleText";
import NextArrow from "../../slider/NextArrow";
import PrevArrow from "../../slider/PrevArrow";
import WorksCard from "./worksCards/WorksCard";

import firstSlideImageDesktop from '../../../assets/worksCardImages/uiSoup-desktop.png';
import firstSlideImageMobile from '../../../assets/worksCardImages/uiSoup-mobile.png';

import secondSlideImageDesktop from '../../../assets/worksCardImages/goldcrownLabs-desktop.png';
import secondSlideImageMobile from '../../../assets/worksCardImages/goldcrownLabs-mobile.png';

import styles from './ourWork.module.scss';
const OurWorks = () => {

    const slides = [
        {
            id: 1,
            title: 'UI Soup',
            icon: firstSlideImageDesktop,
            iconMobile: firstSlideImageMobile,
        },
        {
            id: 2,
            title: 'Goldcrown Labs',
            icon: secondSlideImageDesktop,
            iconMobile: secondSlideImageMobile,
        },
        {
            id: 3,
            title: 'UI Soup',
            icon: firstSlideImageDesktop,
            iconMobile: firstSlideImageMobile,
        },
        {
            id: 4,
            title: 'Goldcrown Labs',
            icon: secondSlideImageDesktop,
            iconMobile: secondSlideImageMobile,
        },
    ];

    const settings = {
        lazyLoad: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
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
                        Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </DescriptionText>
                </div>
                <Slider {...settings}>
                    {
                        slides.map((slide) => (
                            <div key={slide.id}>
                                <WorksCard {...slide} />
                            </div>
                        ))
                    }
                </Slider>
            </Container >
        </div >
        </AnimationOnScroll>

    );
};

export default OurWorks;