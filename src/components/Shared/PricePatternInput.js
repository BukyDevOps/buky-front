import React, { useState } from 'react'
import PatternInput from './PatternInput';

const PricePatternInput = () => {
    const [Inputs, setInputs] = useState([]);

    const handleButtonClick = () => {
        const newInputs = [...Inputs, <PatternInput key={Inputs.length} index={Inputs.length + 1} displayPrice={true} />];
        setInputs(newInputs);
    };

    const removeRangePeriod = () => {
        const newInputs = Inputs.slice(0, Inputs.length - 1);
        setInputs(newInputs);
    }


    return (
        <div className='m-2'>
            <button onClick={handleButtonClick} className='btn btn-success'>+ Add Pattern</button>
            &nbsp;
            <button onClick={removeRangePeriod} className='btn btn-danger'>- Remove</button>
            {Inputs.map((range, index) => (
                <div key={index}>{range}</div>
            ))}
        </div>
    )
}

export default PricePatternInput