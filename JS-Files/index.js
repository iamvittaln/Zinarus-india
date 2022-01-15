/*function initial_alert_box()
{
    alert("Welcome to my website! Hope you like it!!");
}*/
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function display_d_t()
{
    const d=new Date();
    var hours=d.getHours();
    var minutes=d.getMinutes();
    var seconds =d.getSeconds();
    let date=d.getDate();
    let day=d.getDay();
    let month=d.getMonth();
    let year=d.getFullYear();
    if((month+1)<10)
        month="0"+(month+1);
    if(hours<10)
        hours="0"+hours;
    if(minutes<10)
        minutes="0"+minutes;
    if(seconds<10)
        seconds="0"+seconds;
    var date_time=date+"/"+month+"/"+year+" - "+days[day]+" - "+hours+":"+minutes+":"+seconds;
    document.getElementById("dateAndtime").innerHTML=date_time;
}
function update_time_by_second()
{
    setInterval(display_d_t,1000);
}