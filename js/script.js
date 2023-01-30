const endDate = "25 january 2023 05:00:00 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")



function countDown(){
    const end = new Date(endDate)
    const now = new Date();
    const diff =( end - now) / 1000;
    if (diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);//converted into days
    inputs[1].value = Math.floor(diff / 3600 % 24 );//converted into hours
    inputs[2].value = Math.floor((diff / 60) % 60);//converted into minute
    inputs[3].value = Math.floor(diff % 60);//converted into minute

    /**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

}
countDown()
setInterval(() => {
    countDown()
}, 1000);