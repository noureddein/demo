function cdNumber(){
    var userNumber = prompt("Pleas type you number?!");
    if (userNumber > 4 && userNumber < 8){
        document.getElementById("results").innerHTML = ((0.15 * 1.99)*userNumber);
    }else if (userNumber >= 8 && userNumber <10 ) {
        document.getElementById("results").innerHTML = ((0.20 * 1.99)*userNumber);
    }else (userNumber >10 ) ;{
        document.getElementById("results").innerHTML = ((0.35 * 1.99)*userNumber);
        document.getElementById("results2").innerHTML=("You Got 2 CDs FREE! :)");
    }

}
function myFunction() {
    var color_name=prompt("type your color");
    document.body.style.background = color_name;
}

