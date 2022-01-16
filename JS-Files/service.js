var serviceNumber="";
function random_number()
{
    arr=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var i;
    for(i=0;i<8;i++)
    {
        serviceNumber+=(arr[Math.floor(Math.random()*arr.length)]);
    }
}
function serviceForm() 
{
    alert("Thankyou, we have received your request !\nYour service request number is: "+serviceNumber+"\nOur service team will contact you shortly.");
}