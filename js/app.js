console.log("Connected");

let about = document.querySelector("#menu-about");
let stack = document.querySelector("#menu-stack");
let projects = document.querySelector("#menu-projects");
let checkbox = document.querySelector("#navi-toggle");

about.addEventListener("click", function(){
    console.log("Worked");
    checkbox.checked = false;
});

stack.addEventListener("click", function(){
    console.log("Worked");
    checkbox.checked = false;
});

projects.addEventListener("click", function(){
    console.log("Worked");
    checkbox.checked = false;
});