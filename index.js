// Add your code here
function submitData(userName,userEmail) {
    const UrlApi = "http://localhost:3000/users"
    let dataToSend = {
        name: userName,
        email: userEmail
    }
    fetch(UrlApi,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(dataToSend)
    })
    .then(res => res.json())
    .then(data => attachToSite(data))
    .catch(err => catchErrors(err))
}
//submitData("Ben","testing")

function attachToSite(data){
    const getDiv = document.getElementById('users')
    getDiv.append(data.id)
}

function catchErrors(err){
    const getDiv = document.getElementById('users')
    getDiv.append(err)
}

