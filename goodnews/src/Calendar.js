import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import './Calendar.css'
import { Link } from "react-router-dom";

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div className="date">
            <b>DATE</b> <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
            />
            <br></br>
            <a href="/titles" >see news</a>
        </div>
    )
}
export default Calendar
