import React, { useState } from 'react'
import RangeInput from './RangeInput';

const AccommodationRangeInput = () => {

    const [Inputs, setInputs] = useState([]);

    const handleButtonClick = () => {
        const newInputs = [...Inputs, <RangeInput key={Inputs.length} index={Inputs.length + 1} displayPrice={false} />];
        setInputs(newInputs);
    };

    const removeRangePeriod = () => {
        const newInputs = Inputs.slice(0, Inputs.length - 1);
        setInputs(newInputs);
    }


    return (
        <div className='m-2'>
            <button onClick={handleButtonClick} className='btn btn-success'>+ Add Range</button>
            &nbsp;
            <button onClick={removeRangePeriod} className='btn btn-danger'>- Remove</button>
            <div className='my-4'>
                {Inputs.map((range, index) => (
                    <div key={index}>{range}</div>
                ))}
            </div>
        </div>
    )
}

export default AccommodationRangeInput