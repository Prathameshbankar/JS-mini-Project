const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement('p');
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/3334328.png";

    // Append both elements separately
    noteContainer.appendChild(inputBox);
    inputBox.appendChild(img);

    // Adjust image size using CSS
    img.style.width = "20px";  // Set width to 20px (adjust as needed)
    img.style.height = "20px"; // Set height to 20px (adjust as needed)
    img.style.cursor = "pointer";

    // Add event listener for the input box
    inputBox.addEventListener("input", updateStorage);  // Trigger updateStorage when content changes
});

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        noteContainer.innerHTML = savedNotes;
    }
}

showNotes();  // Show notes when the page loads

noteContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();  // Update storage after removal
    } else if (e.target.tagName === "P") {
        e.target.addEventListener("input", updateStorage);  // Ensure the input event triggers on the new note
    }
});
