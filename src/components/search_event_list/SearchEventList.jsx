import './SearchEventList.css';
import { events } from '../../utils/EventDatabase.jsx';
import EventCard from '../event_card/EventCard.jsx';

export default function SearchEventList({ criteria }) {
    const { year, month, day } = criteria;

    const filteredEvents = events.filter(event => {
        if (year && Number(event.date.year) !== Number(year)) return false;
        if (month && Number(event.date.month) !== Number(month)) return false;
        if (day && Number(event.date.day) !== Number(day)) return false;
        return true;
    });

    return (
        <div className="search-event-list">
            <div className="event-list-cards">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))
                ) : (
                    <div className="no-events">
                        <h3>No events found for this criteria.</h3>
                    </div>
                )}
            </div>
        </div>
    );
}