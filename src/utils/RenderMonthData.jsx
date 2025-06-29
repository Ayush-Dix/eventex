export const renderMonthOptions = function () {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <>
            <option value="">Any Month</option>
            {months.map((month, idx) => (
                <option key={idx + 1} value={idx + 1}>{month}</option>
            ))}
        </>
    );
}



