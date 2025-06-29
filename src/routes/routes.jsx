import EventDetails from '../pages/event_details/EventDetails.jsx';
import EventList from '../pages/event_list/EventList.jsx';
import FilterEvents from '../pages/filter_events/FilterEvents.jsx';
import AddEvent from '../pages/add_event/AddEvent.jsx';

export const routes =[
  {path: '/', element: <EventList />},
  {path: '/event/:id', element: <EventDetails />},
  {path: '/filter-events', element: <FilterEvents />},
  {path: '/add-event', element: <AddEvent />},
];