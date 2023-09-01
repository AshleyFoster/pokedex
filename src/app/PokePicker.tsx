import React, { useState } from 'react';

const PokePicker = ({ choosePokemon }) => {
    const [number, setNumber] = useState("1")

    return (
        <div className="text-black">
            <input type="number" value={number} onChange={e => setNumber(e.target.value)}></input>
            <span onClick={() => choosePokemon(number)}>Choose</span>
        </div>
    );
}

export default PokePicker;
