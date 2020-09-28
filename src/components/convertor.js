import React, { useState } from "react"

function Convertor() {

    const [kilometres, setKm] = useState(0);

    function handleChange(event) {

        setKm(event.target.value);
    }

    function convert(kilometres) {

        return (kilometres / 1.609).toFixed(2);
    }

    let element = (
        <div>
            <input type="text" value={kilometres} onChange={handleChange} />
            <p>{kilometres} km is {convert(kilometres)} miles</p>
        </div>
    );

    return element;
}


export default Convertor;