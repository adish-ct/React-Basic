import React, { useState } from 'react'

function ElementRemove() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    const removeNumber = (number) => {
        const updatedArray = array.filter((element) => element !== number);
        setArray(updatedArray);
    };
    return (
        <div>
            <button onClick={() => removeNumber(3)}>Remove Number 3</button>
            {array.map((element, index) => (
                <p key={index}>{element}</p>
            ))}
        </div>
    )
}

export default ElementRemove