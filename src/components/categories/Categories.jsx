import {Link} from "react-router-dom";

const Categories = () => {

    const Categories = [
        {
            categoryId: 1,
            categoryName: "Phòng Trọ",
            imageUrl: "https://afamilycdn.com/2017/photo-1-1507000784256.jpg",
            quantity: 162,
        }
        ,
        {
            categoryId: 2,
            categoryName: "Văn Phòng",
            imageUrl: "https://afamilycdn.com/2017/photo-1-1507000784256.jpg",
            quantity: 112,
        },
        {
            categoryId: 3,
            categoryName: "Nhà Ở",
            imageUrl: "https://afamilycdn.com/2017/photo-1-1507000784256.jpg",
            quantity: 142,
        },
        {
            categoryId: 4,
            categoryName: "Mặt Bằng",
            imageUrl: "https://afamilycdn.com/2017/photo-1-1507000784256.jpg",
            quantity: 12,
        },
        {
            categoryId: 5,
            categoryName: "Căn Hộ",
            imageUrl: "https://afamilycdn.com/2017/photo-1-1507000784256.jpg",
            quantity: 111,

        },
        {
            categoryId: 6,
            categoryName: "Chung Cư",
            imageUrl: "https://afamilycdn.com/2017/photo-1-1507000784256.jpg",
            quantity: 132,

        }]
    return (
        <>
            <div
                className=" max-w-[1200px] mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 my-12">

                {
                    Categories.map(category => {
                        return (
                            <Link to="/spaces" key={category.categoryId}>
                                <div className="h-[250px] relative group rounded-xl hover:shadow-lg overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover rounded-xl transition-all group-hover:rotate-6 group-hover:scale-125 group-hover:transform group-hover:origin-center "
                                        src={category.imageUrl}
                                        alt={category.categoryName}/>
                                    <div
                                        className="absolute bg-black opacity-60 top-0 left-0 right-0 bottom-0 rounded-xl transition-all group-hover:top-3 group-hover:left-3 group-hover:bottom-3 group-hover:right-3"></div>
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                                        <p className="block font-bold text-xl">{category.categoryName}</p>
                                        <span className="">{category.quantity} Phòng</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
            <div className="container mx-auto my-2 text-center">
                <Link to="/spaces"
                      className="inline-block px-8 py-2 rounded-xl border-2 border-primaryColor font-semibold transition-all hover:bg-primaryColor hover:text-white hover:shadow-primaryColor hover:shadow ">View
                    All</Link>
            </div>
        </>
    )


}

export default Categories