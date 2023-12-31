import React, { useState } from "react";


function SubmitButton() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(0)

    const decreaseCount = () => {
        setCount(count - 1);
        setColor(-1)
    }

    const increaseCount = () => {
        setCount(count + 1);
        setColor(1)
    }


    return (
        <div>
            <hr />
            <h1>Count : <span className={color === 1 ? "text-success" : "text-danger"}>{count}</span> </h1>
            <div className="d-flex gap-5 justify-content-center mt-5">
                <button className="btn btn-lg btn-danger" onClick={decreaseCount} > Decrease </button>
                <button className="btn btn-lg btn-success" onClick={increaseCount} > Increase </button>
            </div>
        </div>
    )
}

export default SubmitButton
