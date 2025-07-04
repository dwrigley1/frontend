// we are going to make an event listener.
// it will trigger when the DOM is loaded
// aka upon visiting the wbpage

addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("https://shelled-flying-client.glitch.me/api/songs");
    const songs = await response.json();

    let html = ""; // blank screen
    for (let song of songs) {
        html += `<li>${song.title} - ${song.artist}</li>`; // show title + artist
    }

    document.querySelector("#addedsong").innerHTML = html;
});