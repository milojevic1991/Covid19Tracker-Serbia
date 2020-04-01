import React, { useState ,useEffect} from 'react';
import { Table,Input,Typography } from 'antd';
import axios from "axios";
import classes from './countryTable.module.css';
//antd

const { Title } = Typography;

const { Search } = Input;



const CountryTable = () => {


 const [ allCountries, setAllCountries] = useState([]);
 const [searchValue, setSearchValue] = useState('');
 const [filterCountries, setFilterCountries] = useState([]);

 useEffect(() => {
      axios
        .get("https://pomber.github.io/covid19/timeseries.json")
        .then(response => {

         const resArray = [];   
        
         for (const country in response.data) {
           
           const countryData = {
             title:country,
             date: response.data[country][response.data[country].length -1].date,
             deaths :response.data[country][response.data[country].length -1].deaths,
             confirmed : response.data[country][response.data[country].length -1].confirmed
             }

            resArray.push(countryData);
         }

         const newData =  resArray.map((country,index) => {
          return {
            key: index,
            country: country.title,
            confirmed:  country.confirmed,
            deaths: country.deaths,
            date: country.date
          }
      })
       

         setAllCountries(newData);
         setFilterCountries(newData);
        });
    }, []);

  
 const inputSearchHandler = (e) => {

    setSearchValue(e.target.value);

    if (e.target.value.length == 0 ) {
      console.log('prazan string');
      console.log(searchValue);
      
      setFilterCountries(allCountries);
    }

    else{
      const newFilteredCountries = allCountries.filter((country) => {
        return country.country.toLowerCase().includes(e.target.value.toLowerCase());
    })

    setFilterCountries(newFilteredCountries);

    }

     
   }

  const columns = [
      {
        title: 'Država',
        dataIndex: 'country',
        
      },
      {
        title: 'Zaraženih',
        dataIndex: 'confirmed',
      },
      {
        title: 'Preminulih:',
        dataIndex: 'deaths',
        render: text => <a style={{color:'red',fontWeight:'bold'}}>{text}</a>,
      },
      {
        title: 'Datum:',
        dataIndex: 'date',
      },
    ];



   return (
     <>
     <div className={classes.mainTable}>
     <Title level={2}>Trenutno zaraženih:</Title>
     <Search
      placeholder="Pretraži države.."
      // enterButton="Pretraži"
      size="middle"
      // onSearch={value => console.log(value)}
      onSearch = {inputSearchHandler}
      onChange = {inputSearchHandler}
      />
    <Table columns={columns} dataSource={filterCountries} size="middle" />
  
      </div>
   </>
    );
};


export default CountryTable;




