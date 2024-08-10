const demo = document.getElementById("d");
let menu1show = false;
const menu1 = document.getElementById("menu1")

function showMenu() {
  if (menu1show == false) {
    menu1.style.opacity = "35%"
    menu1.style.zIndex = "3"
    menu1show = true
    alert("menu overlay set to show")
  } else {
    menu1.style.opacity = "0%"
    menu1.style.zIndex = "0"
    menu1show = false
    alert("menu overlay set to hide.")
  }
}

function loadingDemo() {
  demo.innerText = "—";
  setTimeout(function() { demo.innerText = "\\" }, 500);
  setTimeout(function() { demo.innerText = "|" }, 1000);
  setTimeout(function() { demo.innerText = "/" }, 1500);
  setTimeout(function() { demo.innerText = "—" }, 2000);
  setTimeout(function() { demo.innerText = "\\" }, 2500);
  setTimeout(function() { demo.innerText = "|" }, 3000);
  setTimeout(function() { demo.innerText = "/" }, 3500);
}

// Ensure that the setInterval does not immediately call the function
setTimeout(function() { loadingDemo(); demo.style.fontSize = "100px"; setInterval(loadingDemo, 4000) }, 1000)