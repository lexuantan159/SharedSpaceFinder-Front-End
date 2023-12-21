import React, {useState, useEffect} from "react";
import Space from "../space/Space";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Feedback from "../feedback/Feedback";
import TitlePart from "../titlePart/TitlePart";
import * as feedbackServices from "../../services/review"
import * as spaceServices from "../../services/spaces"


const SlideShow = ({typeSlide = "space", id = null,titlePart, background = false}) => {

    const [items, setItems] = useState([])
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

    const fetchTopRated = async () => {
        const responseTopRated = await spaceServices.getSpace({topRate: 4, limit:5})
        if(responseTopRated?.status === 200){
            const listSpace =  responseTopRated?.data?.listSpaces
            setItems(listSpace)
        }
    }

    const fetchFeedback = async () => {
        const responseFeedback = await feedbackServices.getListFeedback({rateFrom:4})
        if(responseFeedback?.status === 200){
            const listSpace =  responseFeedback?.data?.listFeedbacks
            setItems(listSpace)
        }
    }

    const fetchRelated = async () => {
        const responseRelated = await spaceServices.getSpace({categoryId: id})
        if(responseRelated?.status === 200){
            const listSpace =  responseRelated?.data?.listSpaces
            setItems(listSpace)
        }
    }
    console.log(typeSlide)

    useEffect(() => {
        if (typeSlide === "top rate"){
            fetchTopRated()
        }
        else if (typeSlide === "feedback") {
            console.log(typeSlide)
            fetchFeedback()
        }
        else{
            fetchRelated()
        }

    }, []);


    return (
        <div className={`${background ? "py-12 bg-[#F7F8F9]" : ""}`}>
            <TitlePart title={titlePart} subTitle="Lựa Chọn Nhanh Chóng"
                       subDesc="Khám phá đa dạng vô tận: Danh mục định hình thế giới"/>
            <div className="max-w-[1200px] mx-auto my-24 px-10">
                <Slider {...settings}>
                    {items.map(item => {
                        if(typeSlide === 'top rate' || typeSlide === 'relate')
                            return (<Space key={item?.id} spaceValue={item}/>)
                        else
                            return ( <Feedback key={item?.id} feedbackValue={item} />)
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default SlideShow