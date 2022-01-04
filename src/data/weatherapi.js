
import axios from 'axios';

const baseUrl =`https://api.openweathermap.org/data/2.5/weather?` 

const apikey = 'ed7bad61de3eba83570038436a7dd984';

export const getWeatherData = async(cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apikey}`);
        return data;
    }catch(error){
        throw error;
    }
  
};