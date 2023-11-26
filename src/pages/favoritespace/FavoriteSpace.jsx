import React, {useContext, useEffect, useState} from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";
// import Footer from "../../components/footer/Footer";

// import HeaderManage from "../../components/header/HeaderManage";
import ItemFavoriteSpace from "../../components/itemfavoritespace/ItemFavoriteSpace";
import Pagination from "../../components/pagination/Pagination";
import * as favouritesService from "../../services/favourite"
import AuthContext from "../../context/authProvider";
import {toast} from "react-toastify";
import {accessToken} from "mapbox-gl";

const FavoriteSpace = () => {
    const [favorites, setFavorites] = useState([])
    const {auth} = useContext(AuthContext);
    const [state, setState] = useState({
        status: 3,
        page: null,
        limit: null
    })
    const [deleteFavorite, setDeleteFavorite] = useState(false)

    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error
        return toastType(message);
    }

    useEffect(() => {

        if (auth.hasOwnProperty('accessToken') || localStorage.getItem('auth')) {

            // Lọc bỏ các giá trị null hoặc undefined khỏi object
            const filteredParams = Object.fromEntries(
                Object.entries(state).filter(([_, value]) => value !== null && value !== undefined)
            );
            const accessToken = auth.accessToken
            const fetchFavorites = async () => {
                const responseFavorites = await favouritesService.getFavourite(filteredParams, accessToken)
                if (responseFavorites?.data?.status === 200) {
                    const listFavorites = responseFavorites?.data?.listFavourites
                    setFavorites(listFavorites)
                } else {
                    console.log(responseFavorites)
                }
            }

            fetchFavorites()
        } else {
            notify("Yêu cầu đăng nhập!", "error")
        }
    }, [state, deleteFavorite])


    return (
        <div>
            <h1 className="text-3x1 w-full border-b border-gray-200 py-4 text-start font-medium text-primaryColor mb-7">
                Không Gian Yêu Thích
            </h1>
            <div className="flex flex-col justify-between min-h-[550px]">
                {
                    favorites.length > 0 ? favorites.map(favorite => {
                            return (
                                < div key={favorite?.id}>
                                    <ItemFavoriteSpace spaceDetail={favorite} favouriteId={favorite.id}
                                                       accessToken={auth.accessToken || null}
                                                       setDeleteFavourite={setDeleteFavorite}/>
                                </div>
                            )
                        }) :
                        <p className="text-2xl py-4 font-medium text-center text-primaryColor min-h-[490px]">
                            Không có phòng nào!
                        </p>
                }
                <div className="text-end">
                    <Pagination state={state} setState={setState}/>
                </div>
            </div>
        </div>
    );
};

export default FavoriteSpace;
