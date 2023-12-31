import React, {useContext, useEffect, useState} from "react";
import ItemFavoriteSpace from "../../components/itemfavoritespace/ItemFavoriteSpace";
import Pagination from "../../components/pagination/Pagination";
import * as favouritesService from "../../services/favourite"
import AuthContext from "../../context/authProvider";
import {toast} from "react-toastify";

const FavoriteSpace = () => {
    const [favorites, setFavorites] = useState([])
    const [state, setState] = useState({
        status: 3,
        page: null,
        limit: null
    })
    const [deleteFavorite, setDeleteFavorite] = useState(false)
    const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error
        return toastType(message);
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('access-token');
        if (accessToken && accessToken !== "null") {
            // Lọc bỏ các giá trị null hoặc undefined khỏi object
            const filteredParams = Object.fromEntries(
                Object.entries(state).filter(([_, value]) => value !== null && value !== undefined)
            );
            const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
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
            <div className="flex flex-col justify-between max-h-[450px] overflow-y-scroll">
                {
                    favorites.length > 0 ? favorites.map(favorite => {
                            return (
                                < div key={favorite?.id} className="">
                                    <ItemFavoriteSpace favouriteItem={favorite} favouriteId={favorite.id}
                                                       accessToken={accessToken}
                                                       setDeleteFavourite={setDeleteFavorite}/>
                                </div>
                            )
                        }) :
                        <p className="text-xl font-medium text-center text-primaryColor mt-5">
                            Không có phòng nào!
                        </p>
                }
                <div className="absolute bottom-0 left-5 right-5">
                    <Pagination state={state} setState={setState} numberPage={7} />
                </div>
            </div>
        </div>
    );
};

export default FavoriteSpace;