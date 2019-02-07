import { elements } from './base';
import moment from 'moment';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const renderWeather = weather => {
    elements.temp.value = Math.ceil((weather.main.temp - 273.15) * 9/5 + 32);
    elements.conditions.value = weather.weather[0].main;
    elements.sunrise.value =  moment.unix(weather.sys.sunrise).format("LT");
    elements.sunset.value = moment.unix(weather.sys.sunset).format("LT");
};