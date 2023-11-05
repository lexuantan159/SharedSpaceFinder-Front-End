import React, {useEffect, useState} from "react";
import  Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const MapBox = ({address = ""}) => {
    const [viewPort, setViewPort] = useState({
        latitude: 16.0482016,
        longitude: 108.1679869,
        zoom: 16
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setViewPort({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                zoom: 15,
            });
        });
    }, [])


    return (
        <div className="">
             <Map
                mapLib={import('mapbox-gl')}
                initialViewState={viewPort}
                style={{width: "100%", height: 500 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
                <Marker longitude={viewPort.longitude} latitude={viewPort.latitude} anchor="center" >
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#ff0000",fontSize:'30px'}} />
                </Marker>

            </Map>
        </div>

    );
};

export default MapBox;
