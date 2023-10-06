
import TitlePart from "../../components/titlePart/TitlePart";
import Categories from "../../components/categories/Categories";
import React from "react";
import SlideShow from "../../components/slideShow/SlideShow";

const Home = () => {


    return (
        <div className="">
            <div className="max-w-[1200px] mx-auto px-10 mt-4 text-center">
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
