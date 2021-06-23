var user = {
  name: "",
  password: "",
}

function Login(result) {
  console.log("Checking Credentials............")

  user.name = prompt("Enter Username")
  user.password = prompt("Enter Password")

  var resp = result()

  resp
    ? console.log("Login successfull")
    : console.log("Invalid password/username")
}

Login(function result() {
  if (user.name === "Arun" && user.password === "1234") {
    return true
  } else {
    return false
  }
})
