import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    return (
        <div className='container'>
            <h1 className='text'>The number of country in the world =<span className='text-danger'>{countries.length}&#128512;</span></h1>
            <div className="countries-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        country= {country}
                    />)
                }
            </div>
        </div>
    );
};

export default Countries;