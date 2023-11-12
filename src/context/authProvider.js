import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});


    useEffect(() => {
        const myDataString = localStorage.getItem('auth');
        if ( myDataString !== null ) {
            const myDataObject = JSON.parse(myDataString);
            setAuth(myDataObject);
        }else {
            setAuth({});
        }
    },[]);

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;