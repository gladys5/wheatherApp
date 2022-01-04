import './App.css';
import { useState,useEffect } from 'react';
import{getWeatherData}from './data/weatherapi';



function App() {
  const [weatherdata,setWeatherData]= useState(null);
  const[city,setCity]= useState(" ");
  const[loading,setLoading]= useState(false);

  const getData = async () =>{
    try{
      setLoading(true);
      const data = await getWeatherData(city);
      setWeatherData(data);
        
         setLoading(false);

    }catch(error){
      console.log(error.message);
      setLoading(false);
    }
  }

  
  useEffect(() => {
  
  }, []);



  return (
    <div className="App">
     <div className="Card">
       <h2 className="title"> <i className="fa fa-cloud"></i>Weather App</h2>
       <div className="search-form">
         <input type="text" value={city} onChange={(e) =>setCity(e.target.value)} placeholder="Ingresa tu Ciudad" />
         <button type="button" onClick={()=> getData()} >Buscar</button>
       </div>
         {loading}
           <div className="loader-container">
                
            </div>
        
           
            {weatherdata !==null ? (
          <div className='main-container'>
          <h4>Condiciones Climaticas</h4>
          <div className='weather-icon'>
           <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="imgicon"/>
          </div>
          <h3> {weatherdata.weather[0].main}</h3>
          <div className="temprature">
          <h1>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h1>
        </div>
        <div className='location'>
          <h3> <i className="fa fa-street-view"></i> {weatherdata.name}| {weatherdata.sys.country} </h3>
        </div>
        <div className="temprature-range">
          <h6>Min: { parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C  || Max: {(weatherdata.main.temp_max -273.15).toFixed(1)} &deg;C  ||   Humedad: {weatherdata.main.humidity}%</h6>
        </div>
       </div>
       ) : null}
       
           
         

      
     </div>
    </div>
  );
}

export default App;

