const form_ = document.getElementById("login-form")
form_.addEventListener("submit", submitform);
function submitform(){
    alert("ok")
    xhr.open(form_.method, "http://localhost:3000/api/v1/users/login", true);
    console.log(form_)
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    var j = {
        "username":"binchen",
        "password":"heris",
    };
    xhr.send(JSON.stringify(j));
}
  