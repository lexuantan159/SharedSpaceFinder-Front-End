import React, {useEffect, useState} from "react";
import ReactMapLG, {Marker, GeolocateControl, FullscreenControl, NavigationControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const MapBox = ({address = null}) => {
    const [viewPort, setViewPort] = useState({
        latitude: 16.0482016,
        longitude: 108.1679869,
        zoom: 16
    })
    const [marker, setMarker] = useState({
        latitude: 16.0482016,
        longitude: 108.1679869
    })

    console.log(address)

    useEffect(() => {
        if (address !== null) {
            // Construct the Mapbox Geocoding API URL
            const geocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

            // Make a request to the Mapbox Geocoding API
            fetch(geocodingApiUrl)
                .then(response => response.json())
                .then(data => {
                    // Extract the latitude and longitude from the API response
                    const coordinates = data.features[0].center;
                    const latitude = coordinates[1];
                    const longitude = coordinates[0];

                    setMarker({
                        longitude: longitude,
                        latitude: latitude
                    });
                    setViewPort({
                        latitude: latitude,
                        longitude: longitude,
                        zoom: 16,
                    });
                })
                .catch(error => {
                    console.error('Error fetching data from Mapbox Geocoding API:', error);
                });
        } else {
            navigator.geolocation.getCurrentPosition((pos) => {
                setViewPort({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                    zoom: 15,
                });
                setMarker({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                })
            });
        }

    }, [])

    return (
        <div className="">
            <ReactMapLG
                import={'reactMap-gl'}
                {...viewPort}
                style={{width: "100%", height: "500px"}}

                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                transitionDuration='200'
                onMove={(evt => setViewPort(evt.viewState))}
            >
                <Marker longitude={marker.longitude} latitude={marker.latitude}>
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#ff0000", fontSize: '30px'}}/>
                </Marker>
                <GeolocateControl/>
                <FullscreenControl/>
                <NavigationControl/>
            </ReactMapLG>
        </div>

    );
};

export default MapBox;
