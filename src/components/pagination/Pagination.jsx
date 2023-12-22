import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";


const Pagination = ({state, setState , numberPage = 5}) => {

    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error
        return toastType(message);
    }
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if(state.page === 1) {
            setCurrentPage(state.page)
        }
    }, [state])

    const handlePageClick = (pageNumber) => {
        if(pageNumber < 1 ) {
            notify('Không tồn tại trang bé hơn 1!', "error")
            return;
        }
        if(pageNumber > numberPage ) {
            notify('Số trang đã tối đa!', "error")
            return;
        }
        setState((prevState) => ({
            ...prevState,
            page: pageNumber,
        }))
        setCurrentPage(pageNumber);
    };


    const renderPageButtons = () => {
        const pageButtons = [];
        for (let i = 1; i <= numberPage; i++) {
            if (i === 6) {
                pageButtons.push(
                    <li key={i} className={`mx-2`}>
                        <button
                            className={`px-3 py-1 border-[0.5px] border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg ${currentPage >= i ? 'bg-primaryColor text-white' : ''}`}
                        >
                            {"..."}
                        </button>
                    </li>
                );
                break;
            }
            pageButtons.push(
                <li key={i} className={`mx-2`}>
                    <button
                        className={`px-3 py-1 border-[0.5px] border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg ${currentPage === i ? 'bg-primaryColor text-white' : ''}`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </button>
                </li>
            );
        }
        return pageButtons;
    };





    return (
        <div className="col-span-12 flex justify-between mb-9 ">
            <button
                className="px-3 py-1 border-[0.5px] group border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg"
                onClick={() => handlePageClick(state.page - 1)}>
                <FontAwesomeIcon className="text-gray-400 transition-all group-hover:text-white" icon={faAngleLeft}/>
            </button>
            <ul className="hidden md:flex ">
                {renderPageButtons()}
            </ul>
            <button
                className="px-3 py-1 border-[0.5px] group border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg"
                onClick={() => handlePageClick(state.page + 1)}
            >
                <FontAwesomeIcon className="text-gray-400 transition-all group-hover:text-white" icon={faAngleRight}/>
            </button>
        </div>
    )
}

export default Pagination