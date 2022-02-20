logout = document.getElementById('logout')
logout.addEventListener('click', () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location = "http://localhost:3000/";

})