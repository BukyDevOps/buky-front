import React, { useState } from 'react'

const PatternInput = ({ displayPrice }) => {
    const [Price, setPrice] = useState(0)
    const [Selection, setSelection] = useState([false, false, false, false, false, false, false])
    return (
        <div classNameName='card px-4 mx-0'>
            <>&nbsp;</>
            {/* <h5>PatternInput</h5> */}
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" for="flexCheckDefault">Monday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" for="flexCheckDefault">Tuesday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" for="flexCheckDefault">Wednesday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" for="flexCheckDefault">Thursday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" for="flexCheckDefault">Friday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" for="flexCheckDefault">Saturday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
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