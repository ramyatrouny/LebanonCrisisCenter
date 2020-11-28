import GoogleMapReact from 'google-map-react'
import { useState } from 'react'
import LocationInfoBox from './LocationInfoBox'
import LocationMarker from './LocationMarker'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        return <LocationMarker
            lat={ev.lat}
            lng={ev.lng}
            type={ev.type}
            onClick={() => setLocationInfo({ title: ev.title, date: ev.date, sources: ev.sources })}
        />
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 33.8547,
        lng: 35.8623
    },
    zoom: 9
}

export default Map
