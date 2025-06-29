import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="/" className="navbar-brand">EventEx</a>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/">All Events</Link></li>
                    <li className="nav-item"><Link to="/filter-events">Find Events</Link></li>
                    <li className="nav-item"><Link to="/add-event">Add Event</Link></li>
                </ul>
            </div>
        </nav>
    );
}