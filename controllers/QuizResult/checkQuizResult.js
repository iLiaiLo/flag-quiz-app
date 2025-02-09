function checkQuizResult(quizContent,Countries,resultContent){
    try {
        let counter=0;
        const Arr=quizContent.children;
        const country_names=[];
        const child_elements=[];
        const input_content=[];
        const my_results=[];
     
        for(let i=0;i<Arr.length;i++){
         child_elements.push([...Arr[i].children])
        }
     
        for(let i=0;i<child_elements.length;i++){
         input_content.push(child_elements[i][1])
        }
     
        for(let i=0;i<Countries.length;i++){
         country_names.push(Countries[i].name.shortname)
        }
     
        for(let i=0;i<input_content.length;i++){
         let str=""
         for(let j=0;j<input_content[i].children.length;j++){
            input_content[i].children[j].tagName==="INPUT" ? str+=input_content[i].children[j].value : str+=" ";
         }
         my_results.push(str);
        }
     
     
        for(let i=0;i<country_names.length;i++){
         if(country_names[i]==my_results[i].toUpperCase()){
             quizContent.children[i].style.boxShadow="0 0 15px #4fd13d";
             quizContent.children[i].style.backgroundColor="#4fd13d"
             counter++
         }
         else{
             quizContent.children[i].style.boxShadow="0 0 15px #ee3919"
             quizContent.children[i].style.backgroundColor="#ee3919"
         }
         const answer=document.createElement("div");
         answer.className="answer";
         answer.textContent=country_names[i]
         quizContent.children[i].appendChild(answer);
        }

        resultContent.textContent=`Your result is ${counter}/15`
 
    } catch (error) {
        console.log(error.message)
    }
}
export default checkQuizResult