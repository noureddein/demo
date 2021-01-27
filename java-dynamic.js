confirm("Do you want to buy??");
function cdNumber(){
    var userNumber = prompt("Pleas type you number?!");
    if (userNumber > 4 && userNumber < 8){
        document.getElementById("results").innerHTML = ((0.15 * 1.99)*userNumber);
        document.getElementById("results2").innerHTML=("Your Discount is 15%");
    }else if (userNumber >= 8 && userNumber <10 ) {
        document.getElementById("results").innerHTML = ((0.20 * 1.99)*userNumber);
        document.getElementById("results2").innerHTML=("Your Discount is 20%");
    }else if (userNumber >10 ) {
        document.getElementById("results").innerHTML = ((0.35 * 1.99)*userNumber);
        document.getElementById("results2").innerHTML=("You Got 2 CDs FREE! :) and Your Discount is 35%");

    }
    else if (userNumber == 10 ) {
        document.getElementById("results").innerHTML = ((0.35 * 1.99)*userNumber);
        document.getElementById("results2").innerHTML=("Your Discount is 30%");
    }
    else{
        confirm("Sorry you will NOT get any Discount!! :(");
    }

}
function myFunction() {
    var color_name=prompt("type your color");
    document.body.style.background = color_name;
}

