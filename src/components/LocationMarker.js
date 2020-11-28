import Icon from "@iconify/react"
import pineTreeFire from '@iconify/icons-mdi/pine-tree-fire';
import weatherWindy from '@iconify/icons-mdi/weather-windy';


const LocationMarker = ({ type, onClick }) => {
    let icons = {
        8: pineTreeFire,
        10: weatherWindy
    }

    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={icons[type]} className="location-icon" />
        </div>
    )
}

export default LocationMarker
