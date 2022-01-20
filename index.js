// Add your code here
document.addEventListener('DOMContentLoaded', () => {
    // submitData('matt', 'draghi')
})

const submitData = (name, email) => {
    const userData = {
        name: name,
        email: email
    }

    const configurationObject = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
            },
            body: JSON.stringify(userData),
    }

    return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
        console.log(object.id)
        document.querySelector('body').append(object.id)
        // let div = document.createElement('div')
        // div.innerText = object.id
        // document.querySelector(`body`).appendChild(div)
    })
    .catch(error => {
        // alert(error.message)
        console.log(error.message)
        document.querySelector('body').append(error.message)
    })
}