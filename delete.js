addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#deleteBtn").addEventListener("click", deleteSong);
    getAllSongs();
});

async function getAllSongs(){
    const response = await fetch("https://backend-yjzl.onrender.com/api/songs");
    if(response.ok){
        const songs = await response.json();
        let html = "";
        for(let song of songs){
            const title = song.title || song._id;
            html += `<option value="${song._id}">${title}</option>`;
        }
        document.querySelector("#songDropDown").innerHTML = html;
    } else {
        document.querySelector("#error").textContent = "Failed to load songs.";
    }
}

async function deleteSong() {
    const id = document.querySelector("#songDropDown").value;
    const response = await fetch(`https://backend-yjzl.onrender.com/api/songs/${id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        alert("Song deleted!");
        getAllSongs(); // Reload the updated list
    } else {
        document.querySelector("#error").textContent = "Failed to delete song.";
    }
}
