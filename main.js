const pageElement = document.querySelector('#page');

const audioPlayer = document.querySelector('#player')
pageElement.appendChild(audioPlayer)

const searchElement = document.querySelector('#search')
pageElement.appendChild(searchElement)

const inputBox = document.querySelector('#box');
searchElement.appendChild(inputBox)

const submitButton = document.querySelector('#submit');
searchElement.appendChild(submitButton)

const resultElement = document.querySelector('#results')
pageElement.appendChild(resultElement)
//these variables are for elements on my page

function buildResultList(songData) {
    resultElement.innerHTML = ""
    //replaces resultElement with empty string as first action when function is called
    songData.map(function (song) {
        console.log("Songs Line 22", song.trackName);

        let songElement = document.createElement('div')
        songElement.classList.add('songs')
        resultElement.appendChild(songElement)

        let albumArt = document.createElement('div')
        albumArt.innerHTML = `<img src=${song.artworkUrl100}>`
        songElement.appendChild(albumArt)

        let trackInfo = document.createElement('div')
        trackInfo.classList.add('tracks')
        trackInfo.innerText = `${song.trackName} by ${song.artistName}`
        songElement.appendChild(trackInfo)

        let previewAudio = document.createElement('div')
        previewAudio.classList.add('preview')
        previewAudio.innerText = song.previewUrl
        songElement.appendChild(previewAudio)

        songElement.addEventListener("click", function (event) {
            if (event.target.textContent.includes(song.trackName)) {
                audioPlayer.src = event.target.nextElementSibling.innerText
            }
        })
        //this creates an event listener for a click within the song element and, if text content of target clicked includes the track name, then it will replace the source of the audio player with the next element's inner text
    });
};
//this function builds the list of search results

submitButton.addEventListener("click", function (event) {
    let userSearch = inputBox.value
    //this creates a variable for the value of the input box

    let myTunes = `https://itunes.apple.com/search?term=${userSearch}&media=music`;
    //this defines the API link as a base with the sting of the value entered into the inputBox by the user (userSearch)

    fetch(myTunes, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        //this gets the iTunes API data
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            buildResultList(data.results)
            //this calls the buildSongList function with the promised response
        })
        .catch(err => {
            window.alert("Error Encountered")
        })
    // fetch is nested in event listener so data is only fetched when the event occurs
})

document.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        let userSearch = inputBox.value
        let myTunes = `https://itunes.apple.com/search?term=${userSearch}&media=music`;
        fetch(myTunes, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                buildResultList(data.results)
            })
            .catch(err => {
                window.alert("Error Encountered")
            })
    }
})