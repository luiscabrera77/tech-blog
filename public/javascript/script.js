// write time
var nowEl = document.querySelector("#now");
var now = document.createElement("span");
now.className = "navbar-text";
now.textContent = moment().format('ll');
nowEl.appendChild(now);

// Redirect user to homepage if idle for a minute
var secondsLeft = 60;
function startTimer() {
  interval = setInterval(function () {
    secondsLeft--;
    //console.log(secondsLeft);
    if (secondsLeft <= 0) {
      document.location.replace('/');
    }
  }, 1000);
}

startTimer();