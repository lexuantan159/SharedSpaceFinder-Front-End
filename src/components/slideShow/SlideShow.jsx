import React from "react";
import Space from "../space/Space";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Feedback from "../feedback/Feedback";
import TitlePart from "../titlePart/TitlePart";


const SlideShow = ({typeSlide = "space" , typeSpace="none", titlePart , background = false}) => {

    const settings = {
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
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 768,
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
                <Space key={1} typeSpace={typeSpace}/>,
                <Space key={2} typeSpace={typeSpace}/>,
                <Space key={3} typeSpace={typeSpace}/>,
                <Space key={4} typeSpace={typeSpace}/>,
                <Space key={5} typeSpace={typeSpace}/>
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
        <div className={`${background ? "py-12 bg-[#F7F8F9]" : ""}`}>
            <TitlePart title={titlePart} subTitle="Lựa Chọn Nhanh Chóng"
                       subDesc="Khám phá đa dạng vô tận: Danh mục định hình thế giới"/>
            <div className="max-w-[1200px] mx-auto my-24 px-10">
                <Slider {...settings}>
                    {renderSlides()}
                </Slider>
            </div>
        </div>
    )
}

export default SlideShow