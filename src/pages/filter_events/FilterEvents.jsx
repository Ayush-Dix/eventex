import { useState } from "react";
import FilterBox from "../../components/filter_box/FilterBox";
import SearchEventList from "../../components/search_event_list/SearchEventList";
import "./FilterEvents.css";
import Navigation from "../../components/navigation/Navigation";


export default function FilterEvents() {
    const [criteria, setCriteria] = useState({
        year: 2025,
        month: null,
        day: null
    });

    const getFilterCriteria = (selectedDay, selectedMonth, selectedYear) => {
        setCriteria({
            year: selectedYear,
            month: selectedMonth,
            day: selectedDay
        });
    }
    return (
        <>
            <Navigation />
            <div className="filter-events-container">
                <FilterBox populateCriteria={getFilterCriteria} />
                <SearchEventList criteria={criteria} />
            </div>
        </>
    );
}