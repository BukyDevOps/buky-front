import React, { useState } from 'react'

const PatternInput = ({ displayPrice, AvailabilityPattern, setAvailabilityPattern }) => {
    const [Price, setPrice] = useState(0)

    const handleDayCheckboxChange = (dayName, value) => {
        setAvailabilityPattern(prevPattern => {
            const updatedDayOfWeek = value
                ? [...prevPattern.dayOfWeek, dayName]
                : prevPattern.dayOfWeek.filter(day => day !== dayName);

            return { dayOfWeek: updatedDayOfWeek };
        });
    };

    return (
        <div classNameName='card px-4 mx-0'>
            <>&nbsp;</>
            {/* <h5>PatternInput</h5> */}
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={e => handleDayCheckboxChange("MONDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Monday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={e => handleDayCheckboxChange("TUESDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Tuesday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={e => handleDayCheckboxChange("WEDNESDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Wednesday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={e => handleDayCheckboxChange("THURSDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Thursday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={e => handleDayCheckboxChange("FRIDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Friday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={e => handleDayCheckboxChange("SATURDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Saturday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={e => handleDayCheckboxChange("SUNDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Sunday</label>
            </div>
            <>&nbsp;</>
            {displayPrice ?
                <div>
                    <label for="flexCheckDefault">Price For Period</label>
                    <input className="form-control" type="number" value={Price} />
                </div>
                : <></>}
            <>&nbsp;</>
        </div>
    )
}

export default PatternInput