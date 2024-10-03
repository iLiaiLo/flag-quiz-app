function flagContent(content,randomChars,countryObj){
            const frame=document.createElement("div");
            const image=document.createElement("img");
            const inputContainer=document.createElement("div")
            
            image.src=countryObj.flag.officialflag.svg;
            image.width="150"
            image.height="150"
            image.alt="Image";
            frame.className="frame";
            inputContainer.className="input-container"
            
            
            for(let i=0;i<countryObj.name.shortname.length;i++){
              
               
                if(countryObj.name.shortname[i]!==" "){
                    const input=document.createElement("input");
                    input.type="text"
                    input.autocomplete="off";
                    //input.addEventListener("input",(e)=>e.target.value=e.target.value.toUpperCase())
                    if(i===randomChars[0] || i===randomChars[1] || i==randomChars[2] || i===randomChars[3]){
                        input.value=countryObj.name.shortname[i];
                        input.disabled=true;
                    }
                    inputContainer.appendChild(input)
                }
                else{
                    const span=document.createElement("span");
                    span.style.width="20px"
                    span.style.height="20px"
                    span.style.border="2px solid white"
                    inputContainer.appendChild(span)
                }
            }
            
            frame.append(image,inputContainer)
            content.appendChild(frame)
}

export default flagContent