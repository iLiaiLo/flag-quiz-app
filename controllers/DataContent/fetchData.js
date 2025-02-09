import {url,options} from './EnvVars.js'
async function fetchCountriesData(){
    try {
        const response = await fetch(url, options);
        const countries = await response.json();
        const independentCountries=countries.filter(country=>country.independent && !country.name.shortname.match(/[^a-zA-Z\s]/g))
        independentCountries.sort(()=>Math.random()-0.5);
        return independentCountries.slice(0,15);
        
    } catch (error) {
        console.log(error)
    }
}
export default fetchCountriesData