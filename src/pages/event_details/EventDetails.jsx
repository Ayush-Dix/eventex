import { useParams } from "react-router-dom";
import './EventDetails.css';

export default function EventDetails() {
  //Finding Event Using eventId
  const { id } = useParams();
  const events = JSON.parse(localStorage.getItem('events')) || [];
  const event = events.find(event => event.id === id);
  return (
    <div className="event-details-container">
      {event ? (
        <>
          <h1 className="event-details-title">{event.title}</h1>
          <p className="event-details-date">
            {event.date.day}/{event.date.month}/{event.date.year}
          </p>
          <p className="event-details-description">{event.detailedinfo}</p>
          <p className="event-details-location">Location: {event.location}</p>
          <p className="event-details-organizer">Organizer: {event.organizer}</p>
        </>
      ) : (
        <div className="no-event">
          <h2>Event Not Found</h2>
          <p>Please check the event ID or try again later.</p>
        </div>
      )}

      <a href="/" className="btn btn-primary">Back to Events</a>
    </div>
  );
}