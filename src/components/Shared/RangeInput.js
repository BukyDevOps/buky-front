import React, { useState } from 'react'

const RangeInput = ({ displayPrice }) => {
    const [Price, setPrice] = useState(0)
    const [Start, setStart] = useState(false)
    const [End, setEnd] = useState(false)

    return (
        <div className='card'>
            <>&nbsp;</>
            <h5>RangeInput</h5>

            <div class="form-control">
                <label>Period Start</label>
                <input class="form-control" type="date" value={Start} onChange={e => setStart(e.target.value)} />
            </div>
            <div class="form-control">
                <label>Period End</label>
                <input class="form-control" type="date" value={End} onChange={e => setEnd(e.target.value)} />
            </div>
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

export default RangeInput