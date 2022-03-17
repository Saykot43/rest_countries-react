import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.flag);
    const {name, flags, capital, population, region, startOfWeek} = props.country;
    return (
        <div className="country bg-success">
            <h4 className='text-warning'>This is : {name.common}</h4>
            <img src={flags.png} alt="" />
            <p><small>Region: {region}</small></p>
            <p><small>Capital: {capital}</small></p>
            <p><small>Population: {population}</small></p>
            <p>Start Of Week : {startOfWeek}</p>
        </div>
    );
};
export default Country;