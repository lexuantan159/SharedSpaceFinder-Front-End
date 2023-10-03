import {LayoutHome} from "../../layouts";
import TitlePart from "../../components/titlePart/TitlePart";
import Categories from "../../components/categories/Categories";

import React from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideShow from "../../components/slideShow/SlideShow";
import Slider from "react-slick";
import Space from "../../components/space/Space";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";

const Home = () => {


    return (
        <div className="">
            <div className="container mx-auto mt-4 sm:w-[1400px] w-auto">
                <img className="w-full h-[300px] object-cover"
                     src="https://png.pngtree.com/background/20230527/original/pngtree-modern-highquality-exterior-render-of-a-modern-house-with-glass-windows-picture-image_2766516.jpg"
                     alt="introduce"/>
            </div>
            {/*categories*/}
            <TitlePart title="Danh Mục" subTitle="Lựa Chọn Nhanh Chóng"
                       subDesc="Khám phá đa dạng vô tận: Danh mục định hình thế giới"/>

            <Categories/>
            {/*    */}
            <TitlePart title="Không Gian Nổi Trội" subTitle="Lựa Chọn Nhanh Chóng"
                       subDesc="Khám phá đa dạng vô tận: Danh mục định hình thế giới"/>

            <SlideShow typeSlide='space'/>

            {/*feedback*/}
            <div className="py-12 bg-[#F7F8F9]">
                <TitlePart title="Phản Hồi Của Khách Hàng" subTitle="Lựa Chọn Nhanh Chóng"
                           subDesc="Khám phá đa dạng vô tận: Danh mục định hình thế giới"/>

                <SlideShow typeSlide='feedback'/>
            </div>

        </div>
    )
}

export default Home;
