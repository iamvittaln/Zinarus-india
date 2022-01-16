var cruzer_car;
var linto_car;
var jiguan_car;
var cruzerTable;
var lintoTable;
var jiguanTable;
function Cruzer()
{
    cruzerTable=document.getElementById("cruzer_details");
    if(cruzerTable.style.display=="none")
        cruzerTable.style.display="block";
    else if(cruzerTable.style.display=="block")
        cruzerTable.style.display="none";
    document.getElementById("cruzer_details").classList.toggle("hidden_table_1");
    cruzer_car=document.getElementById("car1");
    lintoTable=document.getElementById("linto_details");
    lintoTable.style.display="none";
    jiguanTable=document.getElementById("jiguan_details");
    jiguanTable.style.display="none";
    if(cruzer_car.style.display == "none" || cruzer_car.style.display == "")
    {
        cruzer_car.src="Images/Cruzer_car.jpg";
        cruzer_car.style.display="block";
        linto_car.style.display="none";
        jiguan_car.style.display="none";
    }
    else
    {
        cruzer_car.style.display="none";
    }
}
function Linto()
{
    lintoTable=document.getElementById("linto_details");
    if(lintoTable.style.display=="none")
        lintoTable.style.display="block";
    else if(lintoTable.style.display=="block")
        lintoTable.style.display="none";
    document.getElementById("linto_details").classList.toggle("hidden_table_2");
    linto_car=document.getElementById("car2");
    cruzerTable=document.getElementById("cruzer_details");
    cruzerTable.style.display="none";
    jiguanTable=document.getElementById("jiguan_details");
    jiguanTable.style.display="none";
    if(linto_car.style.display == "none" || linto_car.style.display == "")
    {
        linto_car.src="Images/Linto_car.jpg";
        linto_car.style.display="block";
        cruzer_car.style.display="none";
        jiguan_car.style.display="none";
    }
    else
    {
        linto_car.style.display="none";
    }  
}
function Jiguan()
{
    jiguanTable=document.getElementById("jiguan_details");
    if(jiguanTable.style.display=="none")
        jiguanTable.style.display="block";
    else if(jiguanTable.style.display=="block")
        jiguanTable.style.display="none";
    document.getElementById("jiguan_details").classList.toggle("hidden_table_3");
    jiguan_car=document.getElementById("car3");
    cruzerTable=document.getElementById("cruzer_details");
    cruzerTable.style.display="none";
    lintoTable=document.getElementById("linto_details");
    lintoTable.style.display="none";
    if(jiguan_car.style.display == "none" || jiguan_car.style.display == "")
    {
        jiguan_car.src="Images/jiguan_car.jpg"
        jiguan_car.style.display="block";
        cruzer_car.style.display="none";
        linto_car.style.display="none";
    }
    else
    {
        jiguan_car.style.display="none";
    }  
}
function Coupon()
{
    var i;
    var coupon_code='';
    const arr=["A", "B", "C", "D", "E", "F","l", "m", "n", "o", "p", "q", "G", "H","1", "2", "3", "4", "5", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d","w", "x", "y", "z", "e", "f", "g", "h", "i", "j", "k", "r", "s", "t", "u", "v", 
    "6", "7", "8", "9", "0"];
    for(i=0; i<6; i++)
    {
        coupon_code+=(arr[Math.floor(Math.random()*arr.length)]);
    }
    document.getElementById("coupon").innerHTML="Your coupon code for the day is: "+coupon_code;
}

