import React, { useState } from 'react';

export default function ArchiveIndex() {
    const months = {
        1: {
            name: "January",
            days: 31
        },
        2: {
            name: "February",
            days: new Date().getFullYear % 4 || new Date().getFullYear % 400 ? 29 : 28
        },
        3: {
            name: "March",
            days: 31
        },
        4: {
            name: "April",
            days: 30
        },
        5: {
            name: "May",
            days: 31
        },
        6: {
            name: "June",
            days: 30
        },
        7: {
            name: "July",
            days: 31
        },
        8: {
            name: "August",
            days: 31
        },
        9: {
            name: "September",
            days: 30
        },
        10: {
            name: "October",
            days: 31
        },
        11: {
            name: "November",
            days: 30
        },
        12: {
            name: "December",
            days: 31
        },
    }
    const [currentMonth, setCurrentMonth] = useState(3);
    const [numOfDays, setNumOfDays] = useState(months[3].days);
    const [year, setYear] = useState(new Date().getFullYear())
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const blankSquares = new Date(months[currentMonth].name + year).getDay();

    const calenderStyle = {
        width: 800,
        height: 500,
        borderRadius: 15,
        border: "2px solid black",
        display: "grid",
        gridTemplateRows: "30% 2em 1fr",
        backgroundColor: "#55976d",
        overflow: "hidden"
    }

    const buttonStyle = {
        fontSize: "3em", 
        cursor: "pointer",
        background: "transparent",
        border: "none",
        outline: "none"
    }

    const daySquareStyle = {
        padding: " 0.25em 0 0 0.5em", fontSize: "1.25em"
    }
    const completedDayStyle = {
        padding: " 0.25em 0 0 0.5em", 
        fontSize: "1.25em",
        background: '#84ecac'
    }

    const startDate = "24-3-2022";
    function nextMonth() {
        const nextMonth = (currentMonth + 1) % 12 || 12;
        if (nextMonth === 1) setYear(year + 1);
        setCurrentMonth(nextMonth)
        setNumOfDays(months[nextMonth].days)
    }
    function prevMonth() {
        const prevMonth = (currentMonth - 1) % 12 || 12;
        if (prevMonth === 12) setYear(year - 1);
        setCurrentMonth(prevMonth)
        setNumOfDays(months[prevMonth].days)
    }


    return (
        <div style={{ display: 'grid', placeItems: 'center', height: "80vh" }}>
            <div className='calender' style={calenderStyle}>
                <div className="month-year" style={{ display: 'grid', gridTemplateColumns: "20% 1fr 1fr 20%", placeItems: "center" }}>
                    <button className="prev-month" style={buttonStyle} onClick={prevMonth}>&#8656;</button>
                    <p style={{ fontSize: "3em" }}>{months[currentMonth].name}</p>
                    <p style={{ fontSize: "3em" }}>{year}</p>
                    <button className="prev-month" style={buttonStyle} onClick={nextMonth}>&#8658;</button>
                </div>
                <ul className="weekdays" style={{
                    display: "flex", flexDirection: "row", wrap: "nowrap", justifyContent: "space-between",
                    padding: 0, margin: 0, borderTop: "2px solid black", borderBottom: "2px solid black", backgroundColor: "#254230", color: "#fff"
                }}
                >
                    {weekdays.map(day => <li style={{ listStyleType: "none", flex: 1, textAlign: "center" }}>{day}</li>)}
                </ul>
                <div className='days' style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gridTemplateRows: "repeat(5, 1fr)", background: "white" }}>
                    {[...Array(blankSquares).keys()].map(i => <div className="day"></div>)}
                    {[...Array(numOfDays).keys()].map(i => <div className="day" style={ `${i + 1}-${currentMonth}-${year}` === startDate? completedDayStyle : daySquareStyle} id={`${i + 1}-${currentMonth}-${year}`}>{i + 1}</div>)}
                </div>
            </div>
        </div>
    )
}
