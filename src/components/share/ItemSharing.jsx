import React from "react";

const ItemSharing = ({itemSharing}) => {

    return (
        <div className="flex justify-start my-3">
            <img className="w-[40px] h-[40px] rounded-full mr-4"
                 src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                 alt="customer"></img>
            <div className="p-2 w-full bg-gray-100 rounded-lg">
                <p className="font-semibold text-lg">{itemSharing?.userId?.name}</p>
                <p className="">{itemSharing?.infoSharing}</p>
            </div>
        </div>
    )
}

export default ItemSharing