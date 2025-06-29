function getDaysInMonth(year, month) {
    if (!year || !month) return 31;
    return new Date(year, month, 0).getDate();
}

export default getDaysInMonth;