document.addEventListener("DOMContentLoaded", () => {
    const deleteBtn = document.querySelector("#deleteBtn");
    const dropdown = document.querySelector("#songDropDown");
    const errorDiv = document.querySelector("#error");

    deleteBtn.addEventListener("click", deleteSong);
    getAllSongs();

    async function getAllSongs() {
        try {
            console.log("entered try statement in getAllSOngs()") // works!
            const response = await fetch("https://backend-yjzl.onrender.com/api/songs");
            if (!response.ok) throw new Error("Failed to fetch songs");
            const songs = await response.json();

            dropdown.innerHTML = ""; // Clear old options
            songs.forEach(song => {
                const option = document.createElement("option");
                option.value = song._id;
                option.textContent = song.title || song._id;
                dropdown.appendChild(option);
                
            });
        } catch (err) {
            console.error("getAllSongs error:", err);
            errorDiv.textContent = "Unable to load songs.";
            console.log("catch statement") // is not being logged
        }
    }

    async function deleteSong() {
    const songId = document.querySelector("#songDropDown").value;

    if (!songId) {
        errorDiv.textContent = "Please select a song to delete.";
        return;
    }

    const confirmDelete = confirm("Are you sure you want to delete this song?");
    if (!confirmDelete) return;

    try {
        const response = await fetch(`https://backend-yjzl.onrender.com/api/songs/${songId}`, {
            method: "DELETE"
        });
        
        const data = await response.json();
        console.log("Deleted:", data);
        
        if (!response.ok) {
            throw new Error(data.message || "Delete failed");
        }
        alert("Song deleted!");
        getAllSongs();
    } catch (err) {
        console.error("Delete error:", err);
        errorDiv.textContent = "Failed to delete song.";
    }
}
})