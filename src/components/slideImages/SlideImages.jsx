import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideImages = ({images}) => {



    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: images.length < 5 ? images.length : 5,
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
                    slidesToShow: images.length < 5 ? images.length : 5,
                    slidesToScroll: 2
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:images.length < 3 ? images.length : 3,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: images.length < 2 ? images.length : 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [thisImage, setThisImage] = useState({})
    useEffect(() => {
        setThisImage(images[0])
    }, [])

    return (
        <div className="">
            <div className="rounded w-full h-[500px] shadow overflow-hidden">
                <img className="rounded w-full h-full object-cover transition-all hover:cursor-pointer hover:scale-110"
                     src={thisImage?.imageUrl}
                     alt={thisImage?.imageId}/>
            </div>
            <div className="col-span-8 my-5">
                <Slider {...settings}>
                {
                    images.map((image) => {
                        return (
                            <div key={image?.imageId} className="pr-5">
                                <img onMouseOver={() => setThisImage(image)}
                                     className="w-full h-[110px] object-cover rounded transition-all hover:border-2 hover:border-primaryColor hover:cursor-pointer"
                                     src={image?.imageUrl} alt={image?.imageId}/>
                            </div>
                        )
                    })
                }



                </Slider>
            </div>
        </div>
    )
}

export default SlideImages