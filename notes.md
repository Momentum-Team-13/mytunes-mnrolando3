Form
- input for artist/band that filters song data
    - key1=value1&key2=value2&key3=value3 build in innerText/innerHTML where key is 'term' and value is artist name with substituting '+' for spaces in artist name
- input box has click "submit" button event listener and keyboard "return" event listener
- can't submit empty input

Results
- display without reloading page -- what does this mean??
- determine quantity of results to return
- clear message for no results
- message for HTTP errors in UI and how to handle in JS -- ??
- include song details (title, artist, album title, image, release date)
- ability to click song (event listener) and have it play (audio tag)

Questions
- NPM install
- reloading page
- how are HTTP errors handled in JS?
- do I need to make another function for the search to add both or do I need to just copy the code to search with two separate event listeners??

To Do
- Filter to only show userSearch = song.artistName
