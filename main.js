
var inpElem  = document.querySelector(".the-input");

var buttElem  = document.querySelector(".btn");



buttElem.addEventListener("click",togglePassword);




  function togglePassword(){
    if(buttElem.getAttribute("data-text")=="show") {
        
        inpElem.setAttribute("type","text");
        
        buttElem.setAttribute("data-text","hide");
        buttElem.innerHTML="Hide Password";
        
    }
    else{
        
        inpElem.setAttribute("type","password");
        
        buttElem.setAttribute("data-text","show");
        buttElem.innerHTML="Show Password";
        
    }
}







