const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const results=document.querySelector("#result")

    if(height==''||height <0|| isNaN(height)){
        results.innerHTML="please give a valid height"

    }
    else if(weight==''||weight <0|| isNaN(weight)){
        results.innerHTML="please give a valid weight"

    }
    else {
       const bmi= (weight/((height*height)/10000)).toFixed(2)
       results.innerHTML=`<span>${bmi}<span/>`
    }
    if(results>=18.6){
        results.innerHTML=`<span>${bmi} : you are under weight <span/>`;
    }
    else if(results<=18.6 || results>24.9){
        results.innerHTML=`<span>${bmi} : you are in normal weight range <span/>`;
    }
     else if(results<24.9){
        results.innerHTML=`<span>${bmi} : you are Overweight <span/>`;

    }

    
    
    
        
    
});