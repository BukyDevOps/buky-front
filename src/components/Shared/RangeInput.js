import React, { useEffect, useState } from 'react'

const RangeInput = ({ displayPrice, AvailabilityRanges, setAvailabilityRanges, idx }) => {
    
    const setPrice = (value, idx) => {
        setAvailabilityRanges(prevRanges => {
            const updatedRanges = prevRanges.map((range, i) => {
                if (i === idx) {
                    return { ...range, specialPrice: value };
                }
                return range;
            });
            return updatedRanges;
        });
    }

    const setStart = (value, idx) => {
        setAvailabilityRanges(prevRanges => {
            const updatedRanges = prevRanges.map((range, i) => {
                if (i === idx) {
                    return { ...range, startDate: value };
                }
                return range;
            });
            return updatedRanges;
        });
    }

    const setEnd = (value, idx) => {
        setAvailabilityRanges(prevRanges => {
            const updatedRanges = prevRanges.map((range, i) => {
                if (i === idx) {
                    return { ...range, endDate: value };
                }
                return range;
            });
            return updatedRanges;
        });
    }


    return (
        <div className='card mb-2'>
            {/* <>&nbsp;</>
            <h5>RangeInput</h5> */}

            <div class="form-control">
                <label>Period Start</label>
                <input class="form-control" type="date" value={AvailabilityRanges[idx]?.startDate ?? null} onChange={e => setStart(e.target.value, idx)} />
            </div>
            <div class="form-control">
                <label>Period End</label>
                <input class="form-control" type="date" value={AvailabilityRanges[idx]?.EndDate ?? null} onChange={e => setEnd(e.target.value, idx)} />
            </div>
            {displayPrice ?
                <div class="form-control">
                    <label for="flexCheckDefault">Price For Period</label>
                    <input class="form-control" type="number" value={AvailabilityRanges[idx]?.price ?? null} onChange={e => setPrice(e.target.value, idx)} />
                </div>
                : <></>}
        </div>
    )
}

export default RangeInput