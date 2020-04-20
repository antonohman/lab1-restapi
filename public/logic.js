fetch("http://localhost:3000/users").then((response) => {
    return response.json()
}).then((users) => {
    console.log(users)
    printAllUsers(users)
})

function printAllUsers(users) {
    let allUsersContainer = document.getElementById("allUsers")
    
    users.forEach(user => {
        let userName = document.createElement("h4")
        userName.innerText = user.name
        let userAge = document.createElement("h4")
        userAge.innerText = user.age

        let userDiv = document.createElement("div")
        userDiv.appendChild(userAge)
        userDiv.appendChild(userName)

        allUsersContainer.appendChild(userDiv)
    })
}

function getSpecificUser() {
    const id = document.getElementById("userIdInput").value

    fetch("http://localhost:3000/users/" + id).then((response) => {
        if(response.status === 404) {
            printSpecificUser()
        } else {
            return response.json()
        }
    }).then((users) => {
        console.log(users)
        printSpecificUser(users)
    })
}

function printSpecificUser(user) {
    let specificUserContainer = document.getElementById("specificUser")
    specificUserContainer.innerHTML = ""

    if(user) {
        let userName = document.createElement("h4")
        userName.innerText = user.name
        let userAge = document.createElement("h4")
        userAge.innerText = user.age

        specificUserContainer.appendChild(userName)
        specificUserContainer.appendChild(userAge)
        
    } else {
        let errorResponse = document.createElement("h4")
        errorResponse.innerText = "Hittade ingen användare"
        specificUserContainer.appendChild(errorResponse)
    }
}