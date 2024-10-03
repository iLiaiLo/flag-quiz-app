import flagContent from "./flagContent.js";
import randomGen from "./randomGen.js";


function Content(content,countries){

    for(let country of countries){
        const randArr=randomGen(country)
        flagContent(content,randArr,country)
    }

}

export default Content