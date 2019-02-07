import '../styles/index.scss';
import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app
 * - Search object
 */

 const state = {};

 /**
  * SEARCH CONTROLLER
  */
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        renderLoader(elements.searchForm);


        try {
            // 4) Search for weather
            await state.search.getResults();
            // 5) Render results on UI
            console.log(state.search.result.main.temp);
            searchView.renderWeather(state.search.result);
            clearLoader();
            elements.outputWeather.style = "display: block;";
        } catch (err) {
            alert('Something wrong with the search. . .');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    elements.outputWeather.style = "display: none;";
    controlSearch();
});