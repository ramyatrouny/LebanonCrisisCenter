const filterEvents = async (events) => {
    const fire = await filterArray(events, 8); // Fire Events
    const storm = await filterArray(events, 10); // Storm Events

    const fireEvents = await fireEventsCleanup(fire);
    const stormEvents = await stormEventsCleanup(storm);

    return [...fireEvents, ...stormEvents];
}

/**
 * @description Pass the storm events retrieved from Nasa API and clean them up 
 * @param {Object[]} stormEvents Array of filtered storm Events
 */
const stormEventsCleanup = async (stormEvents) => {
    let stormCleaning = stormEvents.map(storm => {
        let stormEv = storm.geometries.map(stormGeo => {
            return {
                title: storm.title,
                type: storm.categories[0].title,
                sources: storm.sources,
                date: stormGeo.date,
                lat: stormGeo.coordinates[1],
                lng: stormGeo.coordinates[0]
            }
        });

        return stormEv;
    });
    return stormCleaning[0];
}

/**
 * @description Pass the fire crisis events retrieved from Nasa API and clean them up
 * @param {Object[]} fireEvents Array of filtered fire Events 
 */
const fireEventsCleanup = async (fireEvents) => {
    let fireCleaning = fireEvents.map(fire => {
        return {
            title: fire.title,
            type: fire.categories[0].title,
            sources: fire.sources,
            date: fire.geometries[0].date,
            lat: fire.geometries[0].coordinates[1],
            lng: fire.geometries[0].coordinates[0]
        }
    });

    return fireCleaning;
}

/**
 * @description Method filters the Crisis based on a specific ID
 * @param {Object[]} events Array of Events retrieved from Nasa API 
 * @param {Number} type Category of the Event 
 */
const filterArray = async (events, type) => {
    return events.filter(events => events.categories[0].id === type)
}

export default filterEvents;