let fileView = document.querySelector('#fileview');

let searchInput = document.querySelector('#searchInput');
let searchButton = document.querySelector('#searchButton');
let dismissButton = document.querySelector('#dismissBtn');
let hiScoreNote = document.querySelector('#hiScoreNote');

while (searchInput.selected = true) {
    searchInput.addEventListener('keypress', function(event) {
        if(event.key === "Enter") {
            searchButton.click();
        }
    })
    break;
}

dismissButton.onclick = function() {
    hiScoreNote.style.display = 'none';
};
