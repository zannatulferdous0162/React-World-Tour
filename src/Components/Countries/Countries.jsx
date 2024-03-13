import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCounteies] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


  
     
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    } ,[])

    const handleVisitedCountry = country =>{
        console.log('add')
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCounteies(newVisitedCountries);
        console.log(country)
    }

    const handleVisitedFlag = flag => {
       const  newVisitedFlags = [...visitedFlags, flag];
       setVisitedFlags(newVisitedFlags);
    }

   
    return (

        <div>
            <h3>Countries : {countries.length}</h3>
            {/* Visited country */}
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
                }

            </div>
            {/* Display country */}

           <div  className="country-container">
            {
                countries.map(country => <Country
                     key={country.cca3} 
                     
                     handleVisitedCountry = {handleVisitedCountry}
                     handleVisitedFlag = {handleVisitedFlag} 
                     country={country}>
                    
                     </Country>)
            }
           </div>
        </div>
    );
};

export default Countries;