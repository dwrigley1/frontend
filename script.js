// we are going to make an event listener.
// it will trigger when the DOM is loaded
// aka upon visiting the wbpage

addEventListener("DOMContentLoaded", async function() {
    //const response = await fetch("https://shelled-flying-client.glitch.me/api/songs"); // send to Glitch
    const response = await fetch("http://localhost:3000/api/songs") // keep local

    const songs = await response.json();

    let html = ""; // blank screen
    for (let song of songs) {
        let songID = song._id
        html+=`<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> <a href="edit.html?id=${songID}"> Edit </a></li>`
    }

    document.querySelector("#list_of_songs").innerHTML = html;
});