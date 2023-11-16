import React, {useEffect, useState} from "react";
import  ReactMapLG, {Marker,GeolocateControl ,FullscreenControl,NavigationControl } from 'react-map-gl';
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

             <ReactMapLG
                mapLib={import('mapbox-gl')}
                {...viewPort}s
                style={{width: "100%", height: 500}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                transitionDuration = '200'
                onMove={(evt => {setViewPort(evt.viewState)})}
            >
                <Marker longitude={viewPort.longitude} latitude={viewPort.latitude} >
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#ff0000",fontSize:'30px'}} />
                </Marker>
                 <GeolocateControl/>
                 <FullscreenControl/>
                 <NavigationControl/>
            </ReactMapLG>
        </div>

    );
};

export default MapBox;
