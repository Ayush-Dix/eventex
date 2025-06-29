import { useState } from "react";
import "./FilterBox.css";
import { renderMonthOptions } from "../../utils/RenderMonthData";
import getDaysInMonth from "../../utils/GetDaysInMonth";

export default function FilterBox({ populateCriteria }) {
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");

    const daysInMonth = getDaysInMonth(year, month);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!year) return;
        if (day) {
            const dayNum = Number(day);
            if (
                isNaN(dayNum) ||
                dayNum < 1 ||
                dayNum > daysInMonth
            ) {
                alert(`Please enter a valid day (1-${daysInMonth}) for the selected month and year.`);
                return;
            }
        }
        if (populateCriteria) populateCriteria(day, month, year);
    };

    const handleDayChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
        if (value === "") {
            setDay("");
            return;
        }
        let num = Number(value);
        if (num < 1) num = 1;
        if (num > daysInMonth) num = daysInMonth;
        setDay(String(num));
    };

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
        setDay(""); // reset day when month changes
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
        setDay(""); // reset day when year changes
    };

    return (
        <form className="date-filter-form" onSubmit={handleSubmit}>
            <label>
                Year*:
                <input
                    type="number"
                    required
                    value={year}
                    onChange={handleYearChange}
                    min="1900"
                    max="2100"
                    placeholder="e.g. 2025"
                />
            </label>
            <label>
                Month:
                <select value={month} onChange={handleMonthChange}>
                    {renderMonthOptions()}
                </select>
            </label>
            <label>
                Day:
                <input
                    type="number"
                    value={day}
                    onChange={handleDayChange}
                    min="1"
                    max={daysInMonth}
                    placeholder="Any Day"
                    disabled={!month}
                />
            </label>
            <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
    );
}