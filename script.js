// we are going to make an event listener.
// it will trigger when the DOM is loaded
// aka upon visiting the wbpage

addEventListener("DOMContentLoaded", async function() {
    //const response = await fetch("https://shelled-flying-client.glitch.me/api/songs"); // send to Glitch
    const response = await fetch("http://localhost:3000/api/songs") // keep local

    const songs = await response.json();

    let html = ""; // blank screen
    for (let song of songs) {
        html += `<li>${song.title} - ${song.artist}</li>`; // show title + artist
    }

    document.querySelector("#addedsong").innerHTML = html;
});