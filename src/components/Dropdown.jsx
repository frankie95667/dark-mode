import React from 'react';

export default function Dropdown(props) {
    const handleChange = (e) => {
        props.setCurrentCoinData(JSON.parse(e.target.value))
    }
    return (
        <select onChange={handleChange} defaultValue='default'  id='coinDataDropdown'>
            <option disabled value="default">Please select an option</option>
            {props.coinData ? props.coinData.map(data => {
                return (
                    <option value={JSON.stringify(data)}>{data.id}</option>
                )
            }) : null}
        </select>
    )
}