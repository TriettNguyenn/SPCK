const  sign_in = () => {
    const User = document.querySelector(".User").value
    const Pass = document.querySelector(".Pass").value
    const data = {
        email : User,
        password : Pass,
        roll : 1
    }
    fetch("http://localhost:3000/User" , {
        method : "POST",
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(data)
    })
    alert("Đăng kí thành công");
    window.location.href = "log_in.html";
}
const   login_in = () => {
    const User = document.querySelector(".User").value
    const Pass = document.querySelector(".Pass").value
    fetch("http://localhost:3000/User")
        .then(reponse => reponse.json())
        .then(data =>{
            console.log(data)
            for(let user of data) {
                if((email==user.email) && (password==user.password)) {
                localStorage.setItem("user" , JSON.stringify(user))
                window.location.href = "home.html";
                return }
            }
                alert("Đăng nhập thất bại")
            }               
      )  
}