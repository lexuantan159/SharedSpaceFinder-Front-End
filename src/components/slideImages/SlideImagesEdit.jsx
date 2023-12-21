import React, {useEffect, useState} from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideImagesEdit = ({images}) => {
    console.log(images)

    const [thisImage, setThisImage] = useState({})
    useEffect(() => {
        setThisImage(images[0])
    }, [])



  return (
    
    <div className="flex gap-4 items-center col-span-8 my-5">
        {
            images.map((image) => {
                return (
                    <div key={image?.imageId} className="relative w-1/3 h-1/3">
                        <img onMouseOver={() => setThisImage(image)}
                             className="w-full h-[150px] object-Cover rounded transition-all hover:border-2 hover:border-primaryColor hover:cursor-pointer"
                             src={image?.imageUrl} alt={image?.imageId}/>
                        <span title="Xóa ảnh" className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full">
                            <RiDeleteBack2Line />
                        </span>
                    </div>
                )
            })
        }
</div>
  )
}

export default SlideImagesEdit