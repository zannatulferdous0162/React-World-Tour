import CountryData from "../CountryData/CountryData";


const CountryDetails = (props) => {
    // const {country , handleVisitedCountry , handleVisitedFlag } = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
              handleVisitedCountry = {handleVisitedCountry}
              handleVisitedFlag = {handleVisitedFlag} 
              country={country}
            >
            </CountryData> */}

            <CountryData {...props} >

            </CountryData>
            
        </div>
    );
};

export default CountryDetails;