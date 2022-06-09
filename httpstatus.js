const httpStatus = "https://httpstat.us/200"

fetch(httpStatus, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
})
    .then(function (response) {
        if (response.ok) return response.json();
        else throw new Error("Status code error :" + response.status)
    })
    .catch(err => {
        window.alert("Error Encountered")
    })
// .then(function (data) {
//     console.log("HTTP Status", data)
// })

console.log("HTTP Status")