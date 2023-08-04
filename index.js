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
    let url = "https://crudcrud.com/api/e00755a28ff54a07aae0f7c4aa7d771d/posts";
    if (namee !=="" && email !== "") {
        axios.post(url,
            {
                "name":namee,
                "email":email
            }
        )
        showData();
    } else {
        alert("Please enter a name and email");
    }
    
}
let showData = async() =>{
    let url = "https://crudcrud.com/api/e00755a28ff54a07aae0f7c4aa7d771d/posts";
    const someData = await axios.get(url).then((res) => res.data);
    console.log(someData);
    let ul = document.querySelector("ul");
    ul.innerHTML = ""
    someData.forEach(element => {
        let li = document.createElement("li");
        li.textContent = `${element.name} - ${element.email}`;
        ul.appendChild(li);
    });
}