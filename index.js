
let nameInput = document.getElementById("name")
var namee = ""
nameInput.addEventListener("keypress", function(e) {
    namee = e.target.value;
})

let emailInput = document.getElementById("email")
var email = "";
emailInput.addEventListener("keypress", function(e) {
    email = e.target.value;
})

console.log("dwfw");
let form = document.querySelector("form");
form.onsubmit = function(e) {
    e.preventDefault();
    console.log(namee, email);
    console.log("submit");
    let name = document.getElementById("name").value;
    let url = " https://crudcrud.com/api/7b7bdbd59803493782d72b27bf895efc/post";
    axios.post(url,{

    })
}