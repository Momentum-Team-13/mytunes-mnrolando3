const pageElement = document.querySelector('#page');

let pageTitle = document.createElement('h1');
pageTitle.innerText = "Music Search";
pageElement.appendChild(pageTitle);

let searchBox = document.createElement('input');
searchBox.classList.add("search");
pageElement.appendChild(searchBox);

let submitButton = document.createElement('button');
submitButton.innerText = "Submit";
pageElement.appendChild(submitButton);
//these variables are for elements on my page

function buildResultList(songData) {
    console.log("Function Line 14", songData)

    songData.map(function (song) {
        console.log("Songs Line 22", song.trackName);

        let songElement = document.createElement('div');
        songElement.classList.add('results');
        songElement.innerText = `${song.trackName}, ${song.artistName}`;
        pageElement.appendChild(songElement);
    });
};
//this function builds the list of search results

submitButton.addEventListener("click", function (event) {
    let userSearch = searchBox.value
    console.log("userSearch Line 21", searchBox.value);
    //this prints to the text entered by the user into the searchBox element, which occurs when the submitButton is clicked

    let myTunes = `https://itunes.apple.com/search?term=${userSearch}`;
    //this defines the API link as a base with the sting of the value entered into the searchBox by the user (userSearch)

    fetch(myTunes, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
        //this gets the iTunes API data
        .then(function (response) {
        return response.json()
    });
        .then(function (data) {
        console.log("Data Line 36", data.results)
        //this returns an array of data results
        buildResultList(data.results)
        //this calls the buildSongList function with the promised response
    });
    //fetch is nested in event listener so data is only fetched when the event occurs
});