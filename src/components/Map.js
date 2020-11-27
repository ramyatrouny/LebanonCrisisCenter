import GoogleMapReact from 'google-map-react'
import { useState } from 'react'
import LocationInfoBox from './LocationInfoBox'
import LocationMarker from './LocationMarker'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)


    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker
                lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
            />

        }

        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBXIV3aXQeArlWR-gsgJD3Zebms-_yW9Eg' }}
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
