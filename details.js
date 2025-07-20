addEventListener("DOMContentLoaded", async function(){
    //grab the search params from the url after the question mark
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get('id')
    console.log(songID)

/**
    const response = await fetch("http://localhost:3000/api/songs") // if anything is added after this URL I get a 404 error
    const song = await response.json()
    console.log(song)

    let heading = " "
    heading += `${song.title}`
    document.querySelector("h1").innerHTML = heading
}) **/

   

    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    // find the song with the matching ID
    const song = songs.find(s => s._id === songID)
    document.querySelector("h1").innerText = song.title

    // Example: Display more details
    document.querySelector("div").innerHTML = `
        <p><strong>Artist:</strong> ${song.artist}</p>
        <p><strong>Popularity:</strong> ${song.popularity}</p>
        <p><strong>Release Date:</strong> ${new Date(song.releaseDate).toLocaleDateString()}</p>
        <p><strong>Genres:</strong> ${song.genre.join(", ")}</p>
    `
})
