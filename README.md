# EventEx

EventEx is a modern event listing and management web application built with **React** and **Vite**.  
It allows users to browse, add, and view details of tech events, with all data stored in the browser's localStorage for a fast and serverless experience.

---

## Features

- 🗂️ **Event Listing:** Browse all upcoming events, sorted by creation date (newest first).
- 🔍 **Event Details:** Click any event to view its full details, including organizer, location, and a detailed description.
- ➕ **Add Event:** Fill out a simple form to add your own event. Events are instantly available and persist in your browser.
- ⚡ **Instant Updates:** All changes are reflected immediately thanks to localStorage.
- 🎨 **Modern UI:** Responsive, clean, and easy to use.

---

## Getting Started

### 1. **Clone the Repository**
```sh
git clone https://github.com/yourusername/eventex.git
cd eventex
```

### 2. **Install Dependencies**
```sh
npm install
```

### 3. **Run the App**
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
  components/
    event_card/
    filter_box/
    navigation/
    search_event_list/
  pages/
    add_event/
    event_details/
    event_list/
    filter_events/
  utils/
    EventDatabase.js
    SeedLocalStorage.js
  App.jsx
  main.jsx
```

---

## Usage

- **Browse Events:** The homepage lists all events. Click any event card to view its details.
- **Add Event:** Use the "Add Event" page to submit a new event. All fields are required.
- **Persistence:** All events are stored in your browser's localStorage. Refreshing or closing the browser will not remove your events.
- **No Backend Required:** This app is fully client-side and does not require a server.

---

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## Customization

- You can seed your own events by editing `src/utils/EventDatabase.js`.
- Styling is handled via CSS files in each component/page folder.

---

## License

MIT

---

## Credits

Created by AYUSH DIXIT  
For a React Workshop Task.