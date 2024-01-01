import {createContext} from 'react';
import {toast} from 'react-toastify';

const MethodContext = createContext({});

export const MethodProvider = ({children}) => {
    const notify = (message, type) => {
        const toastType = type === 'success' ? toast.success : toast.error;
        return toastType(message);
    };

    const toastLoadingId = (message) => {
        return toast.loading(message);
    };

    const toastUpdateLoadingId = (message, status, idLoading) => {
        if (status === 'success') {
            toast.update(idLoading, {
                render: message,
                type: 'success',
                isLoading: false,
                autoClose: true,
                closeButton: 'close',
            });
        } else {
            toast.update(idLoading, {
                render: message,
                type: 'error',
                isLoading: false,
                autoClose: true,
                closeButton: 'close',
            });
        }
    };

    const filteredKeyNull = (state) => {
        // Filters out null or undefined values from the object
        return Object.fromEntries(
            Object.entries(state).filter(([_, value]) => value !== null && value !== undefined)
        );
    }

    const cutOverLetter = (string, limit) => {
        const dots = "...";
        if(string.hasOwnProperty("length"))
            if (string.length > limit) {
                // you can also use substr instead of substring
                string = string.substring(0, limit) + dots;
            }
        return string;
    }

    const formatNumber = (number) => {
        if (typeof number === 'number' && !isNaN(number)) {
            const formattedString = number.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            return formattedString.replace(/\.00$/, '');
        }
    }

    return (
        <MethodContext.Provider value={{notify, toastLoadingId, toastUpdateLoadingId , filteredKeyNull ,formatNumber ,cutOverLetter}}>
            {children}
        </MethodContext.Provider>
    );
};

export default MethodContext;