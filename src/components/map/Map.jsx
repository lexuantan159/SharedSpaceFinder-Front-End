import React, {useMemo} from "react";
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';

const Map = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })


    const center = useMemo(()=> {
       return {lat: 44, lng: -88}
    }, [])
    if (!isLoaded) return <div>Loading....</div>


    return (
        <>
            <GoogleMap zoom={10} center={center} mapContainerClassName="w-full h-full">
                <Marker position={center}></Marker>
            </GoogleMap>
        </>
    )
}

export default Map;