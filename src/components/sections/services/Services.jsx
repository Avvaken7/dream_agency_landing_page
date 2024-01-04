import Slider from 'react-slick';
import ServicesCard from './servicesCard/ServicesCard';
import NextArrow from '../../slider/NextArrow';
import PrevArrow from '../../slider/PrevArrow';
import TitleText from '../../titleText/TitleText';

import marketing from '../../../assets/servicesIcons/marketing.svg';
import mobileApp from '../../../assets/servicesIcons/mobile_app_dev.svg';
import webDesign from '../../../assets/servicesIcons/web_design.svg';
import webDev from '../../../assets/servicesIcons/web_development.svg';

import styles from './services.module.scss';

const Services = () => {

    const slides = [
        {
            id: 1,
            title: 'Website Design',
            description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            icon: webDesign,
            iconColor: '#FFDED4',
        },
        {
            id: 2,
            title: 'Web Development',
            description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            icon: webDev,
            iconColor: '#FFEED4',
        },
        {
            id: 3,
            title: 'Mobile APP Development',
            description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            icon: mobileApp,
            iconColor: '#D4F0FF',
        },
        {
            id: 4,
            title: 'Marketing',
            description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            icon: marketing,
            iconColor: '#FFD4D4',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.servicesTitle}>
                <TitleText text='What We Do' span='For Your' underlineSpan='Business' textSize='48px' />
            </div>
            <Slider {...settings}>
                {
                    slides.map((slide) => (
                        <div key={slide.id}>
                            <ServicesCard {...slide} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Services;