// write time
var nowEl = document.querySelector("#now");
var now = document.createElement("span");
now.className = "navbar-text";
now.textContent = moment().format('ll');
nowEl.appendChild(now);
