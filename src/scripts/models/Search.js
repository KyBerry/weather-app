import axios from 'axios';
import * as key from './Keys';
import { elements } from '../views/base';
// export const weatherReq = () => {
//     fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=Spring+City,+Utah&appid=${key.apiKey}`).then((res) => {
//         return res.json();
//     }).then((info) => {
//         console.log(info);
//     });
// };

export default class Search {
    constructor(query) {
        this.query = getTemp(elements.searchInput.value);
    }

    async getResults() {
        try {
            const res = await axios(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${key.apiKey}`);
            this.result = res.data
            console.log(this.result);
        } catch(err) {
            alert(error);
        }
    }
}

const getTemp = (input) => {
    const getArr = input.split(' ');
    const query = getArr.join('+')
    return query;
 };





