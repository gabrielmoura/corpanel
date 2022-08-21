import Map, {Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapBox(props) {
    const style = {
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
                 latitude: props.latitude,
                 longitude: props.longitude,
                 zoom: 17
             }}
             style={{width: 470, height: 286}}
             mapStyle={style}
        >
            <Marker longitude={props.longitude} latitude={props.latitude} color="red"/>
        </Map>
    )
}