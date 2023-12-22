import React, {useEffect, useState} from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideImagesEdit = ({images}) => {

    const [thisImage, setThisImage] = useState({})
    useEffect(() => {
        setThisImage(images[0])
    }, [])
    const handleDeleteImage = async (e) => {
        // setThisImage(prev => prev?.filter(e => images?.id !== e));
       }


  return (
    
    <div className="flex gap-4 items-center col-span-8 my-5">
        {
            images.map((image) => {
                return (
                    <div key={image?.imageId} className="relative w-1/3 h-1/3">
                        <img onMouseOver={() => setThisImage(image)}
                             className="w-full h-[150px] object-Cover rounded transition-all hover:border-2 hover:border-primaryColor hover:cursor-pointer"
                             src={image?.imageUrl} alt={image?.imageId}/>
                        <span 
                        
                        title="Xóa ảnh" 
                        onClick={(e) => handleDeleteImage(image?.imageId)}
 
                        
                        className="absolute top-0 right-0 p-1 cursor-pointer hover:bg-green-600 rounded-md ">
                            <RiDeleteBack2Line 
                            
                            
                            size={23} color="black"/>
                        </span>
                    </div>
                )
            })
        }
</div>
  )
}

export default SlideImagesEdit