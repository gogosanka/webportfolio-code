Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
}

// the new date object and friends
var d = new Date();

// the array of days, to be reference by 0-6 index
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// a function to populate the HTML elements
function today() {
  document.getElementById("day").innerHTML = days[d.getDay()];

document.getElementById("time").innerHTML = d.timeNow();
};

//run function or set it as an onclick event
/*today()*/
