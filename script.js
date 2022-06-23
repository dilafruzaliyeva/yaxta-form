document.querySelector("#text").addEventListener("focusout", myText);

document.querySelector("#btn").addEventListener("click", function() {
    myText();
})

function myText(){
    let message, text; 
    let errElement = document.getElementById("text");
    message = document.getElementById("err");
    text = document.getElementById("text").value;

    
    try{
        if(text == ""){
            errElement.classList.remove("valid");
            errElement.classList.add("err");
            throw "bo`sh";
        }

        if(text.lenght > 0){
            errElement.classList.remove("err");
            errElement.classList.add("valid")
            message.innerHTML = "";
        }
    }

    catch(e){
        
    }
}



