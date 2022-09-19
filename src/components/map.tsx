/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

import Map, {Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {Style} from "mapbox-gl";

export default function MapBox({latitude, longitude}: any) {
    const style: Style = {
        "version": 8,
        "sources": {
            "osm": {
                "type": "raster",
                "tiles": ["https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"],
                "tileSize": 256,
                "attribution": "&copy; Computei Tecnology",
                "maxzoom": 19
            }
        },
        "layers": [
            {
                "id": "osm",
                "type": "raster",
                "source": "osm" // This must match the source key above
            }
        ]
    };

    return (
        <Map mapLib={maplibregl}
             initialViewState={{
                 latitude: latitude,
                 longitude: longitude,
                 zoom: 17
             }}
             style={{width: 470, height: 286}}
             mapStyle={style}
        >
            <Marker longitude={longitude} latitude={latitude} color="red"/>
        </Map>
    )
}