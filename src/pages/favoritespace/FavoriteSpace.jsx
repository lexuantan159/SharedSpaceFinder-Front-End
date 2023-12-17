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
            <div className="py-4 border-b border-gray-200">
                <h1 className="text-2xl text-primaryColor font-semibold text-center">Không gian yêu thích</h1>
            </div>
            <div className="flex flex-col justify-between">
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
                        <p className="text-xl font-medium text-center text-primaryColor mt-5">
                            Không có phòng nào!
                        </p>
                }
                <div className="absolute bottom-0 left-5 right-5">
                    <Pagination state={state} setState={setState} />
                </div>
            </div>
        </div>
    );
};

export default FavoriteSpace;
