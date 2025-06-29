import { useEffect, useState } from "react";
import EventCard from '../../components/event_card/EventCard.jsx';
import './EventList.css';
import Navigation from '../../components/navigation/Navigation.jsx';
import SeedLocalStorage from '../../utils/SeedLocalStorage.jsx';

export default function EventList() {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        const storedEvents = localStorage.getItem('events');
        if (storedEvents) {
            setEventList(JSON.parse(storedEvents));
        } else {
            setEventList([]);
        }
    }, []);

    // Sort by createdAt (newest first). If no createdAt, fallback to original order.
    const sortedEvents = [...eventList].sort((a, b) => {
        if (a.createdAt && b.createdAt) {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
        if (a.createdAt) return -1;
        if (b.createdAt) return 1;
        return 0;
    });

    return (
        <>
            <SeedLocalStorage />
            <Navigation />
            <div className="event-list-container">
                <h1 className="event-list-title">Hello There</h1>
                <p className="event-list-desc">Explore Events Happening Around You</p>
                {sortedEvents.length > 0 ? (
                    <div className="event-list-cards">
                        {sortedEvents.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                ) : (
                    <div className="no-events">
                        <h2>No Events Available</h2>
                        <p>Check Back Later or Add your own Events!</p>
                    </div>
                )}
            </div>
        </>
    );
}