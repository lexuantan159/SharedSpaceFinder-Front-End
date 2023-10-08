import React, {useState} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideImages = () => {

    const images = [
        {
            imgId: 1,
            imgUrl: "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2022-5.jpg",
            imaName: "trọ"
        }, {
            imgId: 2,
            imgUrl: "https://nha.net.vn/wp-content/uploads/2020/06/Cai-tao-phong-tro.3.jpg",
            imaName: "trọ"
        },
        {
            imgId: 3,
            imgUrl: "https://cdnnews.mogi.vn/news/wp-content/uploads/2022/03/Cai-tao-phong-tro-cu.jpg",
            imaName: "trọ"
        },
        {
            imgId: 4,
            imgUrl: "https://cdnnews.mogi.vn/news/wp-content/uploads/2022/03/Cai-tao-phong-tro-cu.jpg",
            imaName: "trọ"
        },
        {
            imgId: 5,
            imgUrl: "https://vanphongchothue.vn/uploads/noidung/images/phong%201.jpg",
            imaName: "trọ"
        }, {
            imgId: 6,
            imgUrl: "https://vanphongchothue.vn/uploads/noidung/images/phong%201.jpg",
            imaName: "trọ"
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 5,
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
                    slidesToShow: 5,
                    slidesToScroll: 2
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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

    const [thisImage, setThisImage] = useState(images[0])
    return (
        <div className="">
            <div className="rounded w-full h-[400px] shadow overflow-hidden">
                <img className="rounded w-full h-full object-cover transition-all hover:cursor-pointer hover:scale-110"
                     src={thisImage.imgUrl}
                     alt={thisImage.imaName}/>
            </div>
            <div className="col-span-8 my-5">
                <Slider {...settings}>
                {
                    images.map((image) => {
                        return (
                            <div className="pr-5">
                                <img onMouseOver={() => setThisImage(image)} key={image.imgId}
                                     className="w-full h-[100px] object-cover rounded transition-all hover:border-2 hover:border-primaryColor hover:cursor-pointer"
                                     src={image.imgUrl} alt={image.imaName}/>
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