import React from 'react'

export const Information = () => {
    return (
        <div>
            <span>Information</span>
            <label htmlFor="series">Series:</label>
            <input id="series" type="text" />
            <label htmlFor="gameMaster">Game Master:</label>
            <input id="gameMaster" type="text" />
            <label htmlFor="notes">Notes:</label>
            <textarea id="notes"></textarea>
        </div>
    );
}
