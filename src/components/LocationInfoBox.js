import React from 'react';

const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>Title: <strong>{info.title}</strong></li>
                <li>Type: <strong>WildFire</strong></li>
                <li>Date: <strong>{info.date}</strong></li>
                {info.sources.map((source) => (
                    <React.Fragment>
                        <li>Source <strong><a className="locationSource" target="_blank" rel="noreferrer" href={source.url}>{source.id}</a></strong></li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}

export default LocationInfoBox
