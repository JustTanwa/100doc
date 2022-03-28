import React, { useState } from 'react';

export default function ArchiveIndex() {
    const months = {
        January: {
            name: "January",
            days: 31
        },
        February: {
            name: "February",
            days: new Date().getFullYear % 4 || new Date().getFullYear % 400 ? 29 : 28
        },
        March: {
            name: "March",
            days: 31
        },
        April: {
            name: "April",
            days: 30
        },
        May: {
            name: "May",
            days: 31
        },
        June: {
            name: "June",
            days: 30
        },
        July: {
            name: "July",
            days: 31
        },
        August: {
            name: "August",
            days: 31
        },
        September: {
            name: "September",
            days: 30
        },
        October: {
            name: "October",
            days: 31
        },
        November: {
            name: "November",
            days: 30
        },
        December: {
            name: "December",
            days: 31
        },
    }
    const [currentMonth, setCurrentMonth] = useState("March");
    const [numOfDays, setNumOfDays] = useState(months[currentMonth].days);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const blankSquares = 1;
    
    const calenderStyle = {
        width: 600,
        height: 400,
        borderRadius: 15,
        border: "2px solid black",
        display: "grid",
        gridTemplateRows: "30% 2em 1fr",
    }

    return (
        <div style={{ display: 'grid', placeItems: 'center', height: "80vh" }}>
            <div className='calender' style={calenderStyle}>
                <div className="month-year" style={{ display: 'grid', placeItems: 'center'}}>
                    <p>{currentMonth}</p>
                    <p>2022</p>
                </div>
                <ul className="weekdays" style={{ display: "flex", flexDirection: "row", wrap: "nowrap", justifyContent: "space-between", 
                padding: 0, margin: 0, borderTop: "2px solid black", borderBottom: "2px solid black" }}
                >
                    {weekdays.map(day => <li style={{ listStyleType: "none", flex: 1, textAlign: "center" }}>{day}</li>)}
                </ul>
                <div className='days' style={{display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gridTemplateRows: "repeat(5, 1fr)"}}>
                    {[...Array(35 - numOfDays).keys()].map( i => <div className="day"></div>)}
                    {[...Array(numOfDays).keys()].map(i => <div className="day">{i}</div>)}
                </div>
            </div>
        </div>
    )
}
