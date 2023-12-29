import React, { useState} from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";

const SlideImagesEdit = ({images, setImagesDeleted = () => {}}) => {

    const [listImages, setListImages] = useState(images)

    const handleDeleteImage = async (imageId) => {
        setListImages(prev => prev.filter(image => image.imageId !== imageId));
        setImagesDeleted(prev => [...prev, imageId]);
    }

    return (

        <div className="flex gap-4 items-center col-span-8 my-5">
            {
                listImages.map((image) => {
                    return (
                        <div key={image?.imageId} className="relative w-[150px] h-[150px]">
                            <img
                                className="w-[150px] h-[150px] object-Cover rounded transition-all hover:border-2 hover:border-primaryColor hover:cursor-pointer"
                                src={image?.imageUrl} alt={image?.imageId}/>
                            <span
                                title="Xóa ảnh"
                                onClick={(e) => handleDeleteImage(image?.imageId)}
                                className="absolute top-0 right-0 p-1 cursor-pointer rounded-md ">
                            <FontAwesomeIcon icon={faX} className="text-red-600 font-bold p-2"/>
                        </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SlideImagesEdit