import './EventCard.css';

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date.day}/{event.date.month}/{event.date.year}</p>
      <p>Location: {event.location}</p>
      <a href={`/event/${event.id}`} className="btn btn-primary">View Details</a>
    </div>
  );
}