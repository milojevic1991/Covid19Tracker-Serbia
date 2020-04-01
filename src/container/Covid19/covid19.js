import React from 'react';
import MainInfo from '../../compontents/MainInfo/mainInfo';
import CountryTable from '../../compontents/CountryTable/countryTable';
import CoronaChart from '../../compontents/CoronaChart/coronaChart';
import Footer from '../../compontents/Footer/footer';


const Covid19 = ({}) => {
   return (
     <>
    <MainInfo/>
    <CountryTable/>
    <CoronaChart/>
    <Footer/>
    </>
   );
};

export default Covid19;