import React, { useState } from 'react'

const PatternInput = ({ displayPrice }) => {
    const [Price, setPrice] = useState(0)
    const [Selection, setSelection] = useState([false, false, false, false, false, false, false])
    return (
        <div className='card'>
            <>&nbsp;</>
            <h5>PatternInput</h5>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">Monday</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">Tuesday</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">Wednesday</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">Thursday</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">Friday</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">Saturday</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">Sunday</label>
            </div>
            <>&nbsp;</>
            {displayPrice ?
                <div class="form-control">
                    <label for="flexCheckDefault">Price</label>
                    <input class="form-control" type="number" value={Price} />
                </div>
                : <></>}
            <>&nbsp;</>

        </div>
    )
}

export default PatternInput