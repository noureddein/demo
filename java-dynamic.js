var useransr = prompt("Do you want to buy if YES type Y otheriwse type N??");
while (useransr !== 'y') {
    useransr = prompt("Do you want to buy if YES type Y otheriwse type N??");

}
alert('Thank you to coming here! :)');

function cdNumber() {
    var userNumber = prompt("Pleas type you number?!");
    if (userNumber > 4 && userNumber < 8) {
        document.getElementById("results").innerHTML = ((0.15 * 1.99) * userNumber);
        document.getElementById("results2").innerHTML = ("Your Discount is 15%");
    } else if (userNumber >= 8 && userNumber < 10) {
        document.getElementById("results").innerHTML = ((0.20 * 1.99) * userNumber);
        document.getElementById("results2").innerHTML = ("Your Discount is 20%");
    } else if (userNumber > 10) {
        document.getElementById("results").innerHTML = ((0.35 * 1.99) * userNumber);
        document.getElementById("results2").innerHTML = ("You Got 2 CDs FREE! :) and Your Discount is 35%");

    }
    else if (userNumber == 10) {
        document.getElementById("results").innerHTML = ((0.35 * 1.99) * userNumber);
        document.getElementById("results2").innerHTML = ("Your Discount is 30%");
    }
    else {
        confirm("Sorry you will NOT get any Discount!! :(");
    }

    

    

    var result = [];
    // var mainElm = document.getElementById('imgRep');
    for (var j = 1; j <= userNumber; j++) {
        // document.innerHTML=("<img src=./cd.gif />");
        // document.write(j);
        // var img  = document.createElement('img');
        // img.src = "./cd.gif"
        // var p = document.createElement('p');
        // p.textContent = j;
        // mainElm.appendChild(img);
        // mainElm.appendChild(p);

        document.getElementById('pic').src ="./cd.gif";
        document.getElementById('imgNum').innerHTML = (j);
        // document.getElementById('pic').innerHTML ("<br>");
        // result = result + "<br>"+"<img src=./cd.gif />";
        //  (document.getElementById('pic').src="cd.gif") + "</br>"+ (document.getElementById('imgNum').innerHTML = (j)) ;
        // result + "<img src=./cd.gif />"
    }
    // document.write(result);
    // document.getElementById('imgNum').innerHTML = (j);

}

function myFunction() {
    var color_name = prompt("type your color");
    document.body.style.background = color_name;
}

var i = 0; //starting point
var img = [];
var time = 3000; // time in ms

// Image list
img[0] = 'img1.jpg';
img[1] = 'img2.jpg';
img[2] = 'img3.jpg';

// Change Imgs Function 
function changeImg() {
    document.getElementById("imgSlide").src = img[i];
    // document.slide.src = img[i];
    if (i < img.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time)
}

window.onload = changeImg;


