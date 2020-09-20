console.log('Client side javascript file')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector("#messageOne")

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    if(location === undefined || location === ""){
        console.log("No value provided!");
        return;
    }

    fetch('http://puzzle.mead.io/puzzle').then((resp) => {
        resp.json().then((data) => {
            console.log(data)
            messageOne.textContent = JSON.stringify(data)
        })
        
        
    })

    console.log(location)
})