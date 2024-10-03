function randomGen(country){
    const chars = new Set();
    let num=2;
    if(country.name.shortname.length>=8 && country.name.shortname.length<=16){ 
        num=3;
    }
    else if(country.name.shortname.length>=17){
        num=4;
    }

    while (chars.size < num) {
        const randomNumber = Math.floor(Math.random() * country.name.shortname.length) ;
        if(country.name.shortname[randomNumber]!==" "){
            chars.add(randomNumber);
        }
    }
            
    const randomArr=[...chars];
    return randomArr
}

export default randomGen