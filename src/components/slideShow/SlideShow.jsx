import React from "react";
import Space from "../space/Space";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Feedback from "../feedback/Feedback";


const SlideShow = ({typeSlide = "space"}) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        cssEase: 'linear',
        touchThreshold: 100,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const renderSlides = () => {
        if (typeSlide === "space") {
            return [
                <Space key={1}/>,
                <Space key={2}/>,
                <Space key={3}/>,
                <Space key={4}/>,
                <Space key={5}/>
            ]
        } else if (typeSlide === "feedback") {
            return [
                <Feedback key={6}/>,
                <Feedback key={7}/>,
                <Feedback key={8}/>,
                <Feedback key={9}/>
            ];
        } else {
            // Một xử lý mặc định nếu typeSlide không phải là "space" hoặc "feedback"
            return [];
        }
    }


    return (
        <div className="max-w-[1200px] mx-auto my-9 px-10">
            <Slider {...settings}>
                {renderSlides()}
            </Slider>
        </div>
    )
}

export default SlideShow