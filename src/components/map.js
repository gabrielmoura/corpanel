import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapBox(props) {
    const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2FicmllbHJtb3VyYSIsImEiOiJjbDczcndyMmQxYjV3M3ZsY28ydHBybWMwIn0.TkPKyun1sSOX4W30kwMOMg';
    // const MAPBOX_TOKEN = '';
    return (
        <Map
            initialViewState={{
                latitude: props.latitude,
                longitude: props.longitude,
                zoom: 14
            }}
            style={{width: 470, height: 286}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}
        >
            <Marker longitude={props.longitude} latitude={props.latitude} color="red"/>
        </Map>
    )
}