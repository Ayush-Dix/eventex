import { useState } from "react";
import "./AddEvent.css";
import Navigation from "../../components/navigation/Navigation.jsx";
import { useNavigate } from "react-router-dom";

export default function AddEventForm() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [detailedinfo, setDetailedinfo] = useState("");
    const [organizer, setOrganizer] = useState("");

    const navigate = useNavigate(); // <-- Move this here

    const handleCreateEvent = () => {
        if (!title || !date || !location || !description || !detailedinfo || !organizer) {
            alert("Please fill in all fields.");
            return;
        }

        const [year, month, day] = date.split("-").map(Number);
        const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
        const newId = crypto.randomUUID();

        const newEvent = {
            id: newId,
            title,
            description,
            detailedinfo,
            date: { year, month, day },
            location,
            organizer,
            createdAt: new Date().toISOString()
        };

        localStorage.setItem("events", JSON.stringify([...storedEvents, newEvent]));

        setTitle("");
        setDate("");
        setLocation("");
        setDescription("");
        setDetailedinfo("");
        setOrganizer("");

        window.navigator.vibrate?.(200);

        navigate(`/event/${newId}`);
    };

    return (
        <>
            <Navigation />
            <form className="add-event-form" onSubmit={e => e.preventDefault()}>
                <h1>Add An Event</h1>
                <div className="form-group">
                    <label className="form-label">
                        Title of Event:
                        <input
                            className="form-input"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Enter event title here"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Organizer of Event:
                        <input
                            className="form-input"
                            type="text"
                            value={organizer}
                            onChange={e => setOrganizer(e.target.value)}
                            placeholder="Enter event Organizer here"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Date:
                        <input
                            className="form-input"
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Location:
                        <input
                            className="form-input"
                            type="text"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            placeholder="Enter event location here"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Short Description:
                        <input
                            className="form-input"
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Enter a short description of the event"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Detailed Description:
                        <textarea
                            className="form-textarea"
                            value={detailedinfo}
                            onChange={e => setDetailedinfo(e.target.value)}
                            placeholder="Enter detailed information about the event"
                        />
                    </label>
                </div>
                <button
                    className="form-button"
                    type="button"
                    onClick={handleCreateEvent}
                >
                    Create Event
                </button>
            </form>
        </>
    );
}