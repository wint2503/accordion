var getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles) // HTML Collection (loop ပတ်လို့မရ)

var getacccontents = document.querySelectorAll(".acccontent");
// console.log(getacccontents) // NodeList

for(var x = 0; x < getacctitles.length; x++){
    // console.log(x);

    getacctitles[x].addEventListener('click',function(e){
        // console.log(e.target)
        // console.log(this)

        this.classList.toggle("active");
        var getcontent = this.nextElementSibling;
        // console.log(getcontent);
        
        if(getcontent.style.height){
            getcontent.style.height=null; //beware can't set 0
        }else{
            getcontent.style.height=getcontent.scrollHeight +"px";
        }
    })

    if(getacctitles[x].classList.contains("active")){
        getacccontents[x].style.height=getacccontents[x].scrollHeight+"px";
    }
}   